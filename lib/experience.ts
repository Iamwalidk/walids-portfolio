// Updated experience chronology and certificate records to the exact roles/dates/credentials provided.
export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  timeline: string;
  summary: string;
  achievements: string[];
};

export type CertificateItem = {
  title: string;
  issuer: "IBM" | "Microsoft";
  credentialUrl: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "RPA/AI Developer Intern",
    company: "Rhenus",
    location: "Warsaw",
    timeline: "April 2025 -> June 2025",
    summary:
      "Delivered automation and AI-assisted process improvements with a reliability-first approach in logistics workflows.",
    achievements: [
      "Designed and implemented automation workflows to reduce repetitive operational tasks.",
      "Improved workflow reliability by adding validation steps and failure-handling checkpoints.",
      "Documented process behavior and handoff requirements for maintainable operations support.",
    ],
  },
  {
    title: "QA Game Tester",
    company: "Lionbridge",
    location: "Warsaw",
    timeline: "September 2025 -> Present",
    summary:
      "Performing structured validation across game releases with strong regression and defect quality standards.",
    achievements: [
      "Executed regression testing cycles across multiple builds and gameplay systems.",
      "Tracked and reported bugs with reproducible steps, severity context, and clear evidence.",
      "Validated release quality through cross-checks of fixes, edge cases, and stability criteria.",
    ],
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "Machine Learning with Python (V2)",
    issuer: "IBM",
    credentialUrl:
      "https://www.credly.com/badges/4a331b2f-6011-4119-949e-cdc5de841492/linked_in_profile",
  },
  {
    title: "Advanced AI and Machine Learning Techniques and Capstone",
    issuer: "Microsoft",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/2M20HVCUAGAS",
  },
];
