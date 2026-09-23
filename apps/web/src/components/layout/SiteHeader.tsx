import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link className="brand" to="/"><span className="brand-mark">NR</span><span>NEELESH RAO<span className="brand-slash"> / </span>ENGINEERING</span></Link>
    <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(value => !value)}>{open ? <X size={19} /> : <Menu size={19} />}</button>
    <nav className={open ? "site-nav is-open" : "site-nav"}>
      <NavLink to="/about">About</NavLink><NavLink to="/research">Research</NavLink><NavLink to="/publications">Publications</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/teaching-tools">Teaching tools</NavLink><NavLink to="/journal">Journal</NavLink>
      <Link className="header-contact" to="/contact">Start a conversation <ArrowUpRight size={15} /></Link>
    </nav>
  </header>;
}
