import { LucideIcon } from "lucide-react";

export interface DevopsMatrixItem {
  name: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
  tags: string[];
}

export interface PipelineStep {
  num: string;
  name: string;
  detail: string;
}

export interface CloudCorePillar {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
  accentBorder: string;
}
