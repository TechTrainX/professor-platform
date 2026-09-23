import { Schema, model } from "mongoose";

const teachingToolSchema = new Schema({
  title: { type: String, required: true, trim: true }, slug: { type: String, required: true, unique: true, index: true }, summary: { type: String, required: true },
  descriptionHtml: String, instructionsHtml: String, learningObjective: String, category: String, tags: [String], difficulty: String,
  thumbnailMediaId: Schema.Types.ObjectId, supportingMediaIds: [Schema.Types.ObjectId], projectKey: String, projectEntryFile: { type: String, default: "index.html" },
  featured: Boolean, displayOrder: { type: Number, default: 0 }, status: { type: String, enum: ["draft", "published"], default: "draft", index: true }, publishedAt: Date
}, { timestamps: true });
export const TeachingTool = model("TeachingTool", teachingToolSchema);
