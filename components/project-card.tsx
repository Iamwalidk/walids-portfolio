import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/projects";
import { TagPill } from "@/components/tag-pill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-md border border-[var(--border)] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-28px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-[linear-gradient(135deg,#fafafa,#f1f1f1)]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-3 p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight">
            <Link href={`/projects/${project.slug}`} className="no-underline hover:underline">
              {project.title}
            </Link>
          </h3>
          <span className="text-xs uppercase tracking-wide text-[var(--muted)]">{project.timeline}</span>
        </div>

        <p className="text-sm text-[var(--fg)]">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        <ul className="space-y-1 text-sm text-[var(--fg)]">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true">-</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href={project.github} target="_blank" rel="noreferrer" className="hover:underline">
            Repository
          </Link>
        </div>
      </div>
    </article>
  );
}
