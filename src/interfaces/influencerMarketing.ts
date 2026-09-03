import { LucideIcon } from "lucide-react";

export interface InfluencerStat {
  value: string;
  label: string;
  color: string;
  bg: string;
  border: string;
}

export interface InfluencerService {
  title: string;
  desc: string;
  tag: string;
  icon: LucideIcon;
  color: string;
  accent: string;
}

export interface CreatorTier {
  tier: string;
  followers: string;
  perk: string;
  bestFor: string;
  badge: string;
  badgeBg: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}
