export type ChangelogEntry = {
  version: string;
  date: string;
  changes: string[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "v1.1.0",
    date: "2026-03-28",
    changes: [
      "Replaced the contact form with a direct-contact hub centered on email, resume, and profile links.",
      "Corrected project-specific diagrams and evidence copy so both case studies align with their actual architectures.",
    ],
  },
  {
    version: "v1.0.0",
    date: "2026-02-15",
    changes: [
      "Launched production-ready monochrome portfolio with docs-style navigation.",
      "Added project case studies with MDX and structured engineering decision panels.",
      "Implemented command palette, recruiter mode, keyboard shortcuts, and contact form protections.",
    ],
  },
  {
    version: "v0.9.0",
    date: "2026-02-10",
    changes: [
      "Introduced typed project content model and reusable project card/listing components.",
      "Added timeline experience page and structured resume route.",
    ],
  },
  {
    version: "v0.8.0",
    date: "2026-02-05",
    changes: [
      "Created base App Router shell and monochrome design token system.",
      "Set up ESLint, TypeScript strict mode, and CI workflow baseline.",
    ],
  },
];
