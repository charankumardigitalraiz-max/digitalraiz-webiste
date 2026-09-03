import { LucideIcon } from "lucide-react";

export interface QaProcessStep {
  step: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  duration: string;
  qualityGate: string;
  tools: string[];
  deliverables: string[];
}

export interface QaService {
  title: string;
  desc: string;
  icon: LucideIcon;
  badge: string;
  gradient: string;
  features: string[];
}

export interface QaStatBadge {
  val: string;
  label: string;
  bg: string;
  dot: string;
}

export interface QaTechItem {
  name: string;
  icon: string;
}

export interface QaPillar {
  title: string;
  desc: string;
  icon: LucideIcon;
}
