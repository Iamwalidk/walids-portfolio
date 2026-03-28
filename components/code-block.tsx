import { cn } from "@/lib/utils";

export function CodeBlock({ className, ...props }: React.ComponentProps<"pre">) {
  return (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-sm border border-black bg-[var(--code-bg)] p-4 font-mono text-sm text-[var(--code-fg)]",
        className,
      )}
      {...props}
    />
  );
}
