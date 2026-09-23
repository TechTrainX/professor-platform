import { Schema, model } from "mongoose";

const contentSchema = new Schema({
  title: { type: String, required: true, trim: true }, slug: { type: String, required: true, unique: true, index: true },
  summary: String, descriptionHtml: String, category: String, tags: [String], displayOrder: { type: Number, default: 0 },
  featured: { type: Boolean, default: false }, status: { type: String, enum: ["draft", "published"], default: "draft", index: true }, publishedAt: Date
}, { timestamps: true, strict: true });
export const Content = model("Content", contentSchema);
