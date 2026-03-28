import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center gap-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">404</p>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-xl text-sm text-[var(--muted)]">
        The route does not exist or has moved. Use the sidebar, command palette, or return to overview.
      </p>
      <Button asChild className="h-9 rounded-sm bg-black px-4 text-xs uppercase tracking-wide text-white hover:bg-black/90">
        <Link href="/overview">Go to overview</Link>
      </Button>
    </div>
  );
}
