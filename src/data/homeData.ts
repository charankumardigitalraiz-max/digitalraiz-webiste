import {
  Globe,
  Search,
  Share2,
  TrendingUp,
  Smartphone,
  Zap,
  Building2,
  Briefcase,
  ShoppingBag,
  Code2,
  Layout,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Apple,
  Layers,
  Calendar,
  Truck,
  GraduationCap,
  Users,
  Store,
  Flame,
} from "lucide-react";
import {
  HomeServiceItem,
  EcosystemItem,
  CapabilityWebService,
  CapabilityMobileService,
} from "@/interfaces/home";

export const homeServices: HomeServiceItem[] = [
  {
    num: "01",
    title: "Intelligent Branding",
    color: "#3b1244",
    bg: "from-pink-50/60 to-purple-50/50",
    border: "border-pink-100",
    tag: "bg-pink-100/50 text-[#3b1244]",
    desc: "Unique corporate identities driven by AI insights and creative human vision. We build brands that communicate distinctly and are built to last.",
    items: ["Brand Strategy", "Identity Design", "Logo Design", "AI-Assisted Copywriting", "Brand Guidelines"],
    img: "/services/intelligence.webp",
    href: "/services#branding",
  },
  {
    num: "02",
    title: "Web & Mobile Studio",
    color: "#4f46e5",
    bg: "from-indigo-50/60 to-blue-50/40",
    border: "border-indigo-150",
    tag: "bg-indigo-100/50 text-[#4f46e5]",
    desc: "High-performance web applications and native mobile apps built to scale. Clean design, usability, search-friendly structure, and clean code.",
    items: ["Next.js & React Apps", "Mobile Apps (iOS/Android)", "UI/UX Prototyping", "E-commerce Platforms", "SAP Integration"],
    img: "/services/mobile-web.webp",
    href: "/services#engineering",
  },
  {
    num: "03",
    title: "Digital Marketing & SEO",
    color: "#3b1244",
    bg: "from-pink-50/60 to-purple-50/50",
    border: "border-pink-100",
    tag: "bg-pink-100/50 text-[#3b1244]",
    desc: "Integrated campaigns designed to increase search engine visibility, brand engagement, and convert target traffic into real business results.",
    items: ["Advanced SEO", "Google Ads (PPC)", "Social Media Marketing", "Content Marketing", "Performance Campaigns"],
    img: "/services/digital-marketing.webp",
    href: "/services#marketing",
  },
  {
    num: "04",
    title: "Creative Production",
    color: "#4f46e5",
    bg: "from-indigo-50/60 to-blue-50/40",
    border: "border-indigo-150",
    tag: "bg-indigo-100/50 text-[#4f46e5]",
    desc: "High-quality visual campaigns and cinematic stories that build a stronger emotional connection with your audience across every platform.",
    items: ["Video Production", "Commercial Campaigns", "Brand Storytelling", "Motion Graphics", "Design Collaterals"],
    img: "/services/digitalraiz_content_video_production_no_human.webp",
    href: "/services#production",
  },
];

export const partnerStrengths: string[] = [
  "Customized digital marketing strategies",
  "SEO-friendly website development",
  "Professional and user-focused experiences",
  "Performance-oriented marketing campaigns",
  "Customized website and mobile app development",
  "Scalable technology solutions",
  "Clear project planning and communication",
  "Ongoing optimization and support",
];

