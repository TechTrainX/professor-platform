import { promises as fs } from "node:fs";
import path from "node:path";

const dataDir = path.resolve(process.cwd(), "src/data");
async function read<T>(file: string): Promise<T> { return JSON.parse(await fs.readFile(path.join(dataDir, file), "utf8")) as T; }
async function write(file: string, value: unknown) { await fs.writeFile(path.join(dataDir, file), JSON.stringify(value, null, 2) + "\n", "utf8"); }
export const getSite = () => read<Record<string, unknown>>("site.json");
export const getContent = async (type?: string) => { const items = await read<Array<Record<string, unknown>>>("content.json"); return type ? items.filter(item => item.type === type) : items; };
export const getTools = async (includeDrafts = false) => { const items = await read<Array<Record<string, unknown>>>("tools.json"); return includeDrafts ? items : items.filter(item => item.status === "published"); };
export async function updateSite(patch: Record<string, unknown>) { const site = await getSite(); const next = { ...site, ...patch }; await write("site.json", next); return next; }
export async function updateContent(id: string, patch: Record<string, unknown>) { const items = await getContent(); const next = items.map(item => item.id === id ? { ...item, ...patch } : item); await write("content.json", next); return next.find(item => item.id === id); }
export async function updateTool(id: string, patch: Record<string, unknown>) { const items = await getTools(true); const next = items.map(item => item.id === id ? { ...item, ...patch } : item); await write("tools.json", next); return next.find(item => item.id === id); }
