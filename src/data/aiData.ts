import {
  Brain,
  Database,
  MessageSquareCode,
  Bot,
  Cpu,
  Eye,
  Network,
  Workflow,
} from "lucide-react";
import { AiPillar, AiTechMatrixItem } from "@/interfaces/ai";

export const aiPillars: AiPillar[] = [
  {
    step: "01",
    title: "Predictive Analytics & Forecasting",
    desc: "Developing Machine Learning models that analyze data patterns to deliver predictive analytics, demand forecasting, and decision support.",
    icon: Brain,
    gradient: "from-purple-600 via-pink-600 to-indigo-600",
  },
  {
    step: "02",
    title: "Intelligent Search & Retrieval (RAG)",
    desc: "Building AI-powered search, document intelligence, and semantic retrieval systems using vector databases for instant contextual knowledge access.",
    icon: Database,
    gradient: "from-indigo-600 via-violet-600 to-purple-600",
  },
  {
    step: "03",
    title: "Generative AI & LLM Assistants",
    desc: "Creating custom AI assistants, conversational experiences, and automated content workflows tailored to internal business processes.",
    icon: MessageSquareCode,
    gradient: "from-pink-600 via-rose-500 to-purple-600",
  },
  {
    step: "04",
    title: "Personalization & Recommendation Engines",
    desc: "Integrating intelligent recommendations, user classification, and automated decision-making into web and mobile applications.",
    icon: Bot,
    gradient: "from-violet-600 via-indigo-600 to-pink-600",
  },
];

export const aiTechMatrix: AiTechMatrixItem[] = [
  {
    name: "Generative LLM Pipelines",
    desc: "OpenAI GPT, Claude, Llama Integrations",
    icon: MessageSquareCode,
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    tags: ["GPT-4o", "Claude 3.5", "Llama 3", "LangChain", "Vercel AI SDK"],
  },
  {
    name: "Vector Databases & Search",
    desc: "Pinecone, Milvus, ChromaDB, RAG Architecture",
    icon: Database,
    gradient: "from-indigo-600 via-violet-600 to-cyan-500",
    tags: ["Pinecone", "Milvus", "ChromaDB", "pgvector", "Embeddings"],
  },
  {
    name: "Machine Learning Studio",
    desc: "PyTorch, TensorFlow, Scikit-learn",
    icon: Cpu,
    gradient: "from-purple-600 via-pink-600 to-indigo-600",
    tags: ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "CUDA"],
  },
  {
    name: "Document Intelligence",
    desc: "OCR Data Extraction & Semantic Search",
    icon: Eye,
    gradient: "from-emerald-500 via-teal-600 to-indigo-600",
    tags: ["OCR Data", "PDF Parsing", "Semantic Search", "NER", "LayoutLM"],
  },
  {
    name: "AI Web & App Integration",
    desc: "Custom AI Assistant APIs",
    icon: Network,
    gradient: "from-blue-500 via-indigo-600 to-purple-600",
    tags: ["REST APIs", "GraphQL", "Webhooks", "Stream Response", "Next.js AI"],
  },
  {
    name: "Process Automation",
    desc: "Intelligent Workflow Orchestration",
    icon: Workflow,
    gradient: "from-amber-500 via-orange-500 to-indigo-600",
    tags: ["n8n", "AutoGPT", "Function Calling", "Agent Workflows", "Zapier"],
  },
];
