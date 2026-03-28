import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return <div className={cn("my-10 h-px w-full bg-[var(--border)]", className)} aria-hidden="true" />;
}
