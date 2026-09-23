import { Link, Outlet } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useSite } from "../../hooks/use-platform-data";
import { SiteHeader } from "./SiteHeader";

export function PublicLayout() {
  const { data: site } = useSite();
  return <><div className="announcement"><span className="pulse-dot" />{site?.settings.announcement ?? "Research, teaching, and working systems."}<Link to="/teaching-tools">Explore the lab <ArrowUpRight size={14} /></Link></div><SiteHeader /><main><Outlet /></main><footer className="site-footer"><div><span className="eyebrow">{site?.settings.navLabel ?? "N. RAO / ENGINEERING"}</span><p className="footer-statement">{site?.settings.footerLine ?? "Research, teaching, and working systems."}</p></div><div className="footer-contact"><span><Mail size={15} />{site?.profile.email ?? "professor@example.edu"}</span><span><MapPin size={15} />{site?.profile.location ?? "Bengaluru, India"}</span></div><div className="footer-bottom"><span>© 2025 Neelesh Rao</span><Link to="/admin">Admin workspace <ArrowUpRight size={14} /></Link></div></footer></>;
}
