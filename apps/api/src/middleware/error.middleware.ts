import type { ErrorRequestHandler, RequestHandler } from "express";
import { AppError } from "../utils/app-error.js";
import { sendError } from "../utils/api-response.js";

export const notFoundMiddleware: RequestHandler = (_req, _res, next) => next(new AppError(404, "NOT_FOUND", "Route not found"));

export const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  const appError = error instanceof AppError ? error : new AppError(500, "INTERNAL_ERROR", "An unexpected error occurred");
  if (appError.statusCode >= 500) console.error(error);
  return sendError(res, appError.code, appError.message, appError.statusCode, appError.details);
};
