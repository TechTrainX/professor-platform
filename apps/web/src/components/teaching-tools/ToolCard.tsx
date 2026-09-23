import { ArrowUpRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
export function ToolCard({ tool }: { tool: { slug: string; title: string; summary: string; category?: string } }) { return <article className="tool-card"><div className="tool-mark"><Cpu size={24} /></div><p className="eyebrow">{tool.category ?? "Interactive tool"}</p><h3>{tool.title}</h3><p>{tool.summary}</p><Link className="text-link" to={`/teaching-tools/${tool.slug}`}>Open tool <ArrowUpRight size={16} /></Link></article>; }
