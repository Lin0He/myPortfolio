import type { Note, Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    index: "01",
    type: "Inference / Evaluation",
    title: "Deep Learning Inference & Evaluation Lab",
    description:
      "A reproducible lab for studying latency, throughput, VRAM usage, quantization drift, and deployment trade-offs across modern inference stacks.",
    stack: "Python · PyTorch · vLLM · Transformers · Docker",
  },
  {
    index: "02",
    type: "Agent Reliability",
    title: "Agent Evaluation & Deployment Harness",
    description:
      "An evaluation harness for measuring tool use, structured outputs, workflow reliability, and production readiness of LLM agents.",
    stack: "LLM Agents · Sandboxing · Evaluation · Observability",
  },
  {
    index: "03",
    type: "Applied ML / Risk",
    title: "FraudGuard: Transaction Fraud Detection",
    description:
      "A traditional ML risk-intelligence project focused on temporal feature engineering, imbalanced learning, explainability, and cost-sensitive evaluation.",
    stack: "Python · scikit-learn · XGBoost · SHAP · MLflow",
  },
];

export const notes: Note[] = [
  {
    date: "05.2026",
    title: "Why evaluation matters more than fine-tuning in applied LLM systems",
    tag: "LLM Quality",
  },
  {
    date: "05.2026",
    title: "Benchmarking inference beyond latency: memory, throughput, and quality drift",
    tag: "Inference",
  },
  {
    date: "05.2026",
    title: "From ML prototype to production interface in regulated environments",
    tag: "MLOps",
  },
];
