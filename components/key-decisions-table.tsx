import type { ProjectDecision } from "@/content/projects";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function KeyDecisionsTable({ decisions }: { decisions: ProjectDecision[] }) {
  return (
    <section className="overflow-hidden rounded-md border border-[var(--border)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Key Engineering Decisions</h3>
      </header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[24%]">Decision</TableHead>
            <TableHead className="w-[24%]">Tradeoff</TableHead>
            <TableHead>Rationale</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {decisions.map((item) => (
            <TableRow key={item.decision}>
              <TableCell className="font-medium">{item.decision}</TableCell>
              <TableCell>{item.tradeoff}</TableCell>
              <TableCell>{item.rationale}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
