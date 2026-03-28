import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TagPill({ label, className }: { label: string; className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-sm border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 text-[10px] tracking-wide text-[var(--fg)]",
        className,
      )}
    >
      {label}
    </Badge>
  );
}
