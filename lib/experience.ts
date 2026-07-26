// Experience, education, certification, skills, and professional-strength records.
// Content reconciled from the primary CV (Resume.pdf) and career documentation.
export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  timeline: string;
  summary: string;
  achievements: string[];
  tools: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  specialization: string;
  location: string;
  timeline: string;
};

export type CertificateItem = {
  title: string;
  issuer: "AWS Training and Certification" | "IBM" | "Microsoft";
  completed?: string;
  note?: string;
  credentialUrl?: string;
  scope: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
  evidence: string;
};

export type ProfessionalStrength = {
  title: string;
  detail: string;
};

export type LanguageItem = {
  language: string;
  level: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "RPA/AI Developer Intern",
    company: "Rhenus Workforce",
    location: "Warsaw, Poland",
    timeline: "April 2025 -> June 2025",
    summary:
      "Built document and process automation for real operational workflows, combining Python and RPA tooling with hands-on business process analysis.",
    achievements: [
      "Delivered a PDF/OCR document automation workflow that extracted and structured data from unstructured source documents.",
      "Contributed automation logic for NIP/GUS company-data verification, validating business records against Polish registry systems for compliance accuracy.",
      "Built an XML export solution to move structured business data between systems, and automated recurring Excel and browser-driven tasks with Selenium.",
      "Analyzed manual business processes to identify automation opportunities, then presented demos and documentation that both business and technical stakeholders could act on.",
    ],
    tools: ["Python", "UiPath", "G1ANT", "Selenium", "OCR/PDF processing", "XML", "Excel automation"],
  },
  {
    title: "Software QA Tester",
    company: "Lionbridge",
    location: "Warsaw, Poland",
    timeline: "September 2025 -> Present",
    summary:
      "Software testing on client engagements for Sony and Housemarque, working to client quality standards where reproducibility, clear defect communication, and confidentiality are the baseline.",
    achievements: [
      "Execute functional, regression, exploratory, and cross-platform test cycles against product features, UI behavior, and edge cases.",
      "Report and track defects in Jira and Confluence with reliable reproduction steps, expected versus actual results, severity context, and supporting evidence.",
      "Support verification cycles by retesting fixes and confirming that changes do not introduce regressions in related areas of the product.",
    ],
    tools: [
      "Jira",
      "Confluence",
      "Regression & exploratory testing",
      "Cross-platform testing",
      "Defect lifecycle",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: "Vistula University",
    degree: "Bachelor of Engineering, Computer Engineering",
    specialization: "Specialization in Artificial Intelligence and Cloud Computing",
    location: "Warsaw, Poland",
    timeline: "Graduated March 2026",
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "AWS Training and Certification",
    note: "Exam (MLS-C01) retired by AWS in 2026 and no longer offered.",
    scope:
      "Proctored professional exam covering data engineering, exploratory data analysis, modeling, and ML operations on AWS: SageMaker, Glue, EMR, deployment, and monitoring.",
  },
  {
    title: "Machine Learning with Python (V2)",
    issuer: "IBM",
    completed: "February 2025",
    scope:
      "Applied ML fundamentals with scikit-learn: regression, classification, clustering, dimensionality reduction, cross-validation, and end-to-end project work.",
    credentialUrl: "https://www.credly.com/badges/4a331b2f-6011-4119-949e-cdc5de841492",
  },
  {
    title: "Advanced AI and Machine Learning Techniques and Capstone",
    issuer: "Microsoft",
    completed: "September 2025",
    scope:
      "Ensemble methods, transfer learning, responsible AI, and scalable system design, closing with a full ML-lifecycle capstone project.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/2M20HVCUAGAS",
  },
];

// Skills tied to the role, project, or credential where they were actually exercised.
export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & System Design",
    skills: [
      "Java 21",
      "Spring Boot",
      "Python",
      "FastAPI",
      "REST API design",
      "Modular monolith / layered architecture",
      "ADRs",
    ],
    evidence:
      "JInfer's layered Spring Boot gateway with decisions recorded as ADRs, plus the FastAPI backends behind the invoice automation platform and OptimaTime AI.",
  },
  {
    title: "ML Engineering & Serving",
    skills: [
      "ONNX Runtime",
      "scikit-learn",
      "TensorFlow/Keras",
      "OpenCV",
      "Transfer learning",
      "Model evaluation",
    ],
    evidence:
      "Serving ONNX models in-process on the JVM in JInfer; training and integrating the priority model in OptimaTime AI and the EfficientNetV2S classifier in Dog Breed Classifier.",
  },
  {
    title: "Cloud, Infrastructure & CI/CD",
    skills: [
      "Docker",
      "Terraform",
      "AWS (ECS Fargate, RDS, MSK)",
      "GitHub Actions",
      "Prometheus / Micrometer",
    ],
    evidence:
      "JInfer ships a multi-stage Docker build, a Terraform-provisioned AWS footprint, GitHub Actions CI, and Prometheus metrics. AWS ML tooling is additionally backed by the AWS ML Specialty exam.",
  },
  {
    title: "Data & Event Streaming",
    skills: ["Apache Kafka", "PostgreSQL", "Flyway", "SQL", "Schema design", "pandas / NumPy"],
    evidence:
      "Kafka request/result topics and Flyway-migrated PostgreSQL in JInfer; Alembic-migrated schemas across both platform projects; dataset preparation across the ML work.",
  },
  {
    title: "Automation & RPA",
    skills: ["UiPath", "G1ANT", "Selenium", "OCR/PDF pipelines", "Excel automation", "XML"],
    evidence:
      "Rhenus Workforce internship: document automation, NIP/GUS registry validation, XML export, and recurring spreadsheet and browser task automation.",
  },
  {
    title: "QA & Testing",
    skills: [
      "Functional / regression / exploratory testing",
      "Cross-platform testing",
      "Testcontainers",
      "JUnit",
      "Pytest",
      "Jira",
      "Confluence",
    ],
    evidence:
      "Client-standard software QA at Lionbridge, plus Testcontainers integration tests and a coverage gate in JInfer and regression suites in the invoice platform.",
  },
];

// Non-engineering strengths that hold up to the same evidence standard as the technical ones.
export const professionalStrengths: ProfessionalStrength[] = [
  {
    title: "Business process analysis",
    detail:
      "Analyzed manual processes at Rhenus, identified where automation was worth building, and translated business requirements into working technical solutions.",
  },
  {
    title: "Stakeholder communication",
    detail:
      "Prepared and presented demos and documentation that made automation work legible to business and technical audiences alike.",
  },
  {
    title: "Technical writing",
    detail:
      "Writes structured documentation as part of the work: architecture references, API docs, and decision records shipped alongside the code.",
  },
  {
    title: "Quality and confidentiality discipline",
    detail:
      "Operates to client quality standards at Lionbridge, where reproducibility, precise defect reporting, and confidentiality are conditions of the engagement.",
  },
  {
    title: "Reporting automation",
    detail:
      "Advanced Excel (PivotTables, Power Query, VBA) and Google Sheets (QUERY, Apps Script), scaled with Python into reusable reporting rather than one-off files.",
  },
];

export const languages: LanguageItem[] = [
  { language: "Arabic", level: "Native" },
  { language: "French", level: "Native-level (C2)" },
  { language: "English", level: "Full professional proficiency (C2)" },
  { language: "Polish", level: "Basic" },
  { language: "Spanish", level: "Basic" },
];
