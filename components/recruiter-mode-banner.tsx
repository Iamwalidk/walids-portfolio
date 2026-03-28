"use client";

import { useRecruiterMode } from "@/lib/recruiter-mode-context";

export function RecruiterModeBanner() {
  const { isRecruiterSummary } = useRecruiterMode();

  return (
    <div className="rounded-sm border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted)]">
      View: {isRecruiterSummary ? "Recruiter Summary" : "Detailed View"}
    </div>
  );
}
