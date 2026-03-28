// Updated contact and social URLs to Walid's real LinkedIn/email/GitHub profile values as specified.
import type { Project } from "@/content/projects";
import { projects } from "@/content/projects";

export const siteConfig = {
  name: "Walid Kaddouri",
  siteTitle: "Walid Kaddouri | ML/AI/Data Engineer",
  logo: "/images/brand/logo.png",
  description:
    "Engineering-focused portfolio for ML, AI, and Data roles. Projects include architecture decisions, measurable outcomes, and production-minded tradeoffs.",
  url: "https://walid-kaddouri.vercel.app",
  email: "kaddowalidpro@gmail.com",
  github: "https://github.com/Iamwalidk",
  linkedin: "https://www.linkedin.com/in/walid-kaddouri-917b42260/?trk=opento_sprofile_details",
  version: "v1.0.0",
  statusBlock: {
    status: "Open to ML / AI / Data roles",
    location: "Warsaw",
    stack: "Python • TypeScript • SQL",
    updated: "2026-02",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "overview", href: "/overview" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "resume", href: "/resume" },
  { label: "contact", href: "/contact" },
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
