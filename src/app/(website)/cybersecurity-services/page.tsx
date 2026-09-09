"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

// Modular Cybersecurity Components
import CybersecurityHero from "@/components/website/cybersecurity/CybersecurityHero";
import CybersecurityAttackSurfaceSection from "@/components/website/cybersecurity/CybersecurityAttackSurfaceSection";
import CybersecurityArchitectureSection from "@/components/website/cybersecurity/CybersecurityArchitectureSection";
import CybersecurityDefenseMatrix from "@/components/website/cybersecurity/CybersecurityDefenseMatrix";
import CybersecurityProcessPipeline from "@/components/website/cybersecurity/CybersecurityProcessPipeline";
import CybersecurityTalentBanner from "@/components/website/cybersecurity/CybersecurityTalentBanner";

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-pink-500 selection:text-white lg:pr-[80px] overflow-x-hidden">
      <Header />

      <main>
        {/* HERO SECTION (PDF Title: Cybersecurity Services Engineered for Trust, Resilience and Digital Continuity) */}
        <CybersecurityHero />

        {/* SECTION 1: TURNING THE ATTACK SURFACE INTO A STRATEGIC SECURITY PERSPECTIVE & 9 CAPABILITIES */}
        <ScrollReveal direction="up">
          <CybersecurityAttackSurfaceSection />
        </ScrollReveal>

        {/* SECTION 2: DESIGNING DIGITAL ENVIRONMENTS WHERE SECURITY IS PART OF THE ARCHITECTURE */}
        <ScrollReveal direction="up" delay={100}>
          <CybersecurityArchitectureSection />
        </ScrollReveal>

        {/* SECTION 3: INTERACTIVE 2-COLUMN CYBER SECURITY COMMAND MATRIX */}
        <ScrollReveal direction="up">
          <CybersecurityDefenseMatrix />
        </ScrollReveal>

        {/* SECTION 4: 6-STAGE CYBER REMEDIATION LIFECYCLE DECK */}
        <ScrollReveal direction="up" delay={100}>
          <CybersecurityProcessPipeline />
        </ScrollReveal>

        {/* SECTION 5: HIRE CERTIFIED ETHICAL HACKERS & 8 SECURITY PILLARS */}
        <ScrollReveal direction="up" delay={100}>
          <CybersecurityTalentBanner />
        </ScrollReveal>

        {/* CALL TO ACTION BANNER */}
        <ScrollReveal direction="up">
          <ServiceCtaBanner
            badge="Cybersecurity & Digital Security Solutions"
            title="Ready to Secure Your Enterprise Infrastructure with Digital Raiz?"
            description="Zero-Trust Architecture • VAPT Pentesting • Web & Mobile App Security • ISO 27001 Compliance"
          />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
