import { cn } from "@/lib/utils";

export function Callout({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside className={cn("rounded-md border border-[var(--border)] bg-[var(--surface-2)] p-4", className)}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{title}</p>
      <div className="text-sm text-[var(--fg)]">{children}</div>
    </aside>
  );
}
