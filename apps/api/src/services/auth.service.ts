import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { Admin } from "../models/admin.model.js";
import { AppError } from "../utils/app-error.js";

export async function login(email: string, password: string) {
  const admin = await Admin.findOne({ email }).lean();
  if (!admin || !(await argon2.verify(admin.passwordHash, password))) throw new AppError(401, "INVALID_LOGIN", "Invalid email or password");
  const token = jwt.sign({ sub: String(admin._id), email: admin.email }, env.JWT_SECRET, { expiresIn: "8h" });
  await Admin.updateOne({ _id: admin._id }, { $set: { lastLoginAt: new Date() } });
  return token;
}
