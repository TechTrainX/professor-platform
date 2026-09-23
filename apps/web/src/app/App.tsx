import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { queryClient } from "./query-client";
import { PublicLayout } from "../components/layout/PublicLayout";
import { AdminLayout } from "../components/layout/AdminLayout";
import { HomePage } from "../pages/public/HomePage";
import { AboutPage } from "../pages/public/AboutPage";
import { ResearchPage } from "../pages/public/ResearchPage";
import { ContentListingPage } from "../pages/public/ContentListingPage";
import { ContactPage } from "../pages/public/ContactPage";
import { TeachingToolsPage } from "../pages/public/TeachingToolsPage";
import { TeachingToolPage } from "../pages/public/TeachingToolPage";
import { AdminDashboardPage } from "../pages/admin/AdminDashboardPage";
import { AdminContentPage } from "../pages/admin/AdminContentPage";
import { AdminToolsPage } from "../pages/admin/AdminToolsPage";
import { AdminSettingsPage } from "../pages/admin/AdminSettingsPage";
export function App() { return <QueryClientProvider client={queryClient}><BrowserRouter><Routes><Route element={<PublicLayout />}><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/research" element={<ResearchPage />} /><Route path="/publications" element={<ContentListingPage type="publication" eyebrow="Research archive" title="Publications" intro="Papers, methods, and teaching research from the lab." />} /><Route path="/projects" element={<ContentListingPage type="project" eyebrow="Selected work" title="Projects" intro="Prototypes and practical systems built with students and collaborators." />} /><Route path="/journal" element={<ContentListingPage type="blog" eyebrow="Notes from the lab" title="Journal" intro="Short field notes on systems, teaching, and the decisions between them." />} /><Route path="/contact" element={<ContactPage />} /><Route path="/teaching-tools" element={<TeachingToolsPage />} /><Route path="/teaching-tools/:slug" element={<TeachingToolPage />} /></Route><Route path="/admin" element={<AdminLayout />}><Route index element={<AdminDashboardPage />} /><Route path="content" element={<AdminContentPage />} /><Route path="tools" element={<AdminToolsPage />} /><Route path="settings" element={<AdminSettingsPage />} /></Route></Routes></BrowserRouter></QueryClientProvider>; }
