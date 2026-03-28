"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import type { Project } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { TagPill } from "@/components/tag-pill";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ProjectsExplorer({ projects, tags }: { projects: Project[]; tags: string[] }) {
  const searchRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  useEffect(() => {
    const onFocusSearch = () => {
      searchRef.current?.focus();
    };

    window.addEventListener("projects:focus-search", onFocusSearch);
    return () => window.removeEventListener("projects:focus-search", onFocusSearch);
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const inTag = selectedTag === "All" || project.tags.includes(selectedTag);
      const normalized = query.trim().toLowerCase();
      const inSearch =
        normalized.length === 0 ||
        project.title.toLowerCase().includes(normalized) ||
        project.description.toLowerCase().includes(normalized) ||
        project.stack.join(" ").toLowerCase().includes(normalized) ||
        project.slug.toLowerCase().includes(normalized);

      return inTag && inSearch;
    });
  }, [projects, query, selectedTag]);

  return (
    <section className="space-y-6">
      <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-2">
            <label htmlFor="project-search" className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
              Search Projects
            </label>
            <Input
              id="project-search"
              ref={searchRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, stack, or slug (press /)"
              className="h-10 rounded-sm border-[var(--border)] bg-white"
            />
          </div>
          <p className="text-xs text-[var(--muted)]">{filteredProjects.length} result(s)</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "All",
            ...tags,
          ].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={cn(
                "rounded-sm border px-2 py-1 text-[11px] uppercase tracking-wide transition-colors duration-150",
                selectedTag === tag
                  ? "border-black bg-black text-white"
                  : "border-[var(--border)] bg-white text-[var(--fg)] hover:bg-[var(--surface)]",
              )}
              aria-pressed={selectedTag === tag}
            >
              {tag === "All" ? "All" : <TagPill label={tag} className="border-0 bg-transparent p-0 text-[11px]" />}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
