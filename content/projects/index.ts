import type { StaticImageData } from "next/image";

import dogBreedImg from "@/assets/projects/dogbreed-thumbnail.png";
import invoiceAutomationImg from "@/assets/projects/invoice-automation-thumbnail.png";
import optimatimeImg from "@/assets/projects/optimatime-thumbnail.png";

export type ProjectDecision = {
  decision: string;
  tradeoff: string;
  rationale: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  role: string;
  timeline: string;
  stack: string[];
  tags: string[];
  github: string;
  highlights: string[];
  metrics: string[];
  screenshots: ProjectScreenshot[];
  featured: boolean;
  recruiterSummary: {
    problem: string;
    solution: string;
    outcomes: string[];
  };
  dataFlow: string[];
  keyDecisions: ProjectDecision[];
};

export const projects: Project[] = [
  {
    slug: "intelligent-invoice-email-automation",
    title: "Intelligent Invoice & Email Automation Platform",
    description:
      "Production-oriented automation platform for invoice intake, document validation, supplier checks, approval workflows, auditability, and email-driven business process automation.",
    image: invoiceAutomationImg,
    imageAlt:
      "Intelligent invoice automation workflow showing PDF intake, validation, approval routing, API security, and audit tracking",
    role: "Automation Engineer and Backend Developer",
    timeline: "2026",
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "SQLite/PostgreSQL",
      "React",
      "Pytest",
    ],
    tags: [
      "Automation",
      "FastAPI",
      "Invoice Processing",
      "Document Validation",
      "Approval Workflow",
      "Audit Logging",
      "QA/Testing",
    ],
    github: "https://github.com/Iamwalidk/intelligent-invoice-email-automation",
    highlights: [
      "Built FastAPI invoice intake APIs for upload and email-driven workflows with PDF magic-byte validation, file hashing, and idempotent retry handling.",
      "Modeled supplier lifecycle rules so tax ID, bank account, email domain, and status changes trigger invoice revalidation.",
      "Implemented approval state handling with pending approval expiration and duplicate approval-request audit prevention.",
      "Added role-aware API key protection, failed-processing states, audit events, and ProcessingError tracking for controlled recovery.",
    ],
    metrics: [
      "Covers the business process from invoice intake through validation, approval, exception handling, and audit review.",
      "Uses a modular FastAPI backend with SQLAlchemy, Alembic migrations, and SQLite/PostgreSQL-ready persistence.",
      "Includes regression-oriented tests around validation, supplier revalidation, API security, approvals, extraction, and invoice APIs.",
      "Extracts common invoice fields such as date, amount, supplier/vendor, VAT/NIP, and IBAN for downstream checks.",
    ],
    screenshots: [
      {
        src: "/images/projects/invoice-automation-workflow.svg",
        alt: "Invoice automation workflow showing document intake, validation, supplier checks, approval state, failures, and audit trail",
      },
      {
        src: "/images/projects/invoice-automation-architecture.svg",
        alt: "Invoice automation architecture showing intake automation, FastAPI services, database persistence, approval callback, and React dashboard",
      },
    ],
    featured: true,
    recruiterSummary: {
      problem:
        "Invoice intake often depends on manual email review, PDF checks, supplier lookups, approval chasing, and scattered audit evidence.",
      solution:
        "Built a full-stack automation platform that validates PDFs, extracts invoice fields, verifies suppliers, manages approval states, and records audit/error events through a FastAPI backend.",
      outcomes: [
        "Demonstrates practical automation engineering across APIs, validation rules, workflow state, auditability, and failure handling.",
        "Keeps business rules centralized and testable while supporting RPA/email intake and Power Automate-style approval callbacks.",
        "Shows backend quality signals: role-aware security, idempotent uploads, migrations, revalidation rules, and regression tests.",
      ],
    },
    dataFlow: [
      "A user, mock RPA intake, or email-driven workflow submits an invoice PDF with source metadata.",
      "FastAPI validates file type and magic bytes, hashes the file, and handles duplicate upload retries idempotently.",
      "Extraction and validation services parse invoice fields, check supplier master data, and record validation results.",
      "Invoices that qualify move into approval handling; invoices that stop qualifying expire pending approval state and keep audit evidence.",
      "Failures are persisted with FAILED status, ProcessingError tracking, and audit events so operational recovery is explicit.",
    ],
    keyDecisions: [
      {
        decision: "FastAPI owns business validation rules",
        tradeoff: "The RPA/email intake layer stays thinner and depends on backend API contracts.",
        rationale:
          "Centralizing invoice rules makes validation testable, reusable across intake channels, and easier to audit.",
      },
      {
        decision: "Magic-byte checks plus hashing for uploads",
        tradeoff: "Adds processing work before invoice extraction begins.",
        rationale:
          "Prevents unsafe document assumptions and supports idempotent retry behavior for automation workflows.",
      },
      {
        decision: "Soft supplier deactivation with invoice revalidation",
        tradeoff: "More state handling than deleting supplier records outright.",
        rationale:
          "Preserves audit history while ensuring supplier changes can invalidate invoices and approval requests safely.",
      },
    ],
  },
  {
    slug: "optimatime-ai",
    title: "OptimaTime AI",
    description:
      "Hybrid productivity planner that combines ML priority scoring with a deterministic scheduling engine across a FastAPI + React/Vite architecture.",
    image: optimatimeImg,
    imageAlt: "OptimaTime AI task planning dashboard with schedule timeline and productivity analytics",
    role: "ML/AI Engineer and Full-Stack Developer",
    timeline: "2025",
    stack: ["Python", "FastAPI", "React", "Vite", "SQLite", "Alembic", "scikit-learn", "JWT"],
    tags: ["ML Systems", "FastAPI", "Scheduling", "React", "scikit-learn", "SQLite", "JWT"],
    github: "https://github.com/Iamwalidk/OptimaTime-AI",
    highlights: [
      "Implemented FastAPI v1 APIs for auth, tasks, planning, notes, and feedback with JWT access and refresh-token flows.",
      "Trained and integrated a GradientBoostingRegressor priority model on engineered task features, with model artifacts persisted via joblib.",
      "Built a deterministic scheduling engine with 30-minute slots, deadline and energy penalties, and conflict-aware allocation.",
      "Delivered a React + Vite frontend that supports planning recommendations and manual calendar adjustments.",
    ],
    metrics: [
      "Produces continuous priority scores that directly drive planning decisions.",
      "Separates statistical scoring from rule-based scheduling for clearer debugging and iteration.",
      "Demonstrates end-to-end product engineering: auth, migrations, API contracts, and scheduling workflows.",
      "Uses feedback logs to bias future planning behavior and support model evolution.",
    ],
    screenshots: [
      {
        src: "/images/projects/optimatime-dashboard.svg",
        alt: "OptimaTime AI planning dashboard showing task intake, priority scoring, daily plan, and feedback signals",
      },
      {
        src: "/images/projects/optimatime-architecture.svg",
        alt: "OptimaTime AI architecture map showing React client, FastAPI API, priority model, scheduler, and SQLite storage",
      },
    ],
    featured: true,
    recruiterSummary: {
      problem:
        "Traditional to-do flows force users to manually reprioritize tasks as deadlines, effort, and energy constraints change.",
      solution:
        "Built a hybrid planning system with FastAPI + React, a scikit-learn priority model, and deterministic scheduling heuristics to generate practical daily plans.",
      outcomes: [
        "Complete end-to-end architecture from UI input to persisted plan outputs.",
        "Decision logic stays inspectable through feature-based scoring and explicit scheduling constraints.",
        "Production-minded foundation with Alembic migrations, JWT auth, and feedback-aware planning.",
      ],
    },
    dataFlow: [
      "User creates tasks in the React client with deadlines, importance, and preference signals.",
      "FastAPI validates payloads, persists entities in SQLite, and applies schema evolution through Alembic migrations.",
      "Priority model encodes task/user features and predicts a continuous score with GradientBoostingRegressor.",
      "Scheduler assigns tasks into 30-minute slots using conflict checks plus deadline, preference, and energy penalties.",
      "Plan outputs and feedback logs are stored and reused to influence future scheduling behavior.",
    ],
    keyDecisions: [
      {
        decision: "Hybrid architecture (ML scoring + heuristic scheduler)",
        tradeoff: "More moving parts than a single optimization layer.",
        rationale: "Combines adaptive ranking with deterministic, explainable time allocation.",
      },
      {
        decision: "SQLite with Alembic migrations",
        tradeoff: "Not ideal for high-concurrency multi-tenant scale.",
        rationale: "Fast local iteration with explicit, versioned schema control.",
      },
      {
        decision: "JWT access tokens with refresh-cookie rotation",
        tradeoff: "Adds token lifecycle and invalidation complexity.",
        rationale: "Supports secure SPA authentication while keeping backend auth boundaries explicit.",
      },
    ],
  },
  {
    slug: "dog-breed-classifier",
    title: "Dog Breed Classifier",
    description:
      "Flask web app for dog-breed recognition using a fine-tuned MobileNetV2 model with TensorFlow/Keras inference and confidence output.",
    image: dogBreedImg,
    imageAlt: "Dog Breed Classifier interface with an uploaded dog photo and breed prediction result",
    role: "ML Engineer",
    timeline: "2024",
    stack: ["Python", "Flask", "TensorFlow/Keras", "MobileNetV2", "OpenCV", "NumPy"],
    tags: ["Computer Vision", "Flask", "TensorFlow", "Keras", "MobileNetV2", "OpenCV"],
    github: "https://github.com/Iamwalidk/Dog-breed-classifier",
    highlights: [
      "Fine-tuned a MobileNetV2 transfer-learning model in TensorFlow/Keras with augmentation-driven training workflow.",
      "Implemented Flask endpoints for image upload and prediction, bridging notebook experimentation into a usable web app.",
      "Added OpenCV preprocessing (read, resize, normalize) before inference to keep runtime inputs consistent.",
      "Returns predicted breed plus confidence in the UI for faster human validation of model outputs.",
    ],
    metrics: [
      "Demonstrates full ML delivery from training notebook to interactive inference product.",
      "Pairs class prediction with confidence output to support better decision-making.",
      "Keeps serving simple and reproducible with a serialized `.h5` model and class-index mapping.",
    ],
    screenshots: [
      {
        src: "/images/projects/dog-classifier-eval.svg",
        alt: "Dog Breed Classifier training and evaluation overview showing transfer learning stages, validation snapshot, and class mapping",
      },
      {
        src: "/images/projects/dog-classifier-inference.svg",
        alt: "Dog breed classifier interface showing uploaded image prediction with confidence",
      },
    ],
    featured: true,
    recruiterSummary: {
      problem:
        "Many computer-vision demos stop at notebooks and never expose prediction behavior in a user-facing workflow.",
      solution:
        "Built a Flask inference app around a fine-tuned MobileNetV2 model, with OpenCV preprocessing and TensorFlow/Keras prediction serving.",
      outcomes: [
        "Turns experimentation artifacts into an accessible upload-to-prediction product.",
        "Makes model behavior easier to review by surfacing confidence alongside labels.",
        "Provides a practical baseline architecture for extending CV inference apps.",
      ],
    },
    dataFlow: [
      "User uploads a dog image through the Flask web form.",
      "Server saves the file temporarily and loads it with OpenCV.",
      "Preprocessing resizes to 224x224, normalizes pixel values, and expands batch dimensions.",
      "TensorFlow/Keras model predicts breed probabilities and selects the top class.",
      "App maps class index to breed name, renders confidence, and deletes the temporary file.",
    ],
    keyDecisions: [
      {
        decision: "MobileNetV2 transfer learning",
        tradeoff: "Less architectural novelty than designing a custom CNN.",
        rationale: "Fast path to strong CV baseline performance with limited training resources.",
      },
      {
        decision: "Flask monolith for serving",
        tradeoff: "Tighter coupling between UI and inference route.",
        rationale: "Low operational overhead and clear end-to-end deployment story for a portfolio project.",
      },
      {
        decision: "OpenCV preprocessing in inference path",
        tradeoff: "Adds runtime preprocessing cost per request.",
        rationale: "Keeps runtime inputs aligned with model expectations for stable predictions.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
