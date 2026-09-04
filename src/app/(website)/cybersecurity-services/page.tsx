"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Key,
  ShieldAlert,
  Terminal,
  Eye,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  Zap,
  Server,
  Cloud,
  FileCheck,
  Phone,
  Mail,
  Users,
  Workflow,
  Cpu,
  Radar,
  Radio,
  Sliders,
  Check,
  Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";

// ScrollReveal Wrapper
const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "-translate-y-10";
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      default:
        return "translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getDirectionStyles()}`
        } ${className}`}
    >
      {children}
    </div>
  );
};

export default function CybersecurityServicesPage() {
  const [techPaused, setTechPaused] = useState(false);
  const techScrollRef = useRef<HTMLDivElement>(null);

  // Active Security Module Tab (Unique Interactive Feature)
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);



  // Continuous auto-scroll for security tech stack ticker
  useEffect(() => {
    const el = techScrollRef.current;
    if (!el) return;
    let animationFrameId: number;

    const scroll = () => {
      if (!techPaused && el) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [techPaused]);

  // Cybersecurity Tech Stack
  const securityTechStack = [
    { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
    { name: "CrowdStrike", icon: "https://cdn.simpleicons.org/crowdstrike/E01A22" },
    { name: "Palo Alto", icon: "https://cdn.simpleicons.org/paloaltonetworks/FA5822" },
    { name: "Splunk", icon: "https://cdn.simpleicons.org/splunk/000000" },
    { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/167EFA" },
    { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit/195FA5" },
    { name: "Burp Suite", icon: "https://cdn.simpleicons.org/portswigger/FF6600" },
    { name: "Okta", icon: "https://cdn.simpleicons.org/okta/007DC1" },
    { name: "HashiCorp Vault", icon: "https://cdn.simpleicons.org/vault/000000" },
    { name: "Docker Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "AWS GuardDuty", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
  ];

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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-pink-500 selection:text-white">
      <Header />

      <main>
        {/* CENTERED ULTRA-MODERN STUDIO HERO DESIGN */}
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

              {/* Action Buttons */}
              {/* <ScrollReveal direction="up" delay={200}>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => openContactModal("Cybersecurity Services")}
                    className="inline-flex items-center gap-2.5 py-4 px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[11px] font-black uppercase tracking-wider shadow-[0_10px_25px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
                  >
                    <span>Request Security Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => openContactModal("Schedule Pentest Consultation")}
                    className="inline-flex items-center gap-2 py-4 px-7 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-[11px] font-bold uppercase tracking-wider hover:border-pink-300 transition-all cursor-pointer shadow-2xs"
                  >
                    <Lock className="w-4 h-4 text-pink-500" />
                    <span>Schedule Pentest Call</span>
                  </button>
                </div>
              </ScrollReveal> */}

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

            {/* SECURITY TECH STACK TICKER */}
            {/* <div className="py-3 w-full overflow-hidden mt-8 border-t border-slate-100">
              <div
                ref={techScrollRef}
                onMouseEnter={() => setTechPaused(true)}
                onMouseLeave={() => setTechPaused(false)}
                className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap items-center gap-0 w-full"
              >
                {[...securityTechStack, ...securityTechStack, ...securityTechStack].map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-6 py-1.5 border-r border-slate-100 shrink-0">
                    <img src={t.icon} alt={t.name} className="w-6 h-6 object-contain" />
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">{t.name}</span>
                  </div>
                ))}
              </div>
            </div> */}

          </div>
        </section>

        {/* SECTION 1: NEW INTERACTIVE 2-COLUMN CYBER SECURITY COMMAND MATRIX */}
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

        {/* SECTION 2: 6-STAGE CYBER REMEDIATION LIFECYCLE DECK */}
        <section className="py-10 sm:py-10 bg-white relative border-y border-slate-100 overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-12 relative z-10">

            {/* Section Header */}
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Workflow className="w-3 h-3 text-pink-500" />
                  Engineering Execution Lifecycle
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Our 6-Stage Cyber Security{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    &amp; Pentesting Process
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
                  A battle-tested 6-phase security remediation lifecycle designed to neutralize threats before production deployment.
                </p>
              </div>
            </ScrollReveal>

            {/* 6 Stage Compact Studio Stepper Deck */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {defensePipelineNodes.map((phase, pIdx) => {
                const PhaseIcon = phase.icon || ShieldCheck;
                return (
                  <ScrollReveal key={pIdx} direction="up" delay={pIdx * 60} className="h-full">
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

        {/* SECTION 3: HIRE CERTIFIED ETHICAL HACKERS & 8 SECURITY PILLARS */}
        <section className="py-12 sm:py-16 bg-white relative border-t border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-10 relative z-10">

            {/* Section Header */}
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  The Digital Raiz Advantage
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Why Global Enterprises Trust Digital Raiz for{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Cybersecurity &amp; VAPT
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
                  Deploy pre-vetted OSCP and CEH certified ethical hackers ready to audit and secure your infrastructure within 48 hours.
                </p>
              </div>
            </ScrollReveal>

            {/* Main 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

              {/* Left Column (5 cols) — Ethical Hacking Squad Pitch */}
              <ScrollReveal direction="right" className="lg:col-span-5 h-full">
                <div className="h-full bg-white border border-slate-200/90 hover:border-pink-300 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 space-y-6 flex flex-col justify-between relative overflow-hidden group">
                  {/* Top Accent Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600" />

                  <div className="space-y-4 text-left relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-700">
                      <Users className="w-3.5 h-3.5 text-pink-600" />
                      Dedicated Ethical Hackers from Hyderabad
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      Hire Certified Ethical Hackers &amp; <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">DevSecOps Engineers</span>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      Augment your internal security squad with certified OSCP, CEH, and CISSP ethical hackers ready to conduct deep VAPT pentesting and zero-trust hardening.
                    </p>

                    {/* Feature Checkpoints */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      {[
                        "48-Hour Instant Squad Onboarding",
                        "100% Confidentiality & Strict NDA Protection",
                        "Direct Integration into Slack & Jira Workflows"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-slate-100 relative z-10">
                    <button
                      onClick={() => openContactModal("Cybersecurity Services", "Hire Dedicated Ethical Hackers")}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[11px] font-black uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-0 flex items-center justify-center gap-2"
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
                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-pink-600" />
                      <span>8 Core Cybersecurity Assurance Pillars</span>
                    </h3>
                    <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full">
                      Zero-Trust SLA
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "100% Zero-Trust Audit", desc: "Identity & secrets management hardening", icon: Lock },
                      { title: "48-Hr Squad Match", desc: "Instant pre-vetted OSCP hacker onboarding", icon: Users },
                      { title: "OWASP Top 10 Remediation", desc: "Complete vulnerability patching SLA", icon: Terminal },
                      { title: "CI/CD DevSecOps", desc: "Automated SAST & container security gates", icon: Layers },
                      { title: "24/7 SIEM & SOC Alerts", desc: "Real-time log telemetry & anomaly alerts", icon: Activity },
                      { title: "ISO 27001 & SOC2 Audit", desc: "Compliance automation & PII masking", icon: FileCheck },
                      { title: "API Vulnerability Scans", desc: "REST & GraphQL pentesting proofs", icon: Zap },
                      { title: "15-Min Incident SLA", desc: "Rapid SOC emergency response team", icon: ShieldAlert }
                    ].map((item, i) => {
                      const PillarIcon = item.icon;
                      return (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 group relative overflow-hidden text-left"
                        >
                          {/* Top Accent Line */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-all duration-300">
                            <PillarIcon className="w-5 h-5" />
                          </div>
                          <div className="space-y-1 min-w-0 flex-1">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-pink-600 transition-colors leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-[11px] font-medium text-slate-500 group-hover:text-slate-700 transition-colors leading-tight">
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
        {/* CALL TO ACTION BANNER */}
        <ServiceCtaBanner
          badge="Cybersecurity & Threat Defense"
          title="Ready to Secure Your Enterprise Infrastructure with Digital Raiz?"
          description="Zero-Trust Architecture • VAPT Pentesting • 24/7 SIEM SOC • ISO 27001 Compliance in Hyderabad"
        />

      </main>



      <Footer />
    </div>
  );
}
