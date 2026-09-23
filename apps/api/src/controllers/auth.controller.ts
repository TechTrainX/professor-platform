import type { Request, Response } from "express";
import { login } from "../services/auth.service.js";
import { env } from "../config/env.js";
import { sendSuccess } from "../utils/api-response.js";

export async function loginController(req: Request, res: Response) {
  const token = await login(req.body.email, req.body.password);
  res.cookie(env.COOKIE_NAME, token, { httpOnly: true, sameSite: "lax", secure: env.NODE_ENV === "production", maxAge: 8 * 60 * 60 * 1000 });
  return sendSuccess(res, { authenticated: true });
}
export function logoutController(_req: Request, res: Response) { res.clearCookie(env.COOKIE_NAME); return sendSuccess(res, { authenticated: false }); }
