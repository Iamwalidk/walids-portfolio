"use client";

import { RecruiterModeProvider } from "@/lib/recruiter-mode-context";
import { GlobalShortcuts } from "@/components/global-shortcuts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecruiterModeProvider>
      <GlobalShortcuts />
      {children}
    </RecruiterModeProvider>
  );
}
