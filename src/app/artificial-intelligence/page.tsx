import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import CoreAiEngineeringSection from "@/components/ai/CoreAiEngineeringSection";
import GenerativeAiInnovationsSection from "@/components/ai/GenerativeAiInnovationsSection";
import ContactModalTrigger from "@/components/ContactModalTrigger";

import AiHero from "@/components/ai/AiHero";
import AiCtaBanner from "@/components/ai/AiCtaBanner";

export const metadata = {
  title: "AI, ML & Generative AI Solutions | Digital Raiz",
  description: "Digital Raiz delivers AI, Machine Learning and Generative AI solutions for businesses, including intelligent applications, automation and AI-powered experiences.",
  alternates: {
    canonical: "https://digitalraiz.com/ai-ml-generative-ai-services",
  },
};

export default function AiServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ── */}
        <AiHero />

        {/* ── SECTION 1: Engineering Intelligence with AI & Machine Learning ── */}
        <CoreAiEngineeringSection />

        {/* ── SECTION 2: Generative AI for the Next Generation of Digital Experiences (NEW UNIQUE DESIGN) ── */}
        <GenerativeAiInnovationsSection />

        {/* ── CALL TO ACTION BANNER (SLEEK LIGHT BANNER MATCHING MOBILE APP PAGE) ── */}
        <AiCtaBanner />

      </main>

      <Footer />
    </div>
  );
}
