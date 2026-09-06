import express from "express";
import z from "zod";
import bcrypt from "bcrypt";
import { contentModel, userModel, linkModel, VALID_CONTENT_TYPES } from "./db.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { CustomRequest, userMiddleware } from "./middleware.js";
import dotenv from "dotenv";
import { random } from "./utils.js";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("✓ MongoDB connected"))
  .catch((err) => console.error("✗ MongoDB connection error:", err.message));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const AI_MODEL = "gemini-2.0-flash";

const typeEnum = z.enum(VALID_CONTENT_TYPES as [string, ...string[]]);

// ─── Health ───
app.get("/api/v1/health", (_req, res) => {
  res.json({ status: "ok", db: mongoose.connection.readyState === 1 ? "up" : "down" });
});

// ════════════════════════ AUTH ════════════════════════
app.post("/api/v1/signup", async (req, res) => {
  const requiredBody = z.object({
    username: z.string().min(3, "Username must be at least 3 characters").max(25).trim(),
    password: z.string().min(6, "Password must be at least 6 characters").max(64),
  });

  const parsed = requiredBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      message: parsed.error.issues[0]?.message || "Invalid input",
      errors: parsed.error.issues,
    });
  }

  const { username, password } = parsed.data;

  const existingUser = await userModel.findOne({ username });
  if (existingUser) {
    return res.status(409).json({ message: "That username is already taken" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await userModel.create({ username, password: hashedPassword });
  } catch (err: any) {
    // Unique index guards against the check-then-act race between two signups.
    if (err?.code === 11000) {
      return res.status(409).json({ message: "That username is already taken" });
    }
    throw err;
  }

  res.status(201).json({ message: "Account created. You can sign in now." });
});

app.post("/api/v1/signin", async (req, res) => {
  const body = z.object({
    username: z.string().min(1).trim(),
    password: z.string().min(1),
  });
  const parsed = body.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const { username, password } = parsed.data;
  const user = await userModel.findOne({ username });

  // Same generic error + same code for both cases to avoid user enumeration.
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Incorrect username or password" });
  }

  const token = jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
  res.json({ token, user: { id: user._id.toString(), username: user.username } });
});

app.get("/api/v1/me", userMiddleware, async (req: CustomRequest, res) => {
  const user = await userModel.findById(req.userId).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ user: { id: user._id.toString(), username: user.username } });
});

// ════════════════════════ CONTENT ════════════════════════
const contentBody = z.object({
  link: z.string().url("Please provide a valid URL"),
  type: typeEnum,
  title: z.string().min(1, "Title is required").max(200),
  notes: z.string().max(2000).optional(),
  tags: z.array(z.string().min(1).max(40)).max(20).optional(),
  collectionName: z.string().max(60).optional(),
  favorite: z.boolean().optional(),
});

app.post("/api/v1/content", userMiddleware, async (req: CustomRequest, res) => {
  const parsed = contentBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      message: parsed.error.issues[0]?.message || "Invalid input",
      errors: parsed.error.issues,
    });
  }

  const { link, type, title, notes, tags, collectionName, favorite } = parsed.data;
  const content = await contentModel.create({
    link,
    type,
    title,
    notes: notes ?? "",
    tags: normalizeTags(tags),
    collectionName: collectionName?.trim() ?? "",
    favorite: favorite ?? false,
    userId: req.userId,
  });

  res.status(201).json({ message: "Content added", content });
});

app.get("/api/v1/content", userMiddleware, async (req: CustomRequest, res) => {
  const contents = await contentModel
    .find({ userId: req.userId })
    .sort({ favorite: -1, createdAt: -1 });
  res.json({ contents });
});

// Edit (full or partial)
const editBody = contentBody.partial();
app.put("/api/v1/content/:id", userMiddleware, async (req: CustomRequest, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: "Invalid content id" });
  }
  const parsed = editBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      message: parsed.error.issues[0]?.message || "Invalid input",
      errors: parsed.error.issues,
    });
  }

  const content = await contentModel.findById(req.params.id);
  if (!content) return res.status(404).json({ message: "Content not found" });
  if (content.userId?.toString() !== req.userId) {
    return res.status(403).json({ message: "Not allowed to edit this content" });
  }

  const update = { ...parsed.data } as Record<string, unknown>;
  if (parsed.data.tags) update.tags = normalizeTags(parsed.data.tags);
  if (typeof parsed.data.collectionName === "string") update.collectionName = parsed.data.collectionName.trim();

  const updated = await contentModel.findByIdAndUpdate(req.params.id, update, { new: true });
  res.json({ message: "Content updated", content: updated });
});

// Single delete (RESTful)
app.delete("/api/v1/content/:id", userMiddleware, async (req: CustomRequest, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: "Invalid content id" });
  }
  const content = await contentModel.findById(req.params.id);
  if (!content) return res.status(404).json({ message: "Content not found" });
  if (content.userId?.toString() !== req.userId) {
    return res.status(403).json({ message: "Not allowed to delete this content" });
  }
  await contentModel.deleteOne({ _id: req.params.id });
  res.json({ message: "Content deleted" });
});

