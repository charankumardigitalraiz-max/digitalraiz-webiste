import { LucideIcon } from "lucide-react";

export interface SecurityTechItem {
  name: string;
  icon: string;
}

export interface SecurityPillarItem {
  id: string;
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  overview: string;
  severity: string;
  icon: LucideIcon;
  features: string[];
  tools: string[];
  metric: string;
}

export interface DefensePipelineNode {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  duration: string;
  deliverables: string[];
  tools: string[];
}

export interface SecurityAssurancePillar {
  title: string;
  desc: string;
  icon: LucideIcon;
}
