"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import {
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
  Terminal,
  Layers,
  Activity,
  FileCheck,
  Zap,
  ShieldAlert
} from "lucide-react";

export default function CybersecurityTalentBanner() {
  const securityAssurancePillars = [
    { title: "100% Zero-Trust Audit", desc: "Identity & secrets management hardening", icon: Lock },
    { title: "48-Hr Squad Match", desc: "Instant pre-vetted OSCP hacker onboarding", icon: Users },
    { title: "OWASP Top 10 Remediation", desc: "Complete vulnerability patching SLA", icon: Terminal },
    { title: "CI/CD DevSecOps", desc: "Automated SAST & container security gates", icon: Layers },
    { title: "24/7 SIEM & SOC Alerts", desc: "Real-time log telemetry & anomaly alerts", icon: Activity },
    { title: "ISO 27001 & SOC2 Audit", desc: "Compliance automation & PII masking", icon: FileCheck },
    { title: "API Vulnerability Scans", desc: "REST & GraphQL pentesting proofs", icon: Zap },
    { title: "15-Min Incident SLA", desc: "Rapid SOC emergency response team", icon: ShieldAlert }
  ];

  return (
    <section className="py-10 sm:py-10 bg-white relative border-t border-slate-100">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-10 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              The Digital Raiz Advantage
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Why Global Enterprises Trust Digital Raiz for{" "}
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
                Cybersecurity &amp; VAPT
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
              Deploy pre-vetted OSCP and CEH certified ethical hackers ready to audit and secure your infrastructure within 48 hours.
            </p>
          </div>
        </ScrollReveal>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

          {/* Left Column (5 cols) — Ethical Hacking Squad Pitch */}
          <ScrollReveal direction="right" className="lg:col-span-5 h-full">
            <div className="h-full bg-white border border-slate-200/90 hover:border-pink-300 rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 space-y-5 sm:space-y-6 flex flex-col justify-between relative overflow-hidden group">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600" />

              <div className="space-y-3.5 sm:space-y-4 text-left relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] sm:text-[9px] font-mono font-bold uppercase tracking-widest text-pink-700">
                  <Users className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <span>Dedicated Ethical Hackers from Hyderabad</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Hire Certified Ethical Hackers &amp; <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">DevSecOps Engineers</span>
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  Augment your internal security squad with certified OSCP, CEH, and CISSP ethical hackers ready to conduct deep VAPT pentesting and zero-trust hardening.
                </p>

                {/* Feature Checkpoints */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {[
                    "48-Hour Instant Squad Onboarding",
                    "100% Confidentiality & Strict NDA Protection",
                    "Direct Integration into Slack & Jira Workflows"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 relative z-10">
                <button
                  type="button"
                  onClick={() => openContactModal("Cybersecurity Services", "Hire Dedicated Ethical Hackers")}
                  className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-0 flex items-center justify-center gap-2 pointer-events-auto touch-manipulation min-h-[44px]"
                >
                  <span>Deploy Ethical Hacking Squad</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column (7 cols) — 8 Cybersecurity Assurance Pillars Grid */}
          <ScrollReveal direction="left" className="lg:col-span-7 h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 shrink-0" />
                  <span>8 Core Cybersecurity Assurance Pillars</span>
                </h3>
                <span className="text-[8.5px] sm:text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-100 px-2.5 sm:px-3 py-1 rounded-full shrink-0">
                  Zero-Trust SLA
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                {securityAssurancePillars.map((item, i) => {
                  const PillarIcon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden text-left"
                    >
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white border border-slate-200/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-all duration-300">
                        <PillarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <h4 className="text-[11.5px] sm:text-xs font-bold text-slate-900 group-hover:text-pink-600 transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 group-hover:text-slate-700 transition-colors leading-tight truncate sm:whitespace-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
