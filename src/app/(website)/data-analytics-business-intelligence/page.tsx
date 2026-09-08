"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import DataAnalyticsHero from "@/components/website/data-analytics/DataAnalyticsHero";
import DataAnalyticsRevealSection from "@/components/website/data-analytics/DataAnalyticsRevealSection";
import DataAnalyticsBISection from "@/components/website/data-analytics/DataAnalyticsBISection";
import DataAnalyticsLifecycleSection from "@/components/website/data-analytics/DataAnalyticsLifecycleSection";
import DataAnalyticsPillarsSection from "@/components/website/data-analytics/DataAnalyticsPillarsSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function DataAnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-500 selection:text-white lg:pr-[80px] overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <DataAnalyticsHero />

        {/* SECTION 1: DATA ANALYTICS REVEAL SECTION */}
        <ScrollReveal direction="up">
          <DataAnalyticsRevealSection />
        </ScrollReveal>

        {/* SECTION 2: BUSINESS INTELLIGENCE & ARCHITECTURE TIER SECTION */}
        <ScrollReveal direction="up" delay={100}>
          <DataAnalyticsBISection />
        </ScrollReveal>

        {/* SECTION 3: 6-STAGE ENGINEERING LIFECYCLE SECTION */}
        <ScrollReveal direction="up" delay={100}>
          <DataAnalyticsLifecycleSection />
        </ScrollReveal>

        {/* SECTION 4: STRATEGIC PILLARS & DATA SQUAD SECTION */}
        <ScrollReveal direction="up" delay={100}>
          <DataAnalyticsPillarsSection />
        </ScrollReveal>

        {/* CALL TO ACTION BANNER */}
        <ScrollReveal direction="up">
          <ServiceCtaBanner
            badge="Data Analytics & BI Studio"
            title="Ready to Build Your Enterprise Data Strategy with Digital Raiz?"
            description="Snowflake Cloud Warehousing • Real-time Streaming • PowerBI Executive Dashboards • Customer 360"
          />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
