"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalesforceHero from "@/components/website/salesforce/SalesforceHero";
import SalesforceServicesGrid from "@/components/website/salesforce/SalesforceServicesGrid";
import SalesforceWhyChooseUs from "@/components/website/salesforce/SalesforceWhyChooseUs";
import SalesforceIndustriesSection from "@/components/website/salesforce/SalesforceIndustriesSection";
import SalesforceCtaBanner from "@/components/website/salesforce/SalesforceCtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function SalesforceServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 lg:pr-[80px] overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ── */}
        <ScrollReveal direction="up">
          <SalesforceHero />
        </ScrollReveal>

        {/* ── SECTION 1: 11 CORE SALESFORCE SERVICES ── */}
        <ScrollReveal direction="up">
          <SalesforceServicesGrid />
        </ScrollReveal>

        {/* ── SECTION 2: WHY CHOOSE US ── */}
        <ScrollReveal direction="up">
          <SalesforceWhyChooseUs />
        </ScrollReveal>

        {/* ── SECTION 3: INDUSTRIES WE SERVE ── */}
        <ScrollReveal direction="up">
          <SalesforceIndustriesSection />
        </ScrollReveal>

        {/* ── CALL TO ACTION BANNER ── */}
        <ScrollReveal direction="up">
          <SalesforceCtaBanner />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

