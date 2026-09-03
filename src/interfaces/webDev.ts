import { LucideIcon } from "lucide-react";

export interface WebStatBadge {
  val: string;
  label: string;
  bg: string;
  dot: string;
}

export interface WebTechItem {
  name: string;
  icon: string;
}

export interface WebServiceItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface WebAppCard {
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  icon: LucideIcon;
  gradient: string;
  badgeBg: string;
  pulseColor: string;
  checkColor: string;
  hoverBorder: string;
  features: string[];
}

export interface WebAdvantageBadge {
  title: string;
  icon: LucideIcon;
  bg: string;
}
