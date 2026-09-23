import { Schema, model } from "mongoose";
const adminSchema = new Schema({ email: { type: String, unique: true, required: true }, passwordHash: { type: String, required: true }, mustChangePassword: Boolean, lastLoginAt: Date }, { timestamps: true });
export const Admin = model("Admin", adminSchema);
