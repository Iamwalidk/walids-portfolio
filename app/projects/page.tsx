import type { Metadata } from "next";

import { projectTags, projects } from "@/content/projects";
import { PageHeader } from "@/components/page-header";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and engineering project breakdowns for ML/AI/Data systems.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects"
        description="Each project is documented as a case study with architecture thinking, measured outcomes, and explicit tradeoffs."
      />
      <ProjectsExplorer projects={projects} tags={projectTags} />
    </div>
  );
}
