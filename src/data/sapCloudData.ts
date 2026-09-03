import {
  Cloud,
  GitMerge,
  Database,
  FileCheck,
  Settings,
  Code,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { SapCorePillar, SapMatrixItem } from "@/interfaces/sapCloud";

export const sapCorePillars: SapCorePillar[] = [
  {
    step: "01",
    title: "SAP Cloud Adoption & Modernization",
    desc: "Modernizing legacy enterprise ERP environments and migrating workload databases onto SAP Cloud & SAP S/4HANA architecture.",
    icon: Cloud,
    gradient: "from-pink-500 via-violet-500 to-pink-600",
    accentBorder: "group-hover:border-pink-400",
  },
  {
    step: "02",
    title: "Enterprise Application Integration",
    desc: "Connecting Salesforce, HubSpot, e-commerce portals, and third-party systems directly with SAP back-office operations via SAP Integration Suite.",
    icon: GitMerge,
    gradient: "from-violet-500 via-indigo-500 to-violet-600",
    accentBorder: "group-hover:border-violet-400",
  },
  {
    step: "03",
    title: "Custom ABAP & SAP BTP Logic",
    desc: "Tailoring backend ABAP code, SAP Business Technology Platform modules, and custom database views for specialized enterprise workflows.",
    icon: Database,
    gradient: "from-pink-500 via-rose-500 to-pink-500",
    accentBorder: "group-hover:border-rose-400",
  },
  {
    step: "04",
    title: "Connected Data & HANA Analytics",
    desc: "Establishing real-time analytics dashboards, visibility across inventory shipping, transaction volumes, and operational metrics.",
    icon: FileCheck,
    gradient: "from-indigo-600 via-violet-600 to-indigo-700",
    accentBorder: "group-hover:border-indigo-400",
  },
];

export const sapMatrix: SapMatrixItem[] = [
  {
    name: "SAP S/4HANA Cloud",
    desc: "Next-Gen Enterprise ERP",
    icon: Cloud,
    gradient: "from-pink-500 via-violet-500 to-indigo-600",
    tags: ["ERP", "Finance", "Supply Chain", "S/4HANA"],
  },
  {
    name: "SAP Integration Suite",
    desc: "Multi-Cloud Integration & APIs",
    icon: GitMerge,
    gradient: "from-violet-500 via-indigo-600 to-purple-600",
    tags: ["API Management", "Cloud Integration", "Event Mesh"],
  },
  {
    name: "SAP BTP Platform",
    desc: "Business Technology Extension",
    icon: Settings,
    gradient: "from-indigo-500 via-violet-600 to-pink-500",
    tags: ["AppGyver", "Kyma", "CAP", "BTP"],
  },
  {
    name: "ABAP Cloud Programming",
    desc: "Custom Business Logic Modules",
    icon: Code,
    gradient: "from-purple-600 via-indigo-600 to-pink-500",
    tags: ["ABAP RESTful", "Cloud Native", "OData"],
  },
  {
    name: "SAP Fiori / UI5",
    desc: "Intuitive Modern UX Frameworks",
    icon: ShieldCheck,
    gradient: "from-pink-500 via-rose-500 to-violet-600",
    tags: ["Fiori Elements", "UI5", "Web Components"],
  },
  {
    name: "HANA Data Warehouse",
    desc: "Real-Time Enterprise Analytics",
    icon: BarChart3,
    gradient: "from-violet-600 via-pink-600 to-indigo-600",
    tags: ["Data Sphere", "SAC", "Embedded Analytics"],
  },
];
