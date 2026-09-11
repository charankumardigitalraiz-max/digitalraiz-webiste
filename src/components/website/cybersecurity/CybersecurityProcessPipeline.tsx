"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Workflow,
  Eye,
  Terminal,
  Lock,
  Cpu,
  Activity,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function CybersecurityProcessPipeline() {
  // 6 Stage Cyber Defense Execution Pipeline
  const defensePipelineNodes = [
    { step: "01", title: "Attack Surface Recon", desc: "Dark web credentials & open port mapping", icon: Eye, duration: "Week 1", deliverables: ["Port Mapping Report", "Dark Web Threat Audit"], tools: ["Nmap", "Shodan"] },
    { step: "02", title: "VAPT Pentesting", desc: "OWASP Top 10 automated & manual exploits", icon: Terminal, duration: "Week 2", deliverables: ["OWASP Penetration Report", "Exploit Proofs"], tools: ["Burp Suite", "Metasploit"] },
    { step: "03", title: "Zero-Trust Hardening", desc: "HashiCorp Vault secrets & MFA enforcement", icon: Lock, duration: "Week 3", deliverables: ["MFA Okta Enforcement", "Vault Secrets Setup"], tools: ["Okta", "Vault"] },
    { step: "04", title: "DevSecOps CI/CD", desc: "SonarQube & Snyk static security gates", icon: Cpu, duration: "Week 4", deliverables: ["GitHub Actions Gates", "Snyk Dependency Fixes"], tools: ["SonarQube", "Snyk"] },
    { step: "05", title: "24/7 SIEM Telemetry", desc: "Splunk log streams & 15-min incident SLA", icon: Activity, duration: "Week 5", deliverables: ["Splunk Log Monitoring", "PagerDuty Alerts"], tools: ["Splunk", "Wazuh"] },
    { step: "06", title: "Audit Certification", desc: "ISO 27001 & SOC2 Type II compliance kit", icon: ShieldCheck, duration: "Week 6", deliverables: ["ISO 27001 Evidence Kit", "SOC2 Readiness Audit"], tools: ["Vanta", "Drata"] }
  ];

  return (
    <section className="py-10 sm:py-10 bg-white relative border-y border-slate-100 overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-12 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
              <Workflow className="w-3.5 h-3.5 text-pink-600" />
              Engineering Execution Lifecycle
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Our 6-Stage Cybersecurity{" "}
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
                &amp; Pentesting Process
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
              A battle-tested 6-phase security remediation lifecycle designed to neutralize threats before production deployment.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Stage Compact Studio Stepper Deck (Horizontal Carousel on Mobile, Grid on Tablet/Desktop) */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar gap-4 md:gap-5 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {defensePipelineNodes.map((phase, pIdx) => {
            const PhaseIcon = phase.icon || ShieldCheck;
            return (
              <ScrollReveal key={pIdx} direction="up" delay={pIdx * 60} className="h-full w-[280px] sm:w-[320px] md:w-auto shrink-0 md:shrink snap-center">
                <div className="group relative bg-white border border-slate-200/90 hover:border-pink-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 flex flex-col justify-between space-y-4 h-full overflow-hidden text-left">
                  {/* Giant Watermark Step Number in Background */}
                  <span className="absolute -right-3 -bottom-5 text-8xl font-black font-mono text-slate-100 group-hover:text-pink-100/60 transition-colors pointer-events-none select-none">
                    {phase.step}
                  </span>

                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-3.5 relative z-10">
                    {/* Compact Header: Stage Pill & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-full shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                        Stage {phase.step} • {phase.duration}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs">
                        <PhaseIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Short Overview */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                        {phase.title}
                      </h3>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>

                    {/* Compact Deliverables Chips */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Key Deliverables
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[10.5px] font-semibold text-slate-700 group-hover:border-pink-200 group-hover:bg-pink-50/40 transition-colors">
                            <CheckCircle2 className="w-3 h-3 text-pink-500 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Toolchain Micro Badges */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 flex-wrap relative z-10">
                    {phase.tools.map((t, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
