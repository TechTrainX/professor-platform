import { ArrowUpRight, BookOpen, FolderKanban, PenLine, Trophy } from "lucide-react";
import type { ContentItem } from "../../hooks/use-platform-data";

const icons = { publication: BookOpen, project: FolderKanban, blog: PenLine, achievement: Trophy };
export function AcademicCard({ item }: { item: ContentItem }) { const Icon = icons[item.type as keyof typeof icons] ?? BookOpen; return <article className="academic-card"><div className="card-top"><span className="card-icon"><Icon size={17} /></span><span className="card-year">{item.year}</span></div><p className="card-type">{item.type}</p><h3>{item.title}</h3><p>{item.summary}</p><div className="card-meta"><span>{item.meta}</span><ArrowUpRight size={16} /></div></article>; }
