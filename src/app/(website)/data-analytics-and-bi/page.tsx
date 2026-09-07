import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import DataAnalyticsHero from "@/components/data-analytics/DataAnalyticsHero";
import DataAnalyticsRevealSection from "@/components/data-analytics/DataAnalyticsRevealSection";
import DataAnalyticsBISection from "@/components/data-analytics/DataAnalyticsBISection";
import DataAnalyticsLifecycleSection from "@/components/data-analytics/DataAnalyticsLifecycleSection";
import DataAnalyticsPillarsSection from "@/components/data-analytics/DataAnalyticsPillarsSection";

export const metadata = {
  title: "Data Analytics & Business Intelligence Services | Digital Raiz",
  description:
    "Digital Raiz provides data analytics and business intelligence services that turn complex data into actionable insights, intelligent dashboards and better business decisions.",
  alternates: {
    canonical: "https://digitalraiz.com/data-analytics-and-bi",
  },
  robots: "index, follow",
};

export default function DataAnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-500 selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <DataAnalyticsHero />

        {/* SECTION 1: DATA ANALYTICS REVEAL SECTION */}
        <DataAnalyticsRevealSection />

        {/* SECTION 2: BUSINESS INTELLIGENCE & ARCHITECTURE TIER SECTION */}
        <DataAnalyticsBISection />

        {/* SECTION 3: 6-STAGE ENGINEERING LIFECYCLE SECTION */}
        <DataAnalyticsLifecycleSection />

        {/* SECTION 4: STRATEGIC PILLARS & DATA SQUAD SECTION */}
        <DataAnalyticsPillarsSection />

        {/* CALL TO ACTION BANNER */}
        <ServiceCtaBanner
          badge="Data Analytics & BI Studio"
          title="Ready to Build Your Enterprise Data Strategy with Digital Raiz?"
          description="Snowflake Cloud Warehousing • Real-time Streaming • PowerBI Executive Dashboards • Customer 360"
        />
      </main>

      <Footer />
    </div>
  );
}
