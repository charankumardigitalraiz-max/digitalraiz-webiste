import { LucideIcon } from "lucide-react";

export interface ServiceCategory {
  id: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  features: string[];
  techStack: string[];
  stats: { value: string; label: string };
  image?: string;
}

export interface ServicesStatBadge {
  val: string;
  label: string;
  color: string;
  bg: string;
  border: string;
}

export interface ServiceHeroBanner {
  id: number;
  image?: string;
  badge: string;
  title: string;
  highlightText: string;
  desc: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
  features: string[];
  statVal: string;
  statLabel: string;
}
