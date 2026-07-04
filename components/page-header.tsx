import Link from "next/link";

import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  href?: string;
};

function CrumbTrail({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      {crumbs.map((crumb, index) => (
        <span key={crumb.label}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="text-[var(--muted)] no-underline hover:text-[var(--fg)] hover:underline">
              {crumb.label}
            </Link>
          ) : (
            crumb.label
          )}
        </span>
      ))}
    </>
  );
}

export function PageHeader({
  crumbs,
  title,
  description,
  className,
}: {
  crumbs?: Crumb[];
  title: string;
  description: string;
  className?: string;
}) {
  const crumbClass = "font-mono text-xs tracking-wide text-[var(--muted)]";
  const hasLinks = crumbs?.some((crumb) => crumb.href);

  return (
    <header className={cn("space-y-3", className)}>
      {crumbs &&
        (hasLinks ? (
          <nav aria-label="Breadcrumb" className={crumbClass}>
            <CrumbTrail crumbs={crumbs} />
          </nav>
        ) : (
          <p className={crumbClass}>
            <CrumbTrail crumbs={crumbs} />
          </p>
        ))}
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--fg)] sm:text-3xl">{title}</h1>
      <p className="max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">{description}</p>
    </header>
  );
}
