import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center gap-5">
      <p className="font-mono text-xs tracking-wide text-[var(--muted)]" aria-hidden="true">
        ~ $ resolve-route
        <span className="terminal-cursor" />
      </p>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">404: route not found</h1>
      <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
        This path doesn&apos;t exist or has moved. Use the sidebar, press{" "}
        <kbd className="rounded-sm border border-[var(--border)] px-1 py-0.5 font-mono text-[10px]">Ctrl+K</kbd> for the
        command palette, or head back to the overview.
      </p>
      <Button asChild className="h-9 rounded-sm bg-black px-4 text-xs uppercase tracking-wide text-white hover:bg-black/90">
        <Link href="/overview">Go to overview</Link>
      </Button>
    </div>
  );
}
