// Updated experience ordering/dates and replaced placeholder certificates with issuer-logo credential cards.
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { certificates, experienceItems } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience timeline and certifications for Walid Kaddouri.",
  alternates: {
    canonical: "/experience",
  },
};

function IssuerLogo({ issuer }: { issuer: "IBM" | "Microsoft" }) {
  if (issuer === "IBM") {
    return (
      <svg viewBox="0 0 64 24" aria-hidden="true" className="h-5 w-auto" role="img">
        <rect x="1" y="1" width="62" height="22" fill="none" stroke="#0a0a0a" />
        <path d="M8 6h48M8 10h48M8 14h48M8 18h48" stroke="#0a0a0a" strokeWidth="1.2" />
        <text x="32" y="16" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#0a0a0a">
          IBM
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" role="img">
      <rect x="2" y="2" width="9" height="9" fill="#0a0a0a" />
      <rect x="13" y="2" width="9" height="9" fill="#666666" />
      <rect x="2" y="13" width="9" height="9" fill="#666666" />
      <rect x="13" y="13" width="9" height="9" fill="#0a0a0a" />
    </svg>
  );
}

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Experience"
        description="A reliability-oriented progression across automation, QA, and AI-focused engineering work."
      />

      <Timeline items={experienceItems} />

      <section className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Certificates</h2>

        <div className="mt-4 grid gap-3">
          {certificates.map((certificate) => (
            <article key={certificate.title} className="rounded-md border border-[var(--border)] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-[var(--fg)]">{certificate.title}</h3>
                <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-2 py-1">
                  <IssuerLogo issuer={certificate.issuer} />
                  <span className="text-xs font-medium text-[var(--fg)]">{certificate.issuer}</span>
                </div>
              </div>

              <div className="mt-3">
                <Link
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-sm border border-black bg-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white no-underline hover:bg-black/90"
                >
                  View Credential
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
