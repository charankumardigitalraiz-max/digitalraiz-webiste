import { LucideIcon } from "lucide-react";

export interface HomeServiceItem {
  num: string;
  title: string;
  color: string;
  bg: string;
  border: string;
  tag: string;
  desc: string;
  items: string[];
  img: string;
  href: string;
}

export interface EcosystemItem {
  icon: LucideIcon;
  label: string;
  desc: string;
  color: string;
  bg: string;
  border: string;
}

export interface CapabilityWebService {
  name: string;
  desc: string;
  icon: LucideIcon;
  tag: string;
}

export interface CapabilityMobileService {
  name: string;
  desc: string;
  icon: LucideIcon;
  tag: string;
}
