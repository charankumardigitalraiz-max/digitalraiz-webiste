"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

// Modular Cybersecurity Components
import CybersecurityHero from "@/components/website/cybersecurity/CybersecurityHero";
import CybersecurityDefenseMatrix from "@/components/website/cybersecurity/CybersecurityDefenseMatrix";
import CybersecurityProcessPipeline from "@/components/website/cybersecurity/CybersecurityProcessPipeline";
import CybersecurityTalentBanner from "@/components/website/cybersecurity/CybersecurityTalentBanner";

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-pink-500 selection:text-white lg:pr-[80px]">
      <Header />

      <main>
        {/* HERO SECTION */}
        <CybersecurityHero />

        {/* SECTION 1: INTERACTIVE 2-COLUMN CYBER SECURITY COMMAND MATRIX */}
        <ScrollReveal direction="up">
          <CybersecurityDefenseMatrix />
        </ScrollReveal>

        {/* SECTION 2: 6-STAGE CYBER REMEDIATION LIFECYCLE DECK */}
        <ScrollReveal direction="up" delay={100}>
          <CybersecurityProcessPipeline />
        </ScrollReveal>

        {/* SECTION 3: HIRE CERTIFIED ETHICAL HACKERS & 8 SECURITY PILLARS */}
        <ScrollReveal direction="up" delay={100}>
          <CybersecurityTalentBanner />
        </ScrollReveal>

        {/* CALL TO ACTION BANNER */}
        <ScrollReveal direction="up">
          <ServiceCtaBanner
            badge="Cybersecurity & Threat Defense"
            title="Ready to Secure Your Enterprise Infrastructure with Digital Raiz?"
            description="Zero-Trust Architecture • VAPT Pentesting • 24/7 SIEM SOC • ISO 27001 Compliance in Hyderabad"
          />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
