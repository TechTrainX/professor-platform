import { Content } from "../models/content.model.js";
import { pagination } from "../utils/pagination.js";

export async function listContent(query: Record<string, unknown>, admin = false) {
  const { page, limit, skip } = pagination(query.page, query.limit);
  const filter: Record<string, unknown> = admin ? {} : { status: "published" };
  if (query.category) filter.category = query.category;
  const [items, total] = await Promise.all([Content.find(filter).sort({ displayOrder: 1, createdAt: -1 }).skip(skip).limit(limit).lean(), Content.countDocuments(filter)]);
  return { items, pagination: { page, limit, total, totalPages: Math.ceil(total / limit), hasNext: skip + items.length < total } };
}

export async function createContent(input: Record<string, unknown>) { return Content.create(input); }
export async function updateContent(id: string, input: Record<string, unknown>) { return Content.findByIdAndUpdate(id, input, { new: true, runValidators: true }); }