// Legacy single delete (body { contentId }) — kept for backward compatibility
app.delete("/api/v1/content", userMiddleware, async (req: CustomRequest, res) => {
  const contentId = req.body?.contentId;
  if (!contentId || !mongoose.isValidObjectId(contentId)) {
    return res.status(400).json({ message: "Valid content ID is required" });
  }
  const result = await contentModel.deleteOne({ _id: contentId, userId: req.userId });
  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "Content not found" });
  }
  res.json({ message: "Content deleted" });
});

// Bulk delete
app.post("/api/v1/content/bulk-delete", userMiddleware, async (req: CustomRequest, res) => {
  const body = z.object({ ids: z.array(z.string()).min(1) });
  const parsed = body.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "ids array is required" });

  const validIds = parsed.data.ids.filter((id) => mongoose.isValidObjectId(id));
  const result = await contentModel.deleteMany({ _id: { $in: validIds }, userId: req.userId });
  res.json({ message: `Deleted ${result.deletedCount} item(s)`, deletedCount: result.deletedCount });
});

// ════════════════════════ SHARE ════════════════════════
app.get("/api/v1/share/status", userMiddleware, async (req: CustomRequest, res) => {
  const link = await linkModel.findOne({ userId: req.userId });
  res.json({ shared: !!link, hash: link?.hash ?? null });
});

app.post("/api/v1/brain/share", userMiddleware, async (req: CustomRequest, res) => {
  const share = req.body?.share;

  if (share) {
    const existing = await linkModel.findOne({ userId: req.userId });
    if (existing) {
      return res.json({ message: "Share link active", hash: existing.hash });
    }
    const hash = random(12);
    await linkModel.create({ userId: req.userId, hash });
    return res.json({ message: "Share link created", hash });
  }

  await linkModel.deleteOne({ userId: req.userId });
  res.json({ message: "Sharing turned off" });
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const link = await linkModel.findOne({ hash: req.params.shareLink });
  if (!link) return res.status(404).json({ message: "Shared brain not found" });

  const [content, user] = await Promise.all([
    contentModel.find({ userId: link.userId }).sort({ favorite: -1, createdAt: -1 }),
    userModel.findById(link.userId).select("username"),
  ]);

  if (!user) return res.status(404).json({ message: "Owner no longer exists" });
  res.json({ username: user.username, content });
});

// ════════════════════════ AI ════════════════════════
app.post("/api/v1/ai/search", userMiddleware, async (req: CustomRequest, res) => {
  try {
    const query = String(req.body?.query ?? "").trim();
    if (!query) return res.status(400).json({ message: "Search query is required" });

    const contents = await contentModel.find({ userId: req.userId });
    if (contents.length === 0) {
      return res.json({ matchedIds: [], summary: "Your brain is empty. Save a few links and try again." });
    }
    res.json(await performAiSearch(query, contents));
  } catch (err) {
    console.error("AI search error:", err);
    res.status(500).json({ message: "AI search failed. Please try again." });
  }
});

app.post("/api/v1/ai/search-public", async (req, res) => {
  try {
    const query = String(req.body?.query ?? "").trim();
    const hash = String(req.body?.hash ?? "");
    if (!query) return res.status(400).json({ message: "Search query is required" });
    if (!hash) return res.status(400).json({ message: "Share hash is required" });

    const link = await linkModel.findOne({ hash });
    if (!link) return res.status(404).json({ message: "Shared brain not found" });

    const contents = await contentModel.find({ userId: link.userId });
    if (contents.length === 0) {
      return res.json({ matchedIds: [], summary: "This shared brain has no content yet." });
    }
    res.json(await performAiSearch(query, contents));
  } catch (err) {
    console.error("AI search (public) error:", err);
    res.status(500).json({ message: "AI search failed. Please try again." });
  }
});

// Chat with your brain
const chatBody = z.object({
  message: z.string().min(1).max(1000),
  history: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().max(4000) }))
    .max(12)
    .optional(),
});

app.post("/api/v1/ai/chat", userMiddleware, async (req: CustomRequest, res) => {
  try {
    const parsed = chatBody.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "A message is required" });

    const contents = await contentModel.find({ userId: req.userId });
    if (contents.length === 0) {
      return res.json({
        answer: "Your brain is empty right now. Save some links and I'll be able to answer questions about them!",
        sourceIds: [],
      });
    }
    res.json(await performAiChat(parsed.data.message, parsed.data.history ?? [], contents));
  } catch (err) {
    console.error("AI chat error:", err);
    res.status(500).json({ message: "AI chat failed. Please try again." });
  }
});

