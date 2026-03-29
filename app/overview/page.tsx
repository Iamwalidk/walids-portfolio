import type { Metadata } from "next";
import Link from "next/link";

import { featuredProjects } from "@/content/projects";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { SectionDivider } from "@/components/section-divider";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Walid Kaddouri portfolio overview for recruiters hiring ML, AI, and Data engineering roles.",
  alternates: {
    canonical: "/overview",
  },
};

const proofPoints = [
  "Production-minded ML/AI projects with documented tradeoffs and measurable outcomes.",
  "Strong backend and data modeling focus (FastAPI, SQLite, TypeScript, SQL).",
  "Engineering communication style built for cross-functional delivery and reliability.",
];

export default function OverviewPage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-6 lg:col-span-8">
          <PageHeader
            title="Overview"
            description="I build ML/AI/data systems that are measurable, maintainable, and production-oriented."
          />

          <ul className="space-y-2 text-sm text-[var(--fg)]">
            {proofPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true">-</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-10 rounded-sm bg-black px-4 text-xs uppercase tracking-wide text-white hover:bg-black/90">
              <Link href={siteConfig.resumePath} target="_blank" rel="noreferrer">
                Download CV
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-10 rounded-sm border-[var(--border)] px-4 text-xs uppercase tracking-wide">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild variant="outline" className="h-10 rounded-sm border-[var(--border)] px-4 text-xs uppercase tracking-wide">
              <a href={`mailto:${siteConfig.email}`}>Email</a>
            </Button>
          </div>
        </div>

        <aside className="space-y-3 rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 lg:col-span-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Recruiter Snapshot</h2>
          <dl className="space-y-2 text-sm">
            <div>
              <dt className="text-[var(--muted)]">Target Roles</dt>
              <dd>ML Engineer, AI Engineer, Data Engineer</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Location</dt>
              <dd>Warsaw (open to relocation / remote)</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Core Stack</dt>
              <dd>Python, TypeScript, SQL, FastAPI, PyTorch</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Featured Projects</h2>
          <Link href="/projects" className="text-sm hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="grid gap-4 rounded-md border border-[var(--border)] bg-white p-5 md:grid-cols-3">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Architecture mindset</h3>
          <p className="mt-2 text-sm">Clear service boundaries, typed contracts, and iterative decision logs.</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Execution style</h3>
          <p className="mt-2 text-sm">Fast delivery with measurable checkpoints and regression-safe changes.</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Quality</h3>
          <p className="mt-2 text-sm">Accessibility-first UI, clean URLs, static generation, CI-enforced checks.</p>
        </div>
      </section>
    </div>
  );
}
