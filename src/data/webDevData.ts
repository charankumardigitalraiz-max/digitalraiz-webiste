import {
  Globe,
  Code,
  FileCode2,
  ShoppingBag,
  Layout,
  Smartphone,
  Palette,
  Cpu,
  RefreshCw,
  Search,
  Zap,
  Activity,
  Layers,
  Users,
  CheckCircle2,
} from "lucide-react";
import {
  WebServiceItem,
  WebStatBadge,
  WebTechItem,
  WebAppCard,
  WebAdvantageBadge,
} from "@/interfaces/webDev";

export const developedServices: WebServiceItem[] = [
  { title: "Corporate & Business Websites", desc: "Professional, brand-aligned websites built to establish strong online presence, communicate business value, and convert visitors into active leads.", icon: Globe },
  { title: "Custom Website Development", desc: "Bespoke digital platforms with custom features, workflows, dashboards, and API integrations tailored to exact business operations.", icon: Code },
  { title: "WordPress Development", desc: "Easy-to-manage, flexible WordPress platforms combining user-friendly content management with robust design and speed.", icon: FileCode2 },
  { title: "E-Commerce Platforms", desc: "High-converting online stores featuring seamless product catalogs, secure payment gateways, shopping carts, and order management.", icon: ShoppingBag },
  { title: "Landing Page Architecture", desc: "High-impact, conversion-focused landing pages engineered for marketing campaigns, product launches, and lead capture.", icon: Layout },
  { title: "Responsive Web Design", desc: "Fluid, multi-device layouts ensuring flawless user experience across desktops, laptops, tablets, and mobile smartphones.", icon: Smartphone },
  { title: "Portfolio & Professional Sites", desc: "Elegant digital portfolios designed for agencies, executives, and professionals to present work and build credibility.", icon: Palette },
  { title: "Custom Web Applications", desc: "Operational web applications including customer portals, booking engines, management dashboards, and SaaS tools.", icon: Cpu },
  { title: "Business Portals & Redesigns", desc: "Modern web portal integrations and complete website redesigns that modernize outdated platforms and boost performance.", icon: RefreshCw },
];

export const whyChoosePoints: string[] = [
  "Business-focused planning",
  "Professional UI/UX design",
  "Responsive development",
  "Custom functionality",
  "SEO-friendly architecture",
  "Performance-conscious development",
  "Scalable technology",
  "Clear project communication",
  "Post-launch support",
];

export const webStatBadges: WebStatBadge[] = [
  { val: "99.9%", label: "Uptime SLA", bg: "bg-emerald-50 text-emerald-700 border-emerald-200/60", dot: "bg-emerald-500" },
  { val: "0.2s", label: "Page Load Speed", bg: "bg-pink-50 text-pink-700 border-pink-200/60", dot: "bg-pink-500 animate-pulse" },
  { val: "100", label: "Lighthouse Score", bg: "bg-violet-50 text-violet-700 border-violet-200/60", dot: "bg-violet-500" },
  { val: "100%", label: "SEO Optimized", bg: "bg-indigo-50 text-indigo-700 border-indigo-200/60", dot: "bg-indigo-500" },
];

export const webTechItems: WebTechItem[] = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
];

export const webAppCards: WebAppCard[] = [
  {
    title: "Web Application Development",
    subtitle: "Custom SaaS & Enterprise Portals",
    desc: "As businesses become more digitally connected, conventional websites may not always be enough. We build customized web applications, customer portals, dashboards, booking systems, and marketplaces engineered around your exact workflows.",
    tag: "SaaS & Portals Engine",
    icon: Cpu,
    gradient: "from-pink-500 to-rose-600",
    badgeBg: "bg-pink-50 text-pink-600 border-pink-100",
    pulseColor: "bg-pink-500",
    checkColor: "text-pink-500",
    hoverBorder: "hover:border-pink-300",
    features: ["Custom Dashboards", "Role-Based Access", "API Workflows"],
  },
  {
    title: "WordPress & E-Commerce Stores",
    subtitle: "High-Converting Retail Platforms",
    desc: "From flexible WordPress sites designed for easy content management to full-fledged e-commerce stores with product catalogs, shopping carts, payment gateways, and automated order workflows that scale online sales.",
    tag: "Retail & E-Com Suite",
    icon: ShoppingBag,
    gradient: "from-violet-600 to-indigo-600",
    badgeBg: "bg-violet-50 text-violet-600 border-violet-100",
    pulseColor: "bg-violet-600",
    checkColor: "text-violet-600",
    hoverBorder: "hover:border-violet-300",
    features: ["Product Catalogs", "Secure Gateways", "Cart System"],
  },
  {
    title: "Responsive & SEO-Friendly Architecture",
    subtitle: "Core Web Vitals & Speed First",
    desc: "Designed to provide a consistent experience across desktops, tablets, and smartphones. Our SEO-friendly website development considers page speed, semantic HTML structure, clean URLs, internal linking, and mobile responsiveness.",
    tag: "SEO & Speed Core",
    icon: Search,
    gradient: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    pulseColor: "bg-emerald-500",
    checkColor: "text-emerald-500",
    hoverBorder: "hover:border-emerald-300",
    features: ["100/100 Lighthouse", "Semantic HTML5", "Mobile First"],
  },
];

export const webAdvantageBadges: WebAdvantageBadge[] = [
  { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" },
  { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
  { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
  { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
  { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
  { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
  { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
  { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
  { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" },
];
