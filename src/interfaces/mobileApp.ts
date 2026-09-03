import { LucideIcon } from "lucide-react";

export interface MobileStat {
  value: string;
  label: string;
  desc: string;
  icon: LucideIcon;
}

export interface PdfProcessStep {
  step: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  duration: string;
  qualityGate: string;
  tools: string[];
  deliverables: string[];
}

export interface IndustryUseCase {
  title: string;
  desc: string;
  tag: string;
  icon: LucideIcon;
  color: string;
  border: string;
}
