import mongoose, { Schema, Types } from "mongoose";
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const tagSchema = new Schema({
    title: { type: String, required: true, unique: true }
});
const contentTypes = [
    'youtube', 'twitter', 'reddit', 'github',
    'article', 'document', 'instagram', 'spotify',
    'pinterest', 'stackoverflow', 'linkedin', 'notion',
    'figma', 'dribbble', 'codepen', 'other'
];
const contentSchema = new Schema({
    link: { type: String, required: true },
    type: { type: String, required: true, enum: contentTypes },
    title: { type: String, required: true },
    tags: [{ type: Types.ObjectId, ref: 'Tag' }],
    userId: { type: Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
const linkSchema = new Schema({
    hash: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: 'User', required: true, unique: true }
});
export const VALID_CONTENT_TYPES = contentTypes;
export const userModel = mongoose.model("User", userSchema);
export const Tag = mongoose.model("Tag", tagSchema);
export const contentModel = mongoose.model("Content", contentSchema);
export const linkModel = mongoose.model("Link", linkSchema);
//# sourceMappingURL=db.js.map