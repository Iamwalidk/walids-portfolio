// Updated global footer contact mailto to use Walid's real email while keeping existing navigation layout.
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { projects } from "@/content/projects";
import { CommandPalette } from "@/components/command-palette";
import { RecruiterModeToggle } from "@/components/recruiter-mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navItems, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function BrandLink({ compact = false, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  return (
    <Link
      href="/walid-kaddouri"
      onClick={onNavigate}
      className={cn(
        "inline-flex items-center gap-3 rounded-sm px-2 py-1.5 transition-colors duration-150 hover:bg-[var(--surface)]",
        compact ? "text-sm font-semibold" : "mb-2 text-sm font-semibold tracking-tight",
      )}
    >
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.name} logo`}
        width={compact ? 28 : 40}
        height={compact ? 28 : 40}
        className="shrink-0 rounded-sm object-contain"
        priority
      />
      <span>/walid-kaddouri</span>
    </Link>
  );
}

function SidebarNav({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  const [projectsOpen, setProjectsOpen] = useState(true);

  const overviewItem = useMemo(() => navItems.find((item) => item.href === "/overview"), []);
  const projectsItem = useMemo(() => navItems.find((item) => item.href === "/projects"), []);
  const rootItems = useMemo(
    () => navItems.filter((item) => item.href !== "/projects" && item.href !== "/overview"),
    [],
  );

  const isActive = (href: string) => pathname === href || (href === "/projects" && pathname.startsWith("/projects"));

  const navLinkClass = (href: string) =>
    cn(
      "flex items-center rounded-sm px-2 py-1.5 text-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
      isActive(href) ? "bg-black text-white" : "text-[var(--fg)] hover:bg-[var(--surface)]",
    );

  return (
    <nav aria-label="Primary">
      <ul className="space-y-1">
        <li>
          <BrandLink onNavigate={onNavigate} />
        </li>
        {overviewItem && (
          <li>
            <Link href={overviewItem.href} onClick={onNavigate} className={navLinkClass(overviewItem.href)}>
              {overviewItem.label}
            </Link>
          </li>
        )}
        <li className="space-y-1">
          <button
            type="button"
            aria-expanded={projectsOpen}
            onClick={() => setProjectsOpen((open) => !open)}
            className={cn(
              "flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
              isActive("/projects") ? "bg-[var(--surface)]" : "hover:bg-[var(--surface)]",
            )}
          >
            <span>{projectsItem?.label ?? "Projects"}</span>
            <span className="font-mono text-[10px] text-[var(--muted)]">{projectsOpen ? "-" : "+"}</span>
          </button>

          {projectsOpen && (
            <ul className="space-y-1 pl-3">
              <li>
                <Link href="/projects" onClick={onNavigate} className={navLinkClass("/projects")}>
                  All Projects
                </Link>
              </li>
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={onNavigate}
                    className={navLinkClass(`/projects/${project.slug}`)}
                  >
                    {project.slug}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {rootItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={onNavigate} className={navLinkClass(item.href)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SystemStatusBlock() {
  return (
    <div className="space-y-1 rounded-md border border-[var(--border)] bg-[var(--surface)] p-3 text-xs">
      <p className="font-semibold uppercase tracking-wide text-[var(--muted)]">System Status</p>
      <p>Status: {siteConfig.statusBlock.status}</p>
      <p>Location: {siteConfig.statusBlock.location}</p>
      <p>Stack: {siteConfig.statusBlock.stack}</p>
      <p>Updated: {siteConfig.statusBlock.updated}</p>
    </div>
  );
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <a
        href="#main-content"
        className="skip-link absolute left-2 top-2 z-50 -translate-y-20 rounded-sm border border-black bg-white px-3 py-2 text-xs focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-[1200px]">
        <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 border-r border-[var(--border)] bg-white px-4 py-6 lg:flex lg:flex-col">
          <SidebarNav pathname={pathname} />
          <Separator className="my-4" />
          <SystemStatusBlock />
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/95 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-8">
              <div className="flex items-center gap-2 lg:hidden">
                <Button
                  type="button"
                  variant="outline"
                  className="h-8 rounded-sm border-[var(--border)] px-2 text-xs"
                  onClick={() => setMobileOpen((open) => !open)}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-sidebar"
                >
                  menu
                </Button>
                <BrandLink compact />
              </div>

              <div className="ml-auto flex items-center gap-3">
                <CommandPalette />
                <RecruiterModeToggle />
              </div>
            </div>

            {mobileOpen && (
              <div id="mobile-sidebar" className="border-t border-[var(--border)] bg-white px-4 py-4 lg:hidden">
                <SidebarNav pathname={pathname} onNavigate={() => setMobileOpen(false)} />
                <Separator className="my-4" />
                <SystemStatusBlock />
              </div>
            )}
          </header>

          <main id="main-content" className="flex-1 px-4 py-8 sm:px-8">
            <div className="mx-auto w-full max-w-[1120px]">{children}</div>
          </main>

          <footer className="border-t border-[var(--border)] px-4 py-4 text-xs text-[var(--muted)] sm:px-8">
            <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-2">
              <p>Built with Next.js, TypeScript, Tailwind, shadcn/ui, and MDX.</p>
              <p>
                Accessibility-first. Lighthouse target: Performance 90+ | Accessibility 95+.{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
