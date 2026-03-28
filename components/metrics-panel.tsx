export function MetricsPanel({ metrics }: { metrics: string[] }) {
  return (
    <section className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Results / Evidence</h3>
      <ul className="space-y-2 text-sm text-[var(--fg)]">
        {metrics.map((metric) => (
          <li key={metric} className="flex gap-2">
            <span aria-hidden="true">-</span>
            <span>{metric}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