export const homeEcosystem: EcosystemItem[] = [
  { icon: Globe, label: "Website", desc: "Converts visitors", color: "text-primary", bg: "bg-pink-50", border: "border-pink-100" },
  { icon: Search, label: "SEO", desc: "Drives organic traffic", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
  { icon: Share2, label: "Social Media", desc: "Builds brand awareness", color: "text-primary", bg: "bg-pink-50", border: "border-pink-100" },
  { icon: TrendingUp, label: "Digital Ads", desc: "Generates targeted leads", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
  { icon: Smartphone, label: "Mobile App", desc: "Retains loyal users", color: "text-primary", bg: "bg-pink-50", border: "border-pink-100" },
  { icon: Zap, label: "Performance", desc: "Tracks & optimizes results", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
];

export const webServices: CapabilityWebService[] = [
  { name: "Corporate Website Development", desc: "Enterprise digital platforms with robust governance & security.", icon: Building2, tag: "Enterprise" },
  { name: "Business Website Development", desc: "Lead-generating web solutions tailored to business goals.", icon: Briefcase, tag: "Growth" },
  { name: "Custom Website Development", desc: "Bespoke digital architecture engineered from ground up.", icon: Globe, tag: "Bespoke" },
  { name: "E-Commerce Website Development", desc: "Scalable online stores built for high checkout conversions.", icon: ShoppingBag, tag: "E-Com" },
  { name: "WordPress Website Development", desc: "Easy-to-manage CMS frameworks with custom design themes.", icon: Code2, tag: "CMS" },
  { name: "Custom Web Application Development", desc: "Complex web applications with API integrations.", icon: Layout, tag: "Web App" },
  { name: "Web Portal Development", desc: "Secure multi-user portals for partners, clients, or staff.", icon: Monitor, tag: "Portal" },
  { name: "Landing Page Design & Development", desc: "High-converting single-page funnels for ad campaigns.", icon: Zap, tag: "Funnels" },
  { name: "Website Redesign Services", desc: "Modernizing legacy websites for speed, SEO, & mobile UX.", icon: RefreshCw, tag: "Redesign" },
  { name: "Website Maintenance & Support", desc: "24/7 security updates, speed optimization, & uptime monitor.", icon: ShieldCheck, tag: "Support" },
];

export const webArchitectures: string[] = [
  "Corporate Websites",
  "E-Commerce Platforms",
  "WordPress & CMS Sites",
  "Custom Web Applications",
  "Client & Partner Portals",
  "Conversion Landing Pages",
  "SEO-Optimized Architectures",
  "API & System Integrations",
];

export const mobileServices: CapabilityMobileService[] = [
  { name: "Android App Development", desc: "Native Kotlin & Java apps for 2.5B+ active Android devices.", icon: Smartphone, tag: "Android" },
  { name: "iOS App Development", desc: "Swift-powered native iOS apps for iPhone & iPad users.", icon: Apple, tag: "iOS" },
  { name: "Cross-Platform App Development", desc: "Flutter & React Native codebases for multi-OS deployment.", icon: Layers, tag: "Cross-OS" },
  { name: "Custom Mobile App Development", desc: "Tailored mobile products designed around custom workflows.", icon: Code2, tag: "Custom" },
  { name: "Booking & Reservation App", desc: "Real-time appointment scheduling & reservation engines.", icon: Calendar, tag: "Booking" },
  { name: "Delivery & Logistics Mobile App", desc: "Live GPS tracking, route optimization, & driver dispatch.", icon: Truck, tag: "Logistics" },
  { name: "EdTech & Learning Mobile App", desc: "Interactive course platforms, video streaming, & quizzes.", icon: GraduationCap, tag: "EdTech" },
  { name: "Community & Social Mobile App", desc: "In-app messaging, activity feeds, & user profiles.", icon: Users, tag: "Social" },
  { name: "On-Demand Services Mobile App", desc: "Instant service booking, provider matching, & payments.", icon: Store, tag: "On-Demand" },
  { name: "Healthcare & Fitness Mobile App", desc: "Patient monitoring, tele-consults, & fitness tracking.", icon: Flame, tag: "Health" },
];

export const mobileArchitectures: string[] = [
  "Native iOS (Swift) Apps",
  "Native Android (Kotlin) Apps",
  "Flutter Cross-Platform Apps",
  "React Native Applications",
  "On-Demand Delivery Apps",
  "Booking & Reservation Apps",
  "Healthcare & EdTech Apps",
  "Social & Community Platforms",
];
