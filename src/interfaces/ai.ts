import { LucideIcon } from "lucide-react";

export interface AiPillar {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
}

export interface AiTechMatrixItem {
  name: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
  tags: string[];
}
