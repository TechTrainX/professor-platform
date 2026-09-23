import type { Request, Response } from "express";
import { createContent, listContent, updateContent } from "../services/content.service.js";
import { sendSuccess } from "../utils/api-response.js";

export async function listContentController(req: Request, res: Response) { const result = await listContent(req.query as Record<string, unknown>); return sendSuccess(res, { items: result.items }, 200, { pagination: result.pagination }); }
export async function listAdminContentController(req: Request, res: Response) { const result = await listContent(req.query as Record<string, unknown>, true); return sendSuccess(res, { items: result.items }, 200, { pagination: result.pagination }); }
export async function createContentController(req: Request, res: Response) { return sendSuccess(res, await createContent(req.body as Record<string, unknown>), 201); }
export async function updateContentController(req: Request, res: Response) { return sendSuccess(res, await updateContent(String(req.params.id), req.body as Record<string, unknown>)); }
