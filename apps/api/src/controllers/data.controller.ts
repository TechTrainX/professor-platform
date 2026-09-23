import type { Request, Response } from "express";
import { getContent, getSite, getTools, updateContent, updateSite, updateTool } from "../services/data.service.js";
import { sendSuccess } from "../utils/api-response.js";
export async function siteController(_req: Request, res: Response) { return sendSuccess(res, await getSite()); }
export async function contentController(req: Request, res: Response) { return sendSuccess(res, await getContent(typeof req.query.type === "string" ? req.query.type : undefined)); }
export async function toolsController(req: Request, res: Response) { return sendSuccess(res, await getTools(req.path.includes("admin"))); }
export async function updateSiteController(req: Request, res: Response) { return sendSuccess(res, await updateSite(req.body)); }
export async function updateContentController(req: Request, res: Response) { return sendSuccess(res, await updateContent(String(req.params.id), req.body)); }
export async function updateToolController(req: Request, res: Response) { return sendSuccess(res, await updateTool(String(req.params.id), req.body)); }
