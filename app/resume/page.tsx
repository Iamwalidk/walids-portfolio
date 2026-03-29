import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download and review Walid Kaddouri's resume.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Resume"
        description="Download is always available. Embedded preview is included for quick recruiter review."
      />

      <div className="flex flex-wrap gap-3">
        <Button asChild className="h-10 rounded-sm bg-black px-4 text-xs uppercase tracking-wide text-white hover:bg-black/90">
          <Link href={siteConfig.resumePath} target="_blank" rel="noreferrer">
            Download CV
          </Link>
        </Button>
      </div>

      <section className="overflow-hidden rounded-md border border-[var(--border)] bg-white">
        <iframe
          title="Walid Kaddouri CV"
          src={`${siteConfig.resumePath}#view=FitH`}
          className="h-[720px] w-full"
        />
      </section>
    </div>
  );
}
