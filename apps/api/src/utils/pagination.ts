export function pagination(pageValue: unknown, limitValue: unknown) {
  const page = Math.max(1, Number(pageValue) || 1);
  const limit = Math.min(30, Math.max(1, Number(limitValue) || 9));
  return { page, limit, skip: (page - 1) * limit };
}
