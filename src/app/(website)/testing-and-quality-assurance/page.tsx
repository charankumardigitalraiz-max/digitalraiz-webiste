"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { openContactModal } from "@/components/ContactModal";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Bug,
  Zap,
  Cpu,
  Terminal,
  Activity,
  Code2,
  Workflow,
  Layers,
  Lock,
  Server,
  Smartphone,
  Sparkles,
  Search,
  Gauge,
  FileCode2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldAlert,
  Wrench,
  Users,
  Check,
  Flame,
  Globe
} from "lucide-react";

export default function TestingAndQAPage() {
  const [activeStep, setActiveStep] = useState(0);
  const techScrollRef = useRef<HTMLDivElement>(null);
  const [techPaused, setTechPaused] = useState(false);

  // 6-step QA Pipeline Process
  const qaProcessSteps = [
    {
      step: "01",
      name: "Requirement Analysis & Test Strategy",
      desc: "We analyze functional spec documents, define edge cases, risk profiles, and architect a comprehensive Test Plan tailored to your release schedule.",
      icon: <Workflow className="w-5 h-5 text-pink-500" />,
      duration: "1 Week",
      qualityGate: "100% Requirement Testability Sign-off",
      tools: ["Jira", "Confluence", "TestRail", "Miro"],
      deliverables: [
        "Software Test Plan & Strategy Document",
        "Traceability Matrix (RTM)",
        "Risk-Based Testing Assessment",
        "Environment & Test Data Setup"
      ]
    },
    {
      step: "02",
      name: "Test Case Design & Automation Setup",
      desc: "Writing modular, reusable test scripts using Page Object Model (POM) and BDD frameworks (Cypress, Playwright, Selenium, Appium).",
      icon: <Code2 className="w-5 h-5 text-violet-500" />,
      duration: "1–2 Weeks",
      qualityGate: "Peer Code Review & Framework Audit",
      tools: ["Cypress", "Playwright", "Selenium", "Appium", "Cucumber"],
      deliverables: [
        "Automated Test Script Repository",
        "BDD Feature Files & Step Definitions",
        "Page Object Model Class Libraries",
        "Cross-Browser/Device Test Matrix"
      ]
    },
    {
      step: "03",
      name: "Functional & Regression Execution",
      desc: "Executing automated regression suites parallelly in CI/CD pipelines alongside thorough exploratory manual QA for edge-case catching.",
      icon: <CheckCircle2 className="w-5 h-5 text-indigo-500" />,
      duration: "Continuous",
      qualityGate: "99.9% Pass Rate & Zero Blocker Bugs",
      tools: ["GitHub Actions", "Jenkins", "Allure Reports", "BrowserStack"],
      deliverables: [
        "Real-Time Automated Execution Dashboard",
        "Detailed Defect Logs with Video Repros",
        "Cross-Platform Compatibility Reports",
        "Regression Pass/Fail Certificates"
      ]
    },
    {
      step: "04",
      name: "Performance & Stress Tuning",
      desc: "Simulating peak concurrency traffic spikes, stress loads, and endurance profiling to eliminate memory leaks and API latency bottlenecks.",
      icon: <Gauge className="w-5 h-5 text-emerald-500" />,
      duration: "1 Week",
      qualityGate: "Sub-0.3s Latency & 50K+ RPS Stability",
      tools: ["JMeter", "k6", "Locust", "Grafana", "New Relic"],
      deliverables: [
        "Load & Stress Performance Audit Report",
        "API Response Latency Distribution Curves",
        "Database Query Bottleneck Diagnostics",
        "Infrastructure Concurrency Threshold Map"
      ]
    },
    {
      step: "05",
      name: "Security Audit & Vulnerability Scanning",
      desc: "Conducting OWASP Top 10 vulnerability scans, penetration testing, static/dynamic code analysis, and OAuth API security audits.",
      icon: <Lock className="w-5 h-5 text-amber-500" />,
      duration: "1 Week",
      qualityGate: "Zero Critical/High Vulnerabilities",
      tools: ["OWASP ZAP", "Burp Suite", "SonarQube", "Sentry"],
      deliverables: [
        "Penetration Testing & Vulnerability Log",
        "OWASP Compliance Risk Assessment",
        "Data Encryption & Token Audit Report",
        "Security Remediation Roadmap"
      ]
    },
    {
      step: "06",
      name: "Release Sign-off & Continuous SLA Support",
      desc: "Issuing formal Quality Sign-off certificates, configuring real-time error tracking monitoring, and supporting continuous production releases.",
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
      duration: "Ongoing SLA",
      qualityGate: "Zero Production Blockers & 24/7 SLA",
      tools: ["Datadog", "Sentry", "PagerDuty", "Slack Alerts"],
      deliverables: [
        "Executive Quality & Release Certificate",
        "Production Smoke Test Suites",
        "Real-Time Crash & Error Alerting Hooks",
        "Quarterly QA Optimization Audits"
      ]
    }
  ];

  // Core QA Service Offerings
  const qaServices = [
    {
      title: "Test Automation (CI/CD)",
      desc: "Build resilient Cypress, Playwright, and Selenium automated test suites integrated directly into your GitHub Actions or Jenkins CI/CD pipeline for instant PR verification.",
      icon: Code2,
      badge: "Automated Suite",
      gradient: "from-pink-500 to-rose-600",
      features: ["Parallel CI/CD Runs", "Cypress & Playwright", "Instant PR Feedback"]
    },
    {
      title: "Manual & Exploratory QA",
      desc: "Meticulous human-centric UX testing, exploratory edge-case hunting, and real-world user flow validation to ensure flawless intuitive software behavior.",
      icon: Bug,
      badge: "UX & Edge Cases",
      gradient: "from-violet-600 to-purple-600",
      features: ["Exploratory Testing", "Edge Case Discovery", "Real User Emulation"]
    },
    {
      title: "Performance & Load Testing",
      desc: "Simulate 50,000+ concurrent user traffic spikes with JMeter and k6 to identify server bottlenecks, database deadlocks, and latency spikes before launch.",
      icon: Gauge,
      badge: "Stress & Scale",
      gradient: "from-indigo-500 to-blue-600",
      features: ["High Concurrency", "Sub-0.3s API Latency", "JMeter & k6 Probing"]
    },
    {
      title: "Security & Pen Testing",
      desc: "Protect your digital assets against OWASP Top 10 vulnerabilities, SQL injections, XSS attacks, and OAuth authentication leaks with deep penetration audits.",
      icon: Lock,
      badge: "OWASP Top 10",
      gradient: "from-amber-500 to-orange-600",
      features: ["OWASP Penetration", "SAST / DAST Scans", "Zero-Trust Audits"]
    },
    {
      title: "API & Microservices Testing",
      desc: "Validate REST and GraphQL API payloads, contract schemas, authorization tokens, and third-party integrations with sub-second automated assertions.",
      icon: Server,
      badge: "API Contracts",
      gradient: "from-emerald-500 to-teal-600",
      features: ["Postman & REST Assured", "GraphQL Validation", "Mock Server Suite"]
    },
    {
      title: "Mobile App Hardware QA",
      desc: "Run comprehensive test matrix across 50+ real iOS and Android physical devices for battery drain, memory leaks, and frame rate responsiveness.",
      icon: Smartphone,
      badge: "iOS & Android",
      gradient: "from-rose-500 to-pink-600",
      features: ["50+ Physical Devices", "Battery & Memory Audit", "Appium Automation"]
    }
  ];

  // Why Choose Points
  const whyChoosePoints = [
    "100% Requirement & Code Path Coverage",
    "48-Hour Onboarding for Dedicated QA Squads",
    "Zero-Defect Production Release Guarantee",
    "Continuous CI/CD Pipeline Integration",
    "Real Device Testing Hardware Lab",
    "Full OWASP Top 10 Security Compliance",
    "Transparent Jira & Allure Dashboard Reports",
    "Post-Launch 24/7 SLA Monitoring Support"
  ];

  // Ticker Auto-scroll
  useEffect(() => {
    const container = techScrollRef.current;
    if (!container || techPaused) return;
    let animationId: number;
    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += 0.7;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [techPaused]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white py-10 sm:py-10">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

              {/* LEFT — Typography & Intro Copy */}
              <ScrollReveal direction="left" className="flex-grow space-y-6 text-center lg:text-left max-w-2xl">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  Software QA & Testing Services in Hyderabad
                </div> */}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Software Testing &{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Quality Assurance (QA)
                  </span>{" "}
                  Services
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
                  At Digital Raiz, we ensure your web applications, mobile apps, and enterprise software run flawlessly with zero critical defects. As a leading software testing and quality assurance company in Hyderabad, we combine automated regression suites, security vulnerability audits, and performance load profiling to deliver bulletproof digital experiences.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
                  Whether you are launching a new product or scaling enterprise infrastructure, our QA engineers integrate directly into your release workflow—eliminating bugs, safeguarding user data, and accelerating time-to-market.
                </p>

                {/* Stat Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
                  {[
                    { val: "99.9%", label: "Defect-Free SLA", bg: "bg-emerald-50 text-emerald-700 border-emerald-200/60", dot: "bg-emerald-500" },
                    { val: "500+", label: "Automated Suites", bg: "bg-pink-50 text-pink-700 border-pink-200/60", dot: "bg-pink-500 animate-pulse" },
                    { val: "OWASP", label: "Zero-Trust Security", bg: "bg-violet-50 text-violet-700 border-violet-200/60", dot: "bg-violet-500" },
                    { val: "< 0.3s", label: "Latency Benchmark", bg: "bg-indigo-50 text-indigo-700 border-indigo-200/60", dot: "bg-indigo-500" },
                  ].map((s) => (
                    <div key={s.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold ${s.bg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                      <span>{s.val}</span>
                      <span className="text-[9px] font-mono text-slate-400 uppercase">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                  <button
                    onClick={() => openContactModal("Testing & Quality Assurance")}
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer border-0"
                  >
                    <span>Request Free QA Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById("qa-services-grid");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>Explore QA Matrix</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </ScrollReveal>

              {/* RIGHT — Generated QA Automation & Testing Studio Showcase */}
              <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[500px] shrink-0 flex justify-center">
                <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden group  bg-white p-2">
                  <div className="relative w-full overflow-hidden rounded-2xl bg-slate-50">
                    <img
                      src="/testing-and-quality-assurance/digital-raiz-qa-studio-square-canvas.png"
                      alt="Software Testing & Quality Assurance Services Showcase"
                      className="w-full h-auto object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating badge — top-left */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-mono text-slate-400 uppercase">Quality SLA</div>
                      <div className="text-xs font-extrabold text-emerald-600">99.9% Defect-Free</div>
                    </div>
                  </div>

                  {/* Floating badge — bottom-right */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-pink-50 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-pink-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-mono text-slate-400 uppercase">Automated QA</div>
                      <div className="text-xs font-extrabold text-pink-600">500+ Test Suites</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* Tech stack ticker strip */}
          <div className="py-3 w-full overflow-hidden mt-8">
            <div
              ref={techScrollRef}
              onMouseEnter={() => setTechPaused(true)}
              onMouseLeave={() => setTechPaused(false)}
              className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap items-center gap-0 w-full"
            >
              {[
                { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" },
                { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
                { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
                { name: "Appium", icon: "https://cdn.simpleicons.org/appium/663399" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
                { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg" },
                { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
                { name: "PyTest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg" },
                { name: "Cucumber", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
                { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
                { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
                { name: "Sentry", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg" },
              ].concat([
                { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" },
                { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
                { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
                { name: "Appium", icon: "https://cdn.simpleicons.org/appium/663399" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
                { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg" },
                { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
                { name: "PyTest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg" },
                { name: "Cucumber", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
                { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
                { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
                { name: "Sentry", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg" },
              ]).map((t, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-1.5 border-r border-slate-100 shrink-0">
                  <img
                    src={t.icon}
                    alt={t.name}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">{t.name}</span>
                </div>
              ))}
            </div>
          </div>



        </section>

        {/* SECTION 1: CORE QA SERVICES MATRIX */}
        <section id="qa-services-grid" className="py-10 bg-white relative ">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  Comprehensive Coverage
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Software Testing &amp; QA Services{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Built for High-Growth Platforms
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
                  From early-stage prototype audits to continuous enterprise regression pipelines, our testing services cover every layer of your application stack.
                </p>
              </div>
            </ScrollReveal>

            {/* 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qaServices.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <ScrollReveal key={idx} delay={(idx % 3) * 60} direction="up" className="h-full">
                    <div
                      onClick={() => openContactModal(`QA: ${svc.title}`)}
                      className="group relative bg-white border border-slate-200/80 hover:border-pink-300/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 h-full flex flex-col justify-between space-y-5 cursor-pointer overflow-hidden"
                    >
                      {/* Top Accent Line on Hover */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      <div className="space-y-4 relative z-10">
                        {/* Header: Icon & Badge */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-pink-50/80 border border-pink-100/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0">
                            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <span className="text-[9px] font-mono font-bold text-pink-600 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {svc.badge}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2">
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                            {svc.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                            {svc.desc}
                          </p>
                        </div>

                        {/* Key Highlights Vertical Checklist */}
                        <div className="pt-3 border-t border-slate-100/90 space-y-2">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                            Key Highlights
                          </span>
                          <ul className="space-y-2">
                            {svc.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                                <div className="w-4 h-4 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-2xs">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Footer Action CTA */}
                      {/* <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-pink-600 transition-colors">
                          Inspect QA Capability
                        </span>
                        <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 group-hover:bg-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div> */}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2: 6-STEP QA PIPELINE PROCESS — DUAL-CARD SIDE-BY-SIDE CENTER TIMELINE */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-12 relative z-10">

            {/* Section Header */}
            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600 shadow-2xs">
                  <Workflow className="w-3.5 h-3.5 text-pink-500" />
                  Engineering Pipeline
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Our 6-Step Software{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    QA &amp; Testing Pipeline
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
                  End-to-end quality assurance workflow — built for speed, accuracy, and zero-defect deployments.
                </p>
              </div>
            </ScrollReveal>

            {/* Vertical Timeline Track with Dual Side-by-Side Cards Per Step */}
            <div className="relative pt-4 pb-4 space-y-12 lg:space-y-16">
              {/* Continuous Vertical Center Line (Desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-pink-500 via-violet-500 to-indigo-600 z-0 opacity-80" />

              {qaProcessSteps.map((step, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 60}>
                  <div className="relative group">

                    {/* STEP CENTER BADGE (On Desktop Center Line) */}
                    <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-violet-600 text-white font-mono font-black text-xs items-center justify-center shadow-lg shadow-pink-500/25 ring-4 ring-white z-20 shrink-0 group-hover:scale-110 group-hover:ring-pink-300 transition-all duration-300">
                      {step.step}
                    </div>

                    {/* DUAL CARDS CONTAINER (2 columns on lg, 1 column on mobile) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-stretch relative z-10">

                      {/* LEFT CARD — Phase Overview & SLA Gate */}
                      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] group-hover:bg-gradient-to-br group-hover:from-pink-50/70 group-hover:to-purple-50/70 group-hover:border-pink-300 group-hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden">
                        {/* Accent Fill Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                        <div className="space-y-4">
                          <div className="flex items-center gap-3.5 border-b border-slate-100 group-hover:border-pink-200/60 pb-3.5 transition-colors">
                            <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-pink-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                              {step.icon}
                            </div>
                            <div className="space-y-0.5">
                              <div className="inline-flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-600">
                                <span>Phase 0{idx + 1} of 06</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                              </div>
                              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                                {step.name}
                              </h3>
                            </div>
                          </div>

                          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                            {step.desc}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100 group-hover:border-pink-200/60 transition-colors text-[10px] font-mono">
                          <div className="p-2.5 rounded-xl bg-slate-50 group-hover:bg-white/80 border border-slate-200/70 space-y-0.5">
                            <span className="text-slate-400 font-bold uppercase text-[8.5px]">Duration</span>
                            <div className="font-extrabold text-[#1e1b4b]">⏱ {step.duration}</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-emerald-50/80 group-hover:bg-white/80 border border-emerald-200/70 space-y-0.5">
                            <span className="text-emerald-600 font-bold uppercase text-[8.5px]">Quality SLA Gate</span>
                            <div className="font-extrabold text-emerald-700 truncate">{step.qualityGate}</div>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT CARD — Phase Deliverables & Toolchain */}
                      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] group-hover:bg-gradient-to-br group-hover:from-purple-50/70 group-hover:to-pink-50/70 group-hover:border-pink-300 group-hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden">
                        {/* Accent Fill Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                        <div className="space-y-3.5">
                          <div className="flex items-center justify-between border-b border-slate-100 group-hover:border-pink-200/60 pb-3 transition-colors">
                            <span className="text-[9.5px] font-mono font-bold uppercase tracking-widest text-pink-600">Phase Deliverables</span>
                            <span className="text-[8px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full uppercase">Verified</span>
                          </div>

                          <div className="space-y-2.5 text-xs font-semibold text-slate-700">
                            {step.deliverables.map((item, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2.5">
                                <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                  <CheckCircle2 className="w-3 h-3" />
                                </div>
                                <span className="leading-snug text-slate-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-100 group-hover:border-pink-200/60 transition-colors space-y-2">
                          <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Toolchain</span>
                          <div className="flex flex-wrap gap-1.5">
                            {step.tools.map((tool, tIdx) => (
                              <span key={tIdx} className="text-[9.5px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-50 group-hover:bg-white text-slate-700 border border-slate-200/80 shadow-2xs">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: PURE WHITE SECTION WITH LIGHT GRADIENT CARD CONTAINER */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
            <ScrollReveal direction="up">
              <div className="bg-gradient-to-br from-pink-50/80 via-rose-50/40 to-purple-50/70 rounded-3xl p-7 sm:p-9 border border-pink-100/90 shadow-lg shadow-pink-500/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                  {/* Left Column (5 cols) — Executive Talent Pitch */}
                  <div className="lg:col-span-5 space-y-4 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-pink-200 text-[9.5px] font-mono font-bold uppercase tracking-wider text-pink-700 shadow-2xs">
                      <Users className="w-3.5 h-3.5 text-pink-600" />
                      Dedicated QA Engineers from Hyderabad
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      Hire Senior QA Engineers &amp; <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">Automation Leads</span>
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      Deploy pre-vetted test automation engineers, performance profilers, and OWASP security auditors. Seamlessly integrate certified QA leads directly into your CI/CD engineering pipelines.
                    </p>

                    <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-slate-700">
                      <div className="flex items-center gap-1.5 bg-white border border-pink-100/80 rounded-xl px-3 py-2 shadow-2xs">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-bold">48-Hr Squad Match</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white border border-pink-100/80 rounded-xl px-3 py-2 shadow-2xs">
                        <div className="w-2 h-2 rounded-full bg-pink-500" />
                        <span className="font-bold">100% IP Security</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => openContactModal("Hire QA Engineers")}
                        className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-[10.5px] font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
                      >
                        <span>Deploy Dedicated QA Engineers</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column (7 cols) — Redesigned 8 QA Assurance Pillars Grid */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between border-b border-pink-200/60 pb-3.5">
                      <h3 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-pink-600" />
                        <span>Why Global Enterprises Trust Digital Raiz QA</span>
                      </h3>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-1 rounded-full shadow-xs">
                        8 QA Pillars
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: "100% Path Coverage", desc: "Comprehensive unit, API & E2E path validation", icon: ShieldCheck },
                        { title: "48-Hr Squad Match", desc: "Instant pre-vetted engineer onboarding & deployment", icon: Users },
                        { title: "Zero-Defect Release", desc: "Strict SLA gates with 99.9% crash-free guarantee", icon: CheckCircle2 },
                        { title: "CI/CD Integration", desc: "Native GitHub Actions & Jenkins automation triggers", icon: Workflow },
                        { title: "50+ Real Device Lab", desc: "Multi-device iOS & Android hardware testing", icon: Smartphone },
                        { title: "OWASP Security", desc: "Pen-testing & static/dynamic vulnerability scans", icon: Lock },
                        { title: "Real-time Reports", desc: "Live Jira & Allure execution log dashboards", icon: Activity },
                        { title: "24/7 SLA Monitoring", desc: "Production error tracking & continuous hotfixes", icon: Zap }
                      ].map((item, i) => {
                        const PillarIcon = item.icon;
                        return (
                          <div
                            key={i}
                            className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3.5 group relative overflow-hidden"
                          >
                            {/* Top Accent Gradient Line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-all duration-300">
                              <PillarIcon className="w-4 h-4" />
                            </div>
                            <div className="space-y-1 min-w-0 flex-1">
                              <h4 className="text-xs font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors leading-tight">
                                {item.title}
                              </h4>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500/70 group-hover:bg-pink-600 group-hover:scale-125 shrink-0 transition-all" />
                                <p className="text-[10.5px] font-medium text-slate-500 group-hover:text-slate-700 transition-colors leading-tight">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
