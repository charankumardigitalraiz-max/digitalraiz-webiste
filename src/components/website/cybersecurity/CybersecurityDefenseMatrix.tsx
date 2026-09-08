"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";
import {
  Key,
  Terminal,
  Activity,
  Cloud,
  ShieldAlert,
  FileCheck,
  Sliders,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function CybersecurityDefenseMatrix() {
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);

  // 6 Core Cybersecurity Defense Pillars
  const securityPillars = [
    {
      id: "zero-trust",
      step: "01",
      badge: "IDENTITY & ACCESS",
      title: "Zero-Trust Architecture & IAM Governance",
      subtitle: "Never Trust, Always Verify Access Controls",
      overview: "Enforce strict multi-factor authentication (MFA), role-based access control (RBAC), and least-privilege credentials across all cloud apps and microservices.",
      severity: "CRITICAL DEFENSE",
      icon: Key,
      features: [
        "Multi-Factor Authentication (MFA) Enforcement",
        "HashiCorp Vault Dynamic Secrets Rotation",
        "Single Sign-On (SSO) & OAuth2 Protocol Guard",
        "Role-Based Access Control (RBAC) Governance"
      ],
      tools: ["Okta", "HashiCorp Vault", "Azure AD", "Ping Identity"],
      metric: "100% Identity Hardening"
    },
    {
      id: "vapt",
      step: "02",
      badge: "OFFENSIVE SECURITY",
      title: "Vulnerability Assessment & Pentesting (VAPT)",
      subtitle: "Simulated Real-World Cyber Exploitation",
      overview: "Deploy certified red teaming engineers to simulate real-world cyber attacks against web applications, mobile APIs, and cloud networks to patch zero-day exploits.",
      severity: "ZERO-DAY DEFENSE",
      icon: Terminal,
      features: [
        "OWASP Top 10 Web & API Exploitation Scans",
        "Automated & Manual Penetration Testing",
        "CVSS Score Risk Prioritization Reports",
        "Source Code Vulnerability Remediation Scripts"
      ],
      tools: ["Burp Suite", "Metasploit", "OWASP ZAP", "Wireshark"],
      metric: "Zero Open Vulnerabilities"
    },
    {
      id: "soc-siem",
      step: "03",
      badge: "THREAT MONITORING",
      title: "24/7 Managed SOC & SIEM Telemetry",
      subtitle: "Continuous Real-Time Incident Response",
      overview: "Monitor enterprise server log streams with AI-driven SIEM threat detection engines to block unauthorized intrusions, malware, and lateral movements in real time.",
      severity: "24/7 LIVE RADAR",
      icon: Activity,
      features: [
        "Splunk & Elastic SIEM Log Analytics",
        "AI Anomaly Alerting & Intrusion Detection",
        "15-Minute SLA Emergency Incident Response",
        "Slack & PagerDuty Automated Escalation Bots"
      ],
      tools: ["Splunk", "Elastic SIEM", "Wazuh", "PagerDuty"],
      metric: "< 15-Min Response SLA"
    },
    {
      id: "cloud-cspm",
      step: "04",
      badge: "CLOUD HARDENING",
      title: "Cloud Security Posture Management (CSPM)",
      subtitle: "AWS, GCP & Azure Security Governance",
      overview: "Harden multi-cloud environments against misconfigurations, unencrypted S3 buckets, open security groups, and Kubernetes container runtime exploits.",
      severity: "INFRASTRUCTURE GUARD",
      icon: Cloud,
      features: [
        "AWS GuardDuty & Azure Defender Hardening",
        "Kubernetes K8s Container Runtime Audits",
        "Automated S3 & DB Encryption Enforcement",
        "Infrastructure as Code (IaC) Terraform Checks"
      ],
      tools: ["AWS GuardDuty", "Prisma Cloud", "Terraform", "Trivy"],
      metric: "100% Cloud Hardened"
    },
    {
      id: "devsecops",
      step: "05",
      badge: "PIPELINE SECURITY",
      title: "DevSecOps & SAST / DAST Code Guardrails",
      subtitle: "Automated Security Scanning in CI/CD",
      overview: "Embed static (SAST) and dynamic (DAST) code security scanners directly into GitHub Actions and GitLab pipelines to prevent vulnerable code releases.",
      severity: "CODEBASE SHIELD",
      icon: ShieldAlert,
      features: [
        "SonarQube Static Application Security Scans",
        "Snyk Dependency & Vulnerable Package Fixes",
        "GitHub Actions Security Pipeline Guardrails",
        "Automated Container Image Vulnerability Gates"
      ],
      tools: ["SonarQube", "Snyk", "GitHub Actions", "Docker"],
      metric: "Zero Vulnerable Builds"
    },
    {
      id: "compliance",
      step: "06",
      badge: "AUDIT & COMPLIANCE",
      title: "ISO 27001, SOC2 & GDPR Compliance Automation",
      subtitle: "Audit-Ready Enterprise Trust Framework",
      overview: "Streamline compliance evidence collection and automated audit readiness for SOC2 Type II, ISO 27001, HIPAA, and GDPR data privacy standards.",
      severity: "COMPLIANCE VERIFIED",
      icon: FileCheck,
      features: [
        "SOC2 Type II Automated Evidence Collection",
        "ISO 27001 Information Security Blueprint",
        "GDPR PII Data Masking & Encryption Rules",
        "Continuous Compliance Monitoring Dashboards"
      ],
      tools: ["Vanta", "Drata", "AuditBoard", "AWS Security Hub"],
      metric: "100% Audit Ready"
    }
  ];

  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden space-y-10 border-t border-slate-100">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-10 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Sliders className="w-3 h-3 text-pink-500" />
              Interactive Defense Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              6 Core Cybersecurity{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Command Pillars
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
              Select a cyber defense module below to inspect its zero-trust capabilities, tools, and deliverables.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Split: Master Pillar Selector Menu (Left 4 cols) & Active Pillar Inspector Card (Right 8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column (4 cols) — Master Selector Menu */}
          <ScrollReveal direction="right" className="lg:col-span-4 h-full">
            <div className="space-y-2.5 h-full flex flex-col justify-between">
              {securityPillars.map((p, idx) => {
                const PIcon = p.icon;
                const isActive = activeModuleIdx === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveModuleIdx(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between cursor-pointer group ${isActive
                      ? "bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 border-transparent text-white shadow-xl shadow-pink-500/25 translate-x-1"
                      : "bg-white border-slate-200/90 text-slate-800 hover:border-pink-300 hover:bg-pink-50/40"
                      }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : "bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white"
                        }`}>
                        <PIcon className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-[9px] font-mono font-bold uppercase ${isActive ? "text-pink-100" : "text-pink-600"}`}>
                          Pillar {p.step} • {p.badge}
                        </div>
                        <div className={`text-xs font-bold truncate leading-snug ${isActive ? "text-white" : "text-slate-900 group-hover:text-pink-600"}`}>
                          {p.title}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "text-white translate-x-1" : "text-slate-400 group-hover:text-pink-500"}`} />
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right Column (8 cols) — Active Pillar Inspector Showcase Card */}
          <ScrollReveal direction="left" className="lg:col-span-8 h-full">
            {(() => {
              const activePillar = securityPillars[activeModuleIdx];
              const ActiveIcon = activePillar.icon;

              return (
                <div className="h-full bg-white border border-slate-200/90 hover:border-pink-300 rounded-lg p-7 sm:p-9 transition-all duration-500 shadow-2xl shadow-pink-500/5 space-y-6 flex flex-col justify-between relative overflow-hidden group text-left">
                  {/* Top Accent Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600" />

                  <div className="space-y-5 relative z-10">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-pink-500/20 shrink-0">
                          <ActiveIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-700 bg-pink-50 border border-pink-100 px-3 py-0.5 rounded-full shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                            Pillar {activePillar.step} • {activePillar.badge}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug pt-1">
                            {activePillar.title}
                          </h3>
                        </div>
                      </div>

                      <span className="text-[9.5px] font-mono font-bold text-pink-700 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full shadow-2xs">
                        {activePillar.severity}
                      </span>
                    </div>

                    {/* Subtitle & Overview */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono font-bold text-pink-600 uppercase tracking-wider">
                        {activePillar.subtitle}
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                        {activePillar.overview}
                      </p>
                    </div>

                    {/* Feature Capabilities Checklist (Simple & Clean) */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Core Defense Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {activePillar.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                            <span className="text-[11.5px] leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Tools & Action CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 relative z-10">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase mr-1">Toolchain:</span>
                      {activePillar.tools.map((t, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center gap-1.5 bg-pink-50/70 border border-pink-100/90 text-pink-700 text-[10px] font-mono font-bold px-3 py-0.5 rounded-full shadow-2xs">
                          <span className="w-1 h-1 rounded-full bg-pink-500" />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openContactModal("Cybersecurity Services", `Pillar: ${activePillar.title}`)}
                      className="py-3 px-6 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border-0 flex items-center gap-2"
                    >
                      <span>Deploy Capability</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })()}
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
