import type { Response } from "express";

export function sendSuccess(res: Response, data: unknown, status = 200, meta: Record<string, unknown> = {}) {
  return res.status(status).json({ success: true, data, meta: { ...meta, requestId: res.locals.requestId } });
}

export function sendError(res: Response, code: string, message: string, status: number, details: unknown[] = []) {
  return res.status(status).json({ success: false, error: { code, message, details }, meta: { requestId: res.locals.requestId } });
}
