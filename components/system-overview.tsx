import Image from "next/image";

import type { Project } from "@/content/projects";

export function SystemOverview({ project }: { project: Project }) {
  const architectureShot = project.screenshots[1];

  return (
    <section className="space-y-4 rounded-md border border-[var(--border)] bg-[var(--surface)] p-5">
      <header>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">System Overview</h3>
      </header>

      {architectureShot ? (
        <div className="overflow-hidden rounded-sm border border-[var(--border)] bg-white">
          <Image
            src={architectureShot.src}
            alt={architectureShot.alt}
            width={1200}
            height={720}
            className="h-auto w-full"
          />
        </div>
      ) : (
        <div className="rounded-sm border border-dashed border-[var(--border)] bg-white px-4 py-6 text-sm text-[var(--muted)]">
          No architecture diagram provided for this project.
        </div>
      )}

      <ul className="space-y-2 text-sm text-[var(--fg)]">
        {project.dataFlow.map((step) => (
          <li key={step} className="flex gap-2">
            <span aria-hidden="true">-</span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
