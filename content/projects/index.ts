import type { StaticImageData } from "next/image";

import dogBreedImg from "@/assets/projects/dogbreed-thumbnail.png";
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
