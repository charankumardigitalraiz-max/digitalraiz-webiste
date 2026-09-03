import { LucideIcon } from "lucide-react";

export interface DataTechItem {
  name: string;
  icon: string;
}

export interface DataArchitectureTier {
  step: string;
  badge: string;
  title: string;
  overview: string;
  tools: string[];
  image: string;
}

export interface DataPipelinePhase {
  step: string;
  phase: string;
  duration: string;
  icon: LucideIcon;
  overview: string;
  deliverables: string[];
  tools: string[];
}

export interface DataPillar {
  title: string;
  desc: string;
  icon: LucideIcon;
}
