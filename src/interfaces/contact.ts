import { LucideIcon } from "lucide-react";

export interface ContactProcessStep {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  service?: string;
  message: string;
}

export interface SocialMediaLink {
  name: string;
  url: string;
  handle?: string;
}

export interface OfficeContactDetails {
  companyName: string;
  addressLines: string[];
  phones: string[];
  emails: string[];
  socialLinks: SocialMediaLink[];
  googleMapsEmbedUrl: string;
}
