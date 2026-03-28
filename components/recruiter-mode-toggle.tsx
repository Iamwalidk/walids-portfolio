"use client";

import { Switch } from "@/components/ui/switch";
import { useRecruiterMode } from "@/lib/recruiter-mode-context";

export function RecruiterModeToggle() {
  const { isRecruiterSummary, toggleMode } = useRecruiterMode();

  return (
    <label className="inline-flex items-center gap-3 text-xs font-medium text-[var(--muted)]">
      <span>Recruiter Summary</span>
      <Switch
        checked={!isRecruiterSummary}
        onCheckedChange={toggleMode}
        aria-label="Toggle recruiter summary and detailed mode"
      />
      <span>Detailed View</span>
    </label>
  );
}
