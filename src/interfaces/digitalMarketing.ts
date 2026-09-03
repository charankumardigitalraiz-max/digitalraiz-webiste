import { LucideIcon } from "lucide-react";

export interface MarketingVertical {
  id: string;
  step: string;
  tag: string;
  title: string;
  badge: string;
  icon: LucideIcon;
  color: string;
  accentBorder: string;
  accentText: string;
  pillBg: string;
  img: string;
  para1: string;
  para2: string;
  para3?: string;
  features: string[];
  insightTitle: string;
  insightDesc: string;
  metricValue: string;
  metricLabel: string;
}

export interface MarketingCapability {
  title: string;
  desc: string;
  icon: LucideIcon;
  tag: string;
  color: string;
  border: string;
  img: string;
}

export interface IntegratedStrategyStep {
  step: string;
  title: string;
  desc: string;
  tag: string;
  accentBg: string;
  accentBorder: string;
  accentHoverText: string;
  gradient: string;
  shadow: string;
  badgeStyle: string;
  shadowColor: string;
}

export interface MarketingStat {
  val: string;
  label: string;
  color: string;
  bg: string;
  border: string;
}
