import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { AppError } from "../utils/app-error.js";

export const requireAuth: RequestHandler = (req, _res, next) => {
  const token = req.cookies?.[env.COOKIE_NAME];
  if (!token) return next(new AppError(401, "UNAUTHORIZED", "Authentication required"));
  try { jwt.verify(token, env.JWT_SECRET); next(); }
  catch { next(new AppError(401, "UNAUTHORIZED", "Authentication required")); }
};
