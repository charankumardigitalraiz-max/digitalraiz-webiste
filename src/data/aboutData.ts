import { Bot, Cpu, BarChart3, BrainCircuit } from "lucide-react";
import { AiPillarItem } from "@/interfaces/about";

export const aiPillars: AiPillarItem[] = [
  {
    id: "automation",
    tag: "Workflow Automation",
    title: "Intelligent Process Automation",
    subtitle: "Streamlining complex operations with self-learning AI workflows.",
    desc: "We integrate intelligent automation engines into enterprise business systems, reducing operational overhead, eliminating manual data entry bottlenecks, and optimizing resource allocation.",
    icon: Bot,
    deliverable: "Custom NLP Workflows & Automated Task Triage Systems",
    img: "/about/digital-process-automation-white.png",
  },
  {
    id: "apps",
    tag: "GenAI Engineering",
    title: "AI-Powered Custom Web & Apps",
    subtitle: "Enriching web and mobile platforms with large language models.",
    desc: "From smart conversational assistants to generative content recommenders, we build web and mobile applications powered by custom fine-tuned AI models and secure API pipelines.",
    icon: Cpu,
    deliverable: "LLM Integration Pipelines, Vector Search & Neural APIs",
    img: "/about/futuristic-web-architecture-white.png",
  },
  {
    id: "analytics",
    tag: "Predictive Analytics",
    title: "Data-Driven Business Insights",
    subtitle: "Transforming raw data streams into predictive growth decisions.",
    desc: "We implement machine learning algorithms that analyze user behavior, forecast demand trends, detect anomalies, and uncover actionable business intelligence.",
    icon: BarChart3,
    deliverable: "Behavioral Analytics & Predictive Forecasting Engines",
    img: "/about/data-visualization-dashboard-white.png",
  },
  {
    id: "ux",
    tag: "Contextual UX",
    title: "Smart Customer UX Experiences",
    subtitle: "Personalizing customer journeys in real-time.",
    desc: "Delivering adaptive user interfaces that react dynamically to user intent, personalizing content, recommendations, and assistance across every digital touchpoint.",
    icon: BrainCircuit,
    deliverable: "Intent-Based Personalization & Smart Context Engine",
    img: "/about/neural-brain-mesh-white.png",
  },
];
