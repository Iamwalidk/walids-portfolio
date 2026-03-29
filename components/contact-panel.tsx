import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const directLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    description: "Best for recruiter outreach and role-related conversations.",
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    description: "Browse repositories and implementation details behind the case studies.",
  },
  {
    label: "Resume PDF",
    href: siteConfig.resumePath,
    description: "Quick download for a concise summary of experience, stack, and impact.",
  },
];

export function ContactPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_320px]">
      <section className="space-y-6 rounded-md border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Direct Contact</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--fg)]">Email is the fastest path.</h2>
          <p className="max-w-2xl text-sm leading-6 text-[var(--fg)]">
            Reach out for ML, AI, or data engineering roles, project collaboration, or portfolio walkthroughs. This page
            is intentionally direct: no web form, no delivery uncertainty, just a clear route to email or profile links.
          </p>
        </div>

        <div className="rounded-sm border border-[var(--border)] bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Primary Inbox</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg font-semibold hover:underline">
            {siteConfig.email}
          </a>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Best for interviews, role conversations, scoped freelance work, and architecture deep dives.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="h-10 rounded-sm bg-black px-4 text-xs text-white hover:bg-black/90">
            <a href={`mailto:${siteConfig.email}?subject=Opportunity%20for%20Walid%20Kaddouri`}>Email Walid</a>
          </Button>
          <CopyToClipboardButton value={siteConfig.email} label="Copy email" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-sm border border-[var(--border)] bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Location</p>
            <p className="mt-2 text-sm">{siteConfig.statusBlock.location}</p>
          </article>
          <article className="rounded-sm border border-[var(--border)] bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Focus</p>
            <p className="mt-2 text-sm">{siteConfig.statusBlock.status}</p>
          </article>
          <article className="rounded-sm border border-[var(--border)] bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Core Stack</p>
            <p className="mt-2 text-sm">{siteConfig.statusBlock.stack}</p>
          </article>
        </div>
      </section>

      <aside className="space-y-4 rounded-md border border-[var(--border)] bg-white p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Elsewhere</h3>
        <p className="text-sm text-[var(--fg)]">Use the channel that matches the conversation best.</p>
        <div className="space-y-3">
          {directLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="block rounded-sm border border-[var(--border)] bg-[var(--surface)] p-3 transition-colors hover:bg-white"
            >
              <span className="block text-sm font-semibold">{link.label}</span>
              <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{link.description}</span>
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
}
