// Experience timeline, education, evidence-based skills, and credential cards.
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import {
  certificates,
  educationItems,
  experienceItems,
  languages,
  professionalStrengths,
  skillGroups,
  type CertificateItem,
} from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience, education, certifications, and evidence-based skills for Walid Kaddouri.",
  alternates: {
    canonical: "/experience",
  },
};

function IssuerLogo({ issuer }: { issuer: CertificateItem["issuer"] }) {
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

  if (issuer === "AWS Training and Certification") {
    return (
      <svg viewBox="0 0 44 24" aria-hidden="true" className="h-5 w-auto" role="img">
        <rect x="1" y="1" width="42" height="22" fill="none" stroke="#0a0a0a" />
        <text x="22" y="14" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#0a0a0a">
          AWS
        </text>
        <path d="M11 18c6 3 16 3 22 0" stroke="#0a0a0a" strokeWidth="1.2" fill="none" />
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
    <div className="space-y-10">
      <PageHeader
        crumbs={[{ label: "~" }, { label: "experience" }]}
        title="Experience"
        description="A progression from process automation and QA into backend and ML engineering, with the business-facing side of the work carried through all of it."
      />

      <section aria-labelledby="roles-heading" className="space-y-4">
        <h2 id="roles-heading" className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Roles
        </h2>
        <Timeline items={experienceItems} />
      </section>

      <section aria-labelledby="education-heading" className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 id="education-heading" className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Education
        </h2>
        <div className="mt-4 space-y-3">
          {educationItems.map((item) => (
            <article key={item.institution} className="rounded-md border border-[var(--border)] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-[var(--fg)]">{item.degree}</h3>
                <span className="text-xs uppercase tracking-wide text-[var(--muted)]">{item.timeline}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--fg)]">{item.specialization}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {item.institution} | {item.location}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="space-y-4">
        <div className="space-y-1">
          <h2 id="skills-heading" className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
            Skills, with receipts
          </h2>
          <p className="text-sm text-[var(--muted)]">
            Every skill below is tied to the role, project, or credential where it was actually exercised.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="flex flex-col gap-3 rounded-md border border-[var(--border)] bg-white p-4">
              <h3 className="text-sm font-semibold text-[var(--fg)]">{group.title}</h3>
              <ul className="flex flex-wrap gap-1.5" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-sm border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--fg)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="text-xs leading-5 text-[var(--muted)]">{group.evidence}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="strengths-heading" className="space-y-4">
        <div className="space-y-1">
          <h2 id="strengths-heading" className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
            Beyond the code
          </h2>
          <p className="text-sm text-[var(--muted)]">
            The parts of the job that decide whether the engineering actually lands.
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="rounded-md border border-[var(--border)] bg-white p-4">
            <h3 className="text-sm font-semibold text-[var(--fg)]">Working strengths</h3>
            <dl className="mt-3 space-y-3">
              {professionalStrengths.map((strength) => (
                <div key={strength.title}>
                  <dt className="text-sm font-semibold text-[var(--fg)]">{strength.title}</dt>
                  <dd className="mt-0.5 text-xs leading-5 text-[var(--muted)]">{strength.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-md border border-[var(--border)] bg-white p-4">
            <h3 className="text-sm font-semibold text-[var(--fg)]">Languages</h3>
            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
              Works, documents, and presents professionally in Arabic, French, and English. Useful on multinational,
              client-facing, and localization work.
            </p>
            <dl className="mt-3 space-y-1.5">
              {languages.map((item) => (
                <div
                  key={item.language}
                  className="flex items-baseline justify-between gap-3 border-b border-[var(--border)] pb-1.5 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-[var(--fg)]">{item.language}</dt>
                  <dd className="font-mono text-[11px] text-[var(--muted)]">{item.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="certificates-heading" className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 id="certificates-heading" className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Certificates
        </h2>

        <div className="mt-4 grid gap-3">
          {certificates.map((certificate) => (
            <article key={certificate.title} className="rounded-md border border-[var(--border)] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--fg)]">{certificate.title}</h3>
                  {certificate.completed && (
                    <p className="mt-0.5 text-xs text-[var(--muted)]">Completed {certificate.completed}</p>
                  )}
                  {certificate.note && <p className="mt-0.5 text-xs text-[var(--muted)]">{certificate.note}</p>}
                </div>
                <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-2 py-1">
                  <IssuerLogo issuer={certificate.issuer} />
                  <span className="text-xs font-medium text-[var(--fg)]">{certificate.issuer}</span>
                </div>
              </div>

              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{certificate.scope}</p>

              {certificate.credentialUrl && (
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
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