// Chat over a shared (public) brain
app.post("/api/v1/ai/chat-public", async (req, res) => {
  try {
    const hash = String(req.body?.hash ?? "");
    if (!hash) return res.status(400).json({ message: "Share hash is required" });
    const parsed = chatBody.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "A message is required" });

    const link = await linkModel.findOne({ hash });
    if (!link) return res.status(404).json({ message: "Shared brain not found" });

    const contents = await contentModel.find({ userId: link.userId });
    if (contents.length === 0) {
      return res.json({ answer: "This shared brain has no content yet.", sourceIds: [] });
    }
    res.json(await performAiChat(parsed.data.message, parsed.data.history ?? [], contents));
  } catch (err) {
    console.error("AI chat (public) error:", err);
    res.status(500).json({ message: "AI chat failed. Please try again." });
  }
});

// ─── AI helpers ───
function compactContents(contents: any[]) {
  return contents.map((c) => ({
    id: c._id.toString(),
    title: c.title,
    link: c.link,
    type: c.type,
    tags: c.tags ?? [],
    notes: c.notes ? String(c.notes).slice(0, 200) : "",
  }));
}

function extractJson(text: string): string {
  let clean = text.trim();
  if (clean.startsWith("```")) {
    clean = clean.replace(/^```(?:json)?\s*/i, "").replace(/```$/, "").trim();
  }
  return clean;
}

async function performAiSearch(query: string, contents: any[]) {
  const prompt = `You are the search engine for "Cluttr", a personal bookmarking app (a "second brain").
The user has saved these items:

${JSON.stringify(compactContents(contents), null, 2)}

The user is searching for: "${query}"

Tasks:
1. Find ALL items relevant to the query using semantic understanding — match by topic, meaning, tags, and context, not just literal text. Be generous.
2. Write a brief, friendly summary (2-4 sentences) of what matched and why.

Respond with ONLY valid JSON, no markdown:
{"matchedIds": ["id1","id2"], "summary": "..."}
If nothing matches: {"matchedIds": [], "summary": "No matches. Try different keywords."}`;

  const model = genAI.getGenerativeModel({ model: AI_MODEL });
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  try {
    const parsed = JSON.parse(extractJson(text));
    const validIds = new Set(contents.map((c) => c._id.toString()));
    return {
      matchedIds: Array.isArray(parsed.matchedIds)
        ? parsed.matchedIds.filter((id: unknown) => typeof id === "string" && validIds.has(id))
        : [],
      summary: typeof parsed.summary === "string" ? parsed.summary : "Search complete.",
    };
  } catch {
    return { matchedIds: [], summary: "I had trouble searching just now. Please try again." };
  }
}

async function performAiChat(
  message: string,
  history: { role: string; content: string }[],
  contents: any[]
) {
  const convo = history.map((h) => `${h.role === "user" ? "User" : "Assistant"}: ${h.content}`).join("\n");

  const prompt = `You are the assistant inside "Cluttr", a personal second-brain bookmarking app.
You can ONLY reason about the user's saved items below. Be warm, concise and genuinely useful.

SAVED ITEMS:
${JSON.stringify(compactContents(contents), null, 2)}

${convo ? `CONVERSATION SO FAR:\n${convo}\n` : ""}
User's new message: "${message}"

Instructions:
- Answer using the saved items. If relevant items exist, weave them into your answer naturally.
- If nothing relevant is saved, say so honestly and suggest what they could save.
- "sourceIds" must list the ids of items you actually referenced (most relevant first), or [] if none.
- Keep "answer" under ~120 words unless the user asked for detail.

Respond with ONLY valid JSON, no markdown:
{"answer": "...", "sourceIds": ["id1","id2"]}`;

  const model = genAI.getGenerativeModel({ model: AI_MODEL });
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  try {
    const parsed = JSON.parse(extractJson(text));
    const validIds = new Set(contents.map((c) => c._id.toString()));
    return {
      answer: typeof parsed.answer === "string" ? parsed.answer : "Sorry, I couldn't form an answer.",
      sourceIds: Array.isArray(parsed.sourceIds)
        ? parsed.sourceIds.filter((id: unknown) => typeof id === "string" && validIds.has(id))
        : [],
    };
  } catch {
    return { answer: "I had trouble forming an answer just now. Please try again.", sourceIds: [] };
  }
}

// ─── utils ───
function normalizeTags(tags?: string[]): string[] {
  if (!tags) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of tags) {
    const t = raw.trim().toLowerCase();
    if (t && !seen.has(t)) {
      seen.add(t);
      out.push(t);
    }
  }
  return out.slice(0, 20);
}

// ─── 404 + global error handler (must be last) ───
app.use((_req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled error:", err);
  // Never leak stack traces / internal paths to clients.
  res.status(err?.status || 500).json({ message: "Something went wrong" });
});

// ─── boot ───
const PORT = process.env.PORT || 3000;
if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => console.log(`✓ Cluttr API listening on port ${PORT}`));
}

export default app;
