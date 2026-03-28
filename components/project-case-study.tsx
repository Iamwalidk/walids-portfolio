"use client";

import type { Project } from "@/content/projects";
import { KeyDecisionsTable } from "@/components/key-decisions-table";
import { MetricsPanel } from "@/components/metrics-panel";
import { RecruiterModeBanner } from "@/components/recruiter-mode-banner";
import { SectionDivider } from "@/components/section-divider";
import { SystemOverview } from "@/components/system-overview";
import { TagPill } from "@/components/tag-pill";
import { useRecruiterMode } from "@/lib/recruiter-mode-context";

export function ProjectCaseStudy({ project, mdxContent }: { project: Project; mdxContent: React.ReactNode }) {
  const { isRecruiterSummary } = useRecruiterMode();

  return (
    <div className="space-y-8">
      <RecruiterModeBanner />

      <section className="grid gap-6 rounded-md border border-[var(--border)] bg-white p-5 lg:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Problem</h2>
          <p className="text-sm">{project.recruiterSummary.problem}</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Solution</h2>
          <p className="text-sm">{project.recruiterSummary.solution}</p>
        </div>
        <div className="space-y-3 lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <TagPill key={item} label={item} />
            ))}
          </div>
        </div>
        <div className="space-y-3 lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Outcomes</h2>
          <ul className="space-y-1 text-sm">
            {project.recruiterSummary.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-2">
                <span aria-hidden="true">-</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {!isRecruiterSummary && (
        <>
          <SystemOverview project={project} />
          <KeyDecisionsTable decisions={project.keyDecisions} />
          <MetricsPanel metrics={project.metrics} />

          <SectionDivider />

          <article className="mdx-content">
            {mdxContent}
          </article>
        </>
      )}
    </div>
  );
}
