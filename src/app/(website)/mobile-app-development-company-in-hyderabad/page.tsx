"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import PlatformExplorer from "@/components/PlatformExplorer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";

// Modular Mobile Application Components
import MobileAppHero from "@/components/website/mobile-app/MobileAppHero";
import MobileAppServicesGrid from "@/components/website/mobile-app/MobileAppServicesGrid";
import MobileAppProcessPipeline from "@/components/website/mobile-app/MobileAppProcessPipeline";
import MobileAppShowcase from "@/components/website/mobile-app/MobileAppShowcase";
import MobileAppTalentBanner from "@/components/website/mobile-app/MobileAppTalentBanner";

export default function MobileApplicationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 lg:pr-[80px] overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        {/* HERO SECTION */}
        <MobileAppHero />

        {/* SERVICES SECTION */}
        <MobileAppServicesGrid />

        {/* PLATFORM EXPLORER (Android, iOS & Cross-Platform) */}
        <section className="py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-12">
            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-violet-600 block">Platform Coverage</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e1b4b] tracking-tight leading-tight">
                  Android &amp; iOS App Development for{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Modern Businesses
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
                  Different platforms require different considerations. We deliver consistent, high-performance mobile experiences across Android, iOS, and cross-platform Flutter/React Native environments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <PlatformExplorer />
            </ScrollReveal>
          </div>
        </section>

        {/* 7-STEP DEVELOPMENT PROCESS */}
        <MobileAppProcessPipeline />

        {/* ANIMATED TESTIMONIALS SECTION */}
        <AnimatedTestimonials />

        {/* REAL-WORLD CLIENT APP PORTFOLIO SHOWCASE */}
        <MobileAppShowcase />

        {/* HIRE DEVELOPERS & WHY CHOOSE US — Obsidian Executive Talent Banner */}
        <MobileAppTalentBanner />

        {/* CALL TO ACTION BANNER */}
        <ServiceCtaBanner
          badge="Mobile App Engineering"
          title="Ready to Build Your Mobile Application with Digital Raiz?"
          description="Android • iOS • Cross-Platform Flutter & React Native Solutions in Hyderabad"
        />
      </main>
      <Footer />
    </div>
  );
}
