import type { Project } from "@/content/projects";
import { projects } from "@/content/projects";

const defaultSiteUrl = "https://walids-portfolio.vercel.app";

export const siteConfig = {
  name: "Walid Kaddouri",
  siteTitle: "Walid Kaddouri | Backend, ML & Automation Engineer",
  logo: "/images/brand/logo.png",
  resumePath: "/Resume.pdf",
  description:
    "Engineering portfolio for backend, ML, data, and automation roles. Java and Python services, ML serving, and process automation, documented with the architecture decisions behind them.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  email: "kaddowalidpro@gmail.com",
  github: "https://github.com/Iamwalidk",
  linkedin: "https://www.linkedin.com/in/walid-kaddouri-917b42260/",
  version: "v1.2.0",
  lastModified: "2026-07-26",
  statusBlock: {
    status: "Open to Backend / ML / Data / Automation roles",
    location: "Warsaw",
    stack: "Java / Spring Boot / Python / FastAPI / SQL",
    updated: "2026-07",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Overview", href: "/overview" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const keyboardRoutes = {
  g_p: "/projects",
  g_o: "/overview",
  g_r: "/resume",
} as const;

export function getCommandPaletteProjectItems() {
  return projects.map((project: Project) => ({
    id: `project-${project.slug}`,
    label: project.title,
    hint: project.slug,
    href: `/projects/${project.slug}`,
  }));
}
