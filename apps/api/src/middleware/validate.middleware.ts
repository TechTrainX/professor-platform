import type { RequestHandler } from "express";
import type { ZodSchema } from "zod";
import { AppError } from "../utils/app-error.js";

export const validate = (schema: ZodSchema): RequestHandler => (req, _res, next) => {
  const result = schema.safeParse({ body: req.body, params: req.params, query: req.query });
  if (!result.success) return next(new AppError(400, "VALIDATION_ERROR", "Request validation failed", result.error.issues));
  req.body = result.data.body;
  req.params = result.data.params;
  req.query = result.data.query;
  next();
};
