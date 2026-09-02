import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cloud, CheckCircle2, Sparkles } from "lucide-react";
import InfrastructureAdvantage from "@/components/cloud-devops/InfrastructureAdvantage";
import ContinuousDeliverySection from "@/components/cloud-devops/ContinuousDeliverySection";
import ContactModalTrigger from "@/components/ContactModalTrigger";
import CloudDevopsHero from "@/components/cloud-devops/CloudDevopsHero";
import CloudDevopsCtaBanner from "@/components/cloud-devops/CloudDevopsCtaBanner";

export const metadata = {
  title: "Cloud & DevOps Services for Modern Enterprises | Digital Raiz",
  description: "Digital Raiz builds scalable cloud architecture and automated DevOps pipelines to help digital businesses achieve continuous evolution and reliable performance.",
  alternates: {
    canonical: "https://digitalraiz.com/cloud-and-devops",
  },
};

export default function CloudDevOpsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ── */}
        <CloudDevopsHero />

        {/* ── SECTION 1: Infrastructure Advantage ── */}
        <InfrastructureAdvantage />

        {/* ── SECTION 2: Continuous Delivery & CI/CD Pipeline ── */}
        <ContinuousDeliverySection />

        {/* ── CALL TO ACTION BANNER (SLEEK LIGHT BANNER) ── */}
        <CloudDevopsCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
