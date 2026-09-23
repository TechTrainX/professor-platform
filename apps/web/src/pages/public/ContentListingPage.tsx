import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AcademicCard } from "../../components/content/AcademicCard";
import { SectionHeader } from "../../components/content/SectionHeader";
import { useContent } from "../../hooks/use-platform-data";
export function ContentListingPage({ type, eyebrow, title, intro }: { type: string; eyebrow: string; title: string; intro: string }) { const { data: items, isLoading } = useContent(type); return <div className="page-shell"><section className="page-intro compact"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="large-copy">{intro}</p></section><section className="listing-section"><SectionHeader eyebrow={`${items?.length ?? 0} records`} title="The archive" action={<Link className="text-link" to="/contact">Request a paper <ArrowUpRight size={15} /></Link>} />{isLoading ? <p>Loading records...</p> : <div className="archive-grid">{items?.map(item => <AcademicCard item={item} key={item.id} />)}</div>}</section></div>; }
