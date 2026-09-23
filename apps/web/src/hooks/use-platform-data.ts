import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api-client";

export type Site = { profile: { name: string; role: string; institution: string; location: string; email: string; bio: string; longBio: string; availability: string }; stats: Array<{ value: string; label: string }>; researchAreas: Array<{ id: string; number: string; title: string; summary: string; detail: string; tone: string }>; featuredProjects: Array<Record<string, string>>; featuredPublications: Array<Record<string, string>>; timeline: Array<Record<string, string>>; settings: { announcement: string; footerLine: string; navLabel: string } };
export type ContentItem = { id: string; type: string; status: string; year: string; title: string; summary: string; meta: string; tags: string[]; featured: boolean };
export type Tool = { id: string; slug: string; status: string; category: string; title: string; summary: string; level: string; time: string; color: string; updated: string; objective: string };

export function useSite() { return useQuery({ queryKey: ["site"], queryFn: () => api<Site>("/data/site") }); }
export function useContent(type?: string) { return useQuery({ queryKey: ["content", type], queryFn: () => api<ContentItem[]>(`/data/content${type ? `?type=${type}` : ""}`) }); }
export function useTools(admin = false) { return useQuery({ queryKey: [admin ? "admin-tools" : "tools"], queryFn: () => api<Tool[]>(`/data/${admin ? "admin/tools" : "tools"}`) }); }
