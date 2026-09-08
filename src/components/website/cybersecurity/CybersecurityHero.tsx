"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Key, Terminal, Activity, FileCheck, CheckCircle2 } from "lucide-react";

export default function CybersecurityHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-10">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 space-y-10">

        {/* Centered Top Content Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">

          {/* Pulsing Status Pill */}
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              Enterprise Cybersecurity &amp; Threat Intelligence
            </div>
          </ScrollReveal>

          {/* Massive Main Headline */}
          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Zero-Trust Cyber Defense &amp;{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Threat Remediation Engine
              </span>
            </h1>
          </ScrollReveal>

          {/* Sub-headline Overview */}
          <ScrollReveal direction="up" delay={150}>
            <p className="text-slate-600 text-xs sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              Shield enterprise cloud infrastructure, web apps, and APIs with automated penetration testing (VAPT), 24/7 SIEM SOC threat monitoring, and ISO 27001 / SOC2 compliance automation.
            </p>
          </ScrollReveal>

        </div>

        {/* 4 Interactive Security Command Metric Cards */}
        <ScrollReveal direction="up" delay={250}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="group p-5 rounded-lg bg-white border border-slate-200/90 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left space-y-3">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                  <Key className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono font-bold text-pink-600 uppercase bg-pink-50 px-2.5 py-0.5 rounded-full">
                  Zero-Trust
                </span>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
                  Identity &amp; IAM Access
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-1">
                  Multi-factor auth, Okta SSO &amp; HashiCorp Vault secret rotation.
                </p>
              </div>
              <div className="text-[10px] font-mono font-bold text-emerald-600 flex items-center gap-1 pt-1 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Identity Hardened</span>
              </div>
            </div>

            <div className="group p-5 rounded-lg bg-white border border-slate-200/90 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left space-y-3">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono font-bold text-violet-600 uppercase bg-violet-50 px-2.5 py-0.5 rounded-full">
                  VAPT Scans
                </span>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
                  Pentesting &amp; Exploits
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-1">
                  OWASP Top 10 automated pentests &amp; zero-day vulnerability checks.
                </p>
              </div>
              <div className="text-[10px] font-mono font-bold text-emerald-600 flex items-center gap-1 pt-1 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>0 Open Vulnerabilities</span>
              </div>
            </div>

            <div className="group p-5 rounded-lg bg-white border border-slate-200/90 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left space-y-3">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono font-bold text-pink-600 uppercase bg-pink-50 px-2.5 py-0.5 rounded-full">
                  24/7 SOC
                </span>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
                  Managed SIEM SOC
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-1">
                  Splunk AI anomaly log telemetry &amp; 15-minute emergency SLA.
                </p>
              </div>
              <div className="text-[10px] font-mono font-bold text-pink-600 flex items-center gap-1 pt-1 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                <span>&lt; 15-Min Response SLA</span>
              </div>
            </div>

            <div className="group p-5 rounded-lg bg-white border border-slate-200/90 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left space-y-3">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Compliance
                </span>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
                  ISO 27001 &amp; SOC2
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-1">
                  Automated evidence tracking for GDPR, HIPAA &amp; SOC2 audits.
                </p>
              </div>
              <div className="text-[10px] font-mono font-bold text-emerald-600 flex items-center gap-1 pt-1 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Audit Ready</span>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
