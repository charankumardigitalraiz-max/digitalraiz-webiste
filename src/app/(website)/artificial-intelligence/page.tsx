"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoreAiEngineeringSection from "@/components/website/ai/CoreAiEngineeringSection";
import GenerativeAiInnovationsSection from "@/components/website/ai/GenerativeAiInnovationsSection";
import AiHero from "@/components/website/ai/AiHero";
import AiCtaBanner from "@/components/website/ai/AiCtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function AiServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ── */}
        <AiHero />

        {/* ── SECTION 1: Engineering Intelligence with AI & Machine Learning ── */}
        <ScrollReveal direction="up">
          <CoreAiEngineeringSection />
        </ScrollReveal>

        {/* ── SECTION 2: Generative AI for the Next Generation of Digital Experiences ── */}
        <ScrollReveal direction="up" delay={100}>
          <GenerativeAiInnovationsSection />
        </ScrollReveal>

        {/* ── CALL TO ACTION BANNER ── */}
        <ScrollReveal direction="up">
          <AiCtaBanner />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
