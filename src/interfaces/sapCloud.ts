import { LucideIcon } from "lucide-react";

export interface SapCorePillar {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
  accentBorder: string;
}

export interface SapMatrixItem {
  name: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
  tags: string[];
}
