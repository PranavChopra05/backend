import express from "express";
import z from "zod";
import bcrypt from "bcrypt";
import { contentModel, userModel, linkModel } from "./db.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { userMiddleware } from "./middleware.js";
import dotenv from "dotenv";
import { random } from "./utils.js";
import cors from "cors";
dotenv.config();
console.log("MONGO_URI from env:", process.env.MONGODB_URI);
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI);
app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const requiredBody = z.object({
        username: z.string().min(3).max(25),
        password: z.string().min(6).max(20),
    });
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if (!parsedDataWithSuccess.success) {
        res.status(411).json({
            message: "Incorrect format",
            errors: parsedDataWithSuccess.error.issues
        });
        return;
    }
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    await userModel.create({
        username,
        password: hashedPassword,
    });
    res.status(200).json({
        message: "You are now signed up!.",
    });
});
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await userModel.findOne({
        username: username,
    });
    if (user == null) {
        res.json({
            message: "User not found",
        });
        return;
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString(),
        }, process.env.JWT_SECRET);
        res.json({
            token,
        });
    }
    else {
        res.json({
            message: "Incorrect credentials",
        });
    }
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const contentBody = z.object({
        link: z.string().url("Please provide a valid URL"),
        type: z.string().min(1, "Content type is required"),
        title: z.string().min(1, "Title is required").max(200),
    });
    const parsed = contentBody.safeParse(req.body);
    if (!parsed.success) {
        return res.status(411).json({
            message: "Invalid input",
            errors: parsed.error.issues,
        });
    }
    const { link, type, title } = parsed.data;
    await contentModel.create({
        link,
        type,
        title,
        userId: req.userId,
        tags: [],
    });
    res.json({
        message: "Content added successfully",
    });
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const contents = await contentModel
        .find({
        userId,
    })
        .populate("userId", "username");
    res.json({ contents });
});
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    if (!contentId) {
        return res.status(400).json({ message: "Content ID is required" });
    }
    const content = await contentModel.findById(contentId);
    if (!content) {
        return res.status(404).json({ message: "Content not found" });
    }
    if (content.userId?.toString() !== req.userId) {
        return res
            .status(403)
            .json({ message: "You are not allowed to delete this content" });
    }
    await contentModel.findOneAndDelete({
        _id: contentId,
        userId: req.userId,
    });
    res.json({ message: "Content deleted successfully" });
});
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        // Check if user already has a share link
        const existing = await linkModel.findOne({ userId: req.userId });
        if (existing) {
            return res.json({
                message: "Share link already exists",
                hash: existing.hash
            });
        }
        const hash = random(12);
        await linkModel.create({
            userId: req.userId,
            hash: hash,
        });
        res.json({
            message: "Share link created successfully",
            hash: hash
        });
    }
    else {
        await linkModel.deleteOne({
            userId: req.userId,
        });
        res.json({
            message: "Share link removed successfully",
        });
    }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await linkModel.findOne({
        hash,
    });
    if (!link) {
        res.status(411).json({
            message: "Share link not found",
        });
        return;
    }
    const content = await contentModel.find({
        //@ts-ignore
        userId: link.userId,
    });
    const user = await userModel.findOne({
        _id: link.userId,
    });
    if (!user) {
        res.status(411).json({
            message: "User not found, this should not happen ideally!",
        });
        return;
    }
    res.json({
        username: user.username,
        content: content,
    });
});
app.get("/api/v1/me", userMiddleware, async (req, res) => {
    const user = await userModel.findById(req.userId).select("-password");
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
});
// Only listen when running locally (not on Vercel)
const PORT = process.env.PORT || 3000;
if (process.env.VERCEL !== "1") {
    app.listen(PORT, () => {
        console.log(`server started successfully on port ${PORT}`);
    });
}
export default app;
//# sourceMappingURL=index.js.map