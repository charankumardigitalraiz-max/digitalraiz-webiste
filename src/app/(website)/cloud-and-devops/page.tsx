"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfrastructureAdvantage from "@/components/website/cloud-devops/InfrastructureAdvantage";
import ContinuousDeliverySection from "@/components/website/cloud-devops/ContinuousDeliverySection";
import CloudDevopsHero from "@/components/website/cloud-devops/CloudDevopsHero";
import CloudDevopsCtaBanner from "@/components/website/cloud-devops/CloudDevopsCtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function CloudDevOpsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ── */}
        <CloudDevopsHero />

        {/* ── SECTION 1: Infrastructure Advantage ── */}
        <ScrollReveal direction="up">
          <InfrastructureAdvantage />
        </ScrollReveal>

        {/* ── SECTION 2: Continuous Delivery & CI/CD Pipeline ── */}
        <ScrollReveal direction="up" delay={100}>
          <ContinuousDeliverySection />
        </ScrollReveal>

        {/* ── CALL TO ACTION BANNER (SLEEK LIGHT BANNER) ── */}
        <ScrollReveal direction="up">
          <CloudDevopsCtaBanner />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
