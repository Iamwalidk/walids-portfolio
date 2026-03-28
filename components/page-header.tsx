import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <header className={cn("space-y-3", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">{title}</p>
      <p className="max-w-3xl text-base text-[var(--fg)] sm:text-lg">{description}</p>
    </header>
  );
}
