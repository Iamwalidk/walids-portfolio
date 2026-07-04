// Experience, education, certification, and skills-evidence records.
// Content reconciled from the primary CV (Resume.pdf) and career documentation;
// client names from NDA'd engagements are intentionally not published.
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
  credentialUrl?: string;
  scope: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
  evidence: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "RPA/AI Developer Intern",
    company: "Rhenus Workforce",
    location: "Warsaw, Poland",
    timeline: "April 2025 -> June 2025",
    summary:
      "Built document and process automation for real operational workflows — combining Python, RPA tooling, and OCR pipelines with hands-on business process analysis.",
    achievements: [
      "Delivered a PDF/OCR document automation workflow that extracted and structured data from unstructured source documents.",
      "Contributed automation logic for NIP/GUS company-data verification, validating business records against Polish registry systems for compliance accuracy.",
      "Built an XML export solution to move structured business data between systems, and automated recurring Excel and browser-driven tasks with Selenium.",
      "Analyzed manual business processes to identify automation opportunities, then presented demos and documentation that both business and technical stakeholders could act on.",
    ],
    tools: ["Python", "UiPath", "G1ANT", "Selenium", "OCR/PDF processing", "XML", "Excel automation"],
  },
  {
    title: "QA Game Tester",
    company: "Lionbridge Games",
    location: "Warsaw, Poland",
    timeline: "September 2025 -> Present",
    summary:
      "Testing a first-party PlayStation production in a client-facing QA environment, where reproducibility, confidentiality, and clear defect communication are the baseline.",
    achievements: [
      "Execute functional, regression, exploratory, and cross-platform test cycles across gameplay systems, UI behavior, progression flow, and edge cases.",
      "Report and track defects in Jira/Confluence with reliable reproduction steps, expected vs. actual results, severity context, and supporting evidence.",
      "Support verification cycles by retesting fixes and confirming changes do not introduce regressions in related areas of the game.",
    ],
    tools: ["Jira", "Confluence", "PlayStation platform testing", "Regression & exploratory methodology"],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: "Vistula University",
    degree: "Bachelor of Engineering, Computer Engineering",
    specialization: "Specialization in Artificial Intelligence",
    location: "Warsaw, Poland",
    timeline: "Graduated March 2026",
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "AWS Training and Certification",
    scope:
      "Proctored professional exam (MLS-C01) covering data engineering, exploratory data analysis, modeling, and ML operations on AWS — SageMaker, Glue, EMR, deployment, and monitoring.",
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
    title: "Backend & APIs",
    skills: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "REST API design"],
    evidence:
      "Invoice Automation Platform and OptimaTime AI backends: API-key and JWT auth, idempotent uploads, versioned migrations, and structured error handling.",
  },
  {
    title: "Automation & RPA",
    skills: ["UiPath", "G1ANT", "Selenium", "OCR/PDF pipelines", "Excel automation", "XML"],
    evidence:
      "Rhenus Workforce internship: document automation, NIP/GUS registry validation, XML export, and recurring spreadsheet/browser task automation.",
  },
  {
    title: "QA & Testing",
    skills: ["Functional / regression / exploratory testing", "Cross-platform testing", "Jira", "Confluence", "Pytest"],
    evidence:
      "First-party PlayStation QA at Lionbridge Games, plus regression-oriented test suites across the invoice platform's validation and approval logic.",
  },
  {
    title: "Machine Learning",
    skills: ["scikit-learn", "TensorFlow/Keras", "OpenCV", "Model evaluation", "Transfer learning"],
    evidence:
      "OptimaTime AI's GradientBoostingRegressor priority model and the Dog Breed Classifier's fine-tuned MobileNetV2 inference pipeline.",
  },
  {
    title: "Cloud ML (AWS)",
    skills: ["Amazon SageMaker", "AWS Glue", "Amazon EMR", "ETL design", "Deployment & monitoring"],
    evidence:
      "Validated by the AWS Certified Machine Learning - Specialty exam across its data engineering, EDA, modeling, and operations domains.",
  },
  {
    title: "Data & Databases",
    skills: ["SQL", "PostgreSQL", "SQLite", "Schema design", "pandas / NumPy"],
    evidence:
      "Alembic-migrated schemas behind both platform projects; dataset preparation and feature engineering across the ML work.",
  },
];
