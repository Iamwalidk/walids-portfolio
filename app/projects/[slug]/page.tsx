import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/content/projects";
import { PageHeader } from "@/components/page-header";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { TagPill } from "@/components/tag-pill";
import { getProjectMdx } from "@/lib/mdx";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const mdx = await getProjectMdx(project.slug);
  if (!mdx) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <PageHeader title={project.title} description={project.description} />

      <section className="grid gap-6 rounded-md border border-[var(--border)] bg-white p-5 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-8">
          <p className="text-sm text-[var(--muted)]">
            {project.role} | {project.timeline}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href={project.github} target="_blank" rel="noreferrer" className="hover:underline">
              Repository
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="overflow-hidden rounded-sm border border-[var(--border)]">
            <Image
              src={project.screenshots[0]?.src}
              alt={project.screenshots[0]?.alt ?? `${project.title} screenshot`}
              width={1200}
              height={720}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <ProjectCaseStudy project={project} mdxContent={mdx.content} />
    </div>
  );
}
