export type PublishStatus = "draft" | "published";
export type ApiSuccess<T> = { success: true; data: T; meta: Record<string, unknown> };
export type ApiFailure = { success: false; error: { code: string; message: string; details: unknown[] }; meta: Record<string, unknown> };
