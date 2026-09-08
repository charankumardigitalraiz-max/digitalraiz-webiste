"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SapHero from "@/components/website/sap/SapHero";
import SapConnectedEnterpriseSection from "@/components/website/sap/SapConnectedEnterpriseSection";
import SapCloudIntelligenceSection from "@/components/website/sap/SapCloudIntelligenceSection";
import SapCtaBanner from "@/components/website/sap/SapCtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function SapCloudServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans text-slate-800 lg:pr-[80px] overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ── */}
        <SapHero />

        {/* ── SECTION 1: Connected Enterprise Framework ── */}
        <ScrollReveal direction="up">
          <SapConnectedEnterpriseSection />
        </ScrollReveal>

        {/* ── SECTION 2: Cloud Intelligence Matrix Grid ── */}
        <ScrollReveal direction="up" delay={100}>
          <SapCloudIntelligenceSection />
        </ScrollReveal>

        {/* ── CALL TO ACTION BANNER (SLEEK LIGHT BANNER) ── */}
        <ScrollReveal direction="up">
          <SapCtaBanner />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
