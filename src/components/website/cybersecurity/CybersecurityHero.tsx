"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function CybersecurityHero() {
  return (
    <section className="relative pt-16 pb-8 sm:pt-18 sm:pb-10 lg:pt-8 lg:pb-10 bg-white  overflow-hidden">
      {/* Background Subtle Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-pink-50/20 pointer-events-none" /> */}

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content Column */}
        <ScrollReveal direction="left" className="space-y-6 flex-grow max-w-2xl order-last lg:order-first">

          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
            Cybersecurity Services &amp; Digital Security Solutions
          </div> */}

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Cybersecurity Services Engineered for{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
              Trust, Resilience &amp; Digital Continuity
            </span>
          </h1>

          {/* Intro Paragraphs */}
          <div className="space-y-3 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
            <p className="font-semibold text-slate-800 text-sm sm:text-base leading-snug">
              Security is no longer a technical consideration that sits behind the business. It is part of the experience a business creates, the systems it operates and the trust it earns.
            </p>
            <p>
              As applications become more connected and organizations increasingly depend on cloud infrastructure, APIs, data platforms and digital workflows, the security landscape becomes more complex. A single overlooked vulnerability can extend far beyond a technical issue—affecting operations, customer confidence, sensitive information and business continuity.
            </p>
            <p>
              Digital Raiz provides <strong className="text-slate-800 font-semibold">cybersecurity services and digital security solutions</strong> designed to help organizations understand their exposure, strengthen their technology environments and build greater resilience against evolving cyber risks.
            </p>
            <p>
              Our approach looks beyond isolated vulnerabilities. We consider how applications, infrastructure, data, identities and integrations interact to create a broader security environment.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={() => openContactModal("Cybersecurity Services")}
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest shadow-md hover:scale-[1.02] transition-all duration-300 active:scale-95 group border-0 cursor-pointer pointer-events-auto touch-manipulation min-h-[44px]"
            >
              <span>Consult Security Team</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </ScrollReveal>

        {/* Right Hero Image Stage */}
        <ScrollReveal direction="right" delay={150} className="w-full lg:w-[520px] shrink-0 order-first lg:order-last">
          <div className="relative rounded-2xl overflow-hidden  bg-white">
            <Image
              src="/cyber-security/cybersecurity_zero_trust_isometric_3x4_v1.png"
              alt="Cybersecurity & Zero Trust Security Architecture"
              width={1200}
              height={1600}
              className="w-full h-auto object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


