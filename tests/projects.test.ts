import { describe, expect, it } from "vitest";

import { featuredProjects, projects, projectTags } from "@/content/projects";

describe("project content model", () => {
  it("includes at least two projects with unique slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(projects.length).toBeGreaterThanOrEqual(2);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("exposes featured projects and searchable tags", () => {
    expect(featuredProjects.length).toBeGreaterThan(0);
    expect(projectTags.length).toBeGreaterThan(0);
  });
});
