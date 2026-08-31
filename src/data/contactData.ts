import { MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { ContactProcessStep, OfficeContactDetails } from "@/interfaces/contact";

export const contactProcessSteps: ContactProcessStep[] = [
  {
    icon: MessageSquare,
    title: "1. Strategy Call",
    desc: "Discuss objectives, outline scope, and identify high-growth channels.",
    color: "from-pink-500 to-rose-450",
  },
  {
    icon: Clock,
    title: "2. Execution Proposal",
    desc: "Receive a transparent roadmap with deliverables, tech stacks, and metrics.",
    color: "from-violet-650 to-indigo-500",
  },
  {
    icon: ShieldCheck,
    title: "3. Direct Implementation",
    desc: "Launch campaigns, optimize platforms, and track weekly KPIs.",
    color: "from-indigo-600 to-blue-500",
  },
];

export const officeContactDetails: OfficeContactDetails = {
  companyName: "DigitalRaiz Creative Solutions PVT LTD",
  addressLines: [
    "#616, Manjeera Majestic Commercial,",
    "KPHB-JNTU road, Hyderabad 500085,",
    "Telangana, India.",
  ],
  phones: ["+91-9494613601", "+91-8179163601"],
  emails: ["info@digitalraiz.com", "digitalraizinst@gmail.com"],
  socialLinks: [
    { name: "Facebook", url: "https://www.facebook.com/digitalraiz/" },
    { name: "Twitter", url: "https://twitter.com/digital_raiz" },
    { name: "YouTube", url: "https://www.youtube.com/@digitalraiz2023/featured" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/digital-raiz/" },
    { name: "Pinterest", url: "https://in.pinterest.com/digitalraiz/" },
    { name: "Instagram", url: "https://www.instagram.com/digital_raiz/" },
  ],
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.326392496344!2d78.39146131435463!3d17.49192600438689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c70d3f2329%3A0xe69263b460c8fae6!2sDigital%20Raiz%20Creative%20Solutions%20%7C%20Digital%20Raiz!5e0!3m2!1sen!2sin!4v1615387349786!5m2!1sen!2sin",
};
