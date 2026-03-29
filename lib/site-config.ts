import type { Project } from "@/content/projects";
import { projects } from "@/content/projects";

const defaultSiteUrl = "https://walids-portfolio.vercel.app";

export const siteConfig = {
  name: "Walid Kaddouri",
  siteTitle: "Walid Kaddouri | ML/AI/Data Engineer",
  logo: "/images/brand/logo.png",
  resumePath: "/walid-kaddouri-ml-resume-2026-03-29.pdf",
  description:
    "Engineering-focused portfolio for ML, AI, and Data roles. Projects include architecture decisions, measurable outcomes, and production-minded tradeoffs.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  email: "kaddowalidpro@gmail.com",
  github: "https://github.com/Iamwalidk",
  linkedin: "https://www.linkedin.com/in/walid-kaddouri-917b42260/",
  version: "v1.0.0",
  lastModified: "2026-03-29",
  statusBlock: {
    status: "Open to ML / AI / Data roles",
    location: "Warsaw",
    stack: "Python • TypeScript • SQL",
    updated: "2026-03",
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
