import type { ExperienceItem } from "@/lib/experience";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-[var(--border)] pl-6">
      {items.map((item) => (
        <li key={`${item.company}-${item.title}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-[var(--fg)] bg-white"
          />
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <span className="text-xs uppercase tracking-wide text-[var(--muted)]">{item.timeline}</span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              {item.company} | {item.location}
            </p>
            <p className="text-sm">{item.summary}</p>
            <ul className="space-y-1 text-sm text-[var(--fg)]">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2">
                  <span aria-hidden="true">-</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
