"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Cpu,
  ShieldCheck,
  Sparkles,
  Star,
  ExternalLink,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Code2,
  Zap,
  Users,
  Layout,
  Server,
  Workflow,
  Wrench
} from "lucide-react";
import PlatformExplorer from "@/components/PlatformExplorer";
import ScrollReveal from "@/components/ScrollReveal";

export default function MobileApplicationPage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const startAutoScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsPaused(true);
    const viewport = e.currentTarget.querySelector('.mockup-viewport') as HTMLDivElement;
    if (!viewport) return;

    const animId = viewport.getAttribute('data-anim-id');
    if (animId) cancelAnimationFrame(parseInt(animId));

    viewport.setAttribute('data-user-scrolled', 'false');

    const startTime = performance.now();
    const startScroll = viewport.scrollTop;
    const targetScroll = viewport.scrollHeight - viewport.clientHeight;
    const duration = 12000;

    const scrollStep = (timestamp: number) => {
      const isUserScrolled = viewport.getAttribute('data-user-scrolled') === 'true';
      if (isUserScrolled) return;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      viewport.scrollTop = startScroll + (targetScroll - startScroll) * ease;

      if (progress < 1) {
        const nextId = requestAnimationFrame(scrollStep);
        viewport.setAttribute('data-anim-id', nextId.toString());
      }
    };

    const firstId = requestAnimationFrame(scrollStep);
    viewport.setAttribute('data-anim-id', firstId.toString());
  };

  const stopAutoScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsPaused(false);
    const viewport = e.currentTarget.querySelector('.mockup-viewport') as HTMLDivElement;
    if (!viewport) return;

    const animId = viewport.getAttribute('data-anim-id');
    if (animId) cancelAnimationFrame(parseInt(animId));

    viewport.setAttribute('data-user-scrolled', 'true');
    viewport.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUserScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.currentTarget.setAttribute('data-user-scrolled', 'true');
  };

  const stats = [
    { value: "500K+", label: "App Downloads", desc: "Across iOS and Play Store", icon: <Award className="w-5 h-5 text-pink-500" /> },
    { value: "4.8★", label: "Average Rating", desc: "Highly rated by users", icon: <Star className="w-5 h-5 text-indigo-500" /> },
    { value: "5M+", label: "Monthly Sessions", desc: "Seamless backend scale", icon: <Cpu className="w-5 h-5 text-pink-500" /> },
    { value: "99.9%", label: "Crash-Free Sessions", desc: "Robust bug monitoring", icon: <ShieldCheck className="w-5 h-5 text-indigo-500" /> },
  ];

  // 7-step process from PDF document with detailed phase deliverables & tools
  const pdfProcessSteps = [
    {
      step: "01",
      name: "Product Planning & Technical Consultation",
      desc: "We map business objectives, define functional architecture, user personas, and select the optimal tech stack tailored to your target audience.",
      icon: <Workflow className="w-5 h-5 text-pink-500" />,
      duration: "1–2 Weeks",
      qualityGate: "Technical Feasibility & ROI Signoff",
      tools: ["Miro", "Jira", "Confluence", "Figma"],
      deliverables: [
        "FRD & Functional Specs Document",
        "User Persona & Journey Maps",
        "Tech Stack & Architecture Blueprint",
        "Sprint Execution Roadmap"
      ]
    },
    {
      step: "02",
      name: "UI/UX Design & Prototyping",
      desc: "Designing intuitive, user-centric screen flows, wireframes, and pixel-perfect interactive prototypes for frictionless mobile interaction.",
      icon: <Layout className="w-5 h-5 text-violet-500" />,
      duration: "2–3 Weeks",
      qualityGate: "Usability & Design System Audit",
      tools: ["Figma", "Adobe XD", "Framer", "Lottie Animations"],
      deliverables: [
        "UX Wireframes & User Flow Diagrams",
        "Pixel-Perfect Mobile UI Screen Kit",
        "Interactive Clickable Prototype",
        "Design Tokens & Component Library"
      ]
    },
    {
      step: "03",
      name: "Mobile Application Development",
      desc: "Writing clean, modular code using native Swift/Kotlin or cross-platform Flutter/React Native frameworks optimized for high frame rates.",
      icon: <Code2 className="w-5 h-5 text-indigo-500" />,
      duration: "4–8 Weeks",
      qualityGate: "Clean Architecture & Peer Code Review",
      tools: ["Swift / Kotlin", "Flutter / React Native", "Xcode", "Android Studio"],
      deliverables: [
        "Modular Source Code Repository",
        "Native & Cross-Platform Modules",
        "Offline Storage & Data Caching Engine",
        "Responsive Screen Layout Systems"
      ]
    },
    {
      step: "04",
      name: "API & Backend Integration",
      desc: "Connecting robust cloud databases, microservices, REST/GraphQL APIs, OAuth authentication, and third-party payment gateways.",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      duration: "2–3 Weeks",
      qualityGate: "Sub-0.3s API Latency & Security Audit",
      tools: ["Node.js / Python", "PostgreSQL / Firebase", "Postman", "AWS Lambda"],
      deliverables: [
        "RESTful & GraphQL API Connectors",
        "OAuth 2.0 / JWT Security Layer",
        "Payment Gateway Integration (Stripe/Razorpay)",
        "Real-Time Push Notification System"
      ]
    },
    {
      step: "05",
      name: "Testing & Quality Assurance",
      desc: "Executing automated unit tests, security vulnerability scans, cross-device hardware compatibility checks, and battery performance tuning.",
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      duration: "2 Weeks",
      qualityGate: "Zero Critical Bugs & 99.9% Crash Free",
      tools: ["Appium", "Jest", "BrowserStack", "Firebase Crashlytics"],
      deliverables: [
        "Automated UI & Integration Test Suite",
        "Cross-Device Compatibility Matrix",
        "Security & Vulnerability Penetration Report",
        "Battery & Frame Rate Tuning Certificate"
      ]
    },
    {
      step: "06",
      name: "App Store & Play Store Deployment",
      desc: "Managing store publishing guidelines, cryptographic app signing, App Store Optimization (ASO), and smooth release approvals.",
      icon: <Zap className="w-5 h-5 text-rose-500" />,
      duration: "1 Week",
      qualityGate: "Apple & Google Policy Compliance",
      tools: ["App Store Connect", "Google Play Console", "Fastlane", "TestFlight"],
      deliverables: [
        "Production iOS & Android Store Submissions",
        "Cryptographic Code Signing Certificates",
        "ASO Metadata & Screenshot Assets",
        "Live Production Release Monitoring"
      ]
    },
    {
      step: "07",
      name: "Maintenance & Ongoing SLA Support",
      desc: "Providing 24/7 server monitoring, regular iOS/Android OS compatibility updates, security patches, feature iterations, and SLA support.",
      icon: <Wrench className="w-5 h-5 text-sky-500" />,
      duration: "Continuous SLA",
      qualityGate: "99.9% Server Uptime & Instant Escalation SLA",
      tools: ["Datadog", "Sentry", "New Relic", "GitHub Actions"],
      deliverables: [
        "Annual iOS & Android OS Upgrades",
        "24/7 Server Infrastructure Monitoring",
        "Bug Patch & Hotfix Deployment Releases",
        "Quarterly Feature Roadmap Enhancements"
      ]
    }
  ];

  // Industries / Use Cases from PDF with custom icons & styling
  const industryUseCases = [
    {
      title: "Customer Engagement",
      desc: "Interactive loyalty programs, reward engines, and direct customer engagement mobile experiences.",
      tag: "Engagement",
      icon: <Smartphone className="w-5 h-5 text-pink-500" />,
      color: "from-pink-50 to-pink-100/30",
      border: "border-pink-200/60 text-pink-700"
    },
    {
      title: "E-Commerce & Retail",
      desc: "Mobile shopping portals featuring secure payment checkouts, catalog filters, and real-time order tracking.",
      tag: "E-Commerce",
      icon: <Layers className="w-5 h-5 text-violet-500" />,
      color: "from-violet-50 to-violet-100/30",
      border: "border-violet-200/60 text-violet-700"
    },
    {
      title: "Healthcare & Telemedicine",
      desc: "Doctor consultations, clinical reports comparison engines, and instant appointment booking interfaces.",
      tag: "HealthTech",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-50 to-emerald-100/30",
      border: "border-emerald-200/60 text-emerald-700"
    },
    {
      title: "Education & E-Learning",
      desc: "Virtual classrooms, digital course delivery, interactive testing modules, and offline study resource access.",
      tag: "EdTech",
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-50 to-indigo-100/30",
      border: "border-indigo-200/60 text-indigo-700"
    },
    {
      title: "Logistics & Delivery",
      desc: "Real-time GPS vehicle tracking, automated driver dispatch logging, and dynamic route optimization engines.",
      tag: "Logistics",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      color: "from-amber-50 to-amber-100/30",
      border: "border-amber-200/60 text-amber-700"
    },
    {
      title: "Booking & Marketplaces",
      desc: "On-demand service booking, multi-vendor marketplace management, and scheduling workflow portals.",
      tag: "On-Demand",
      icon: <Workflow className="w-5 h-5 text-rose-500" />,
      color: "from-rose-50 to-rose-100/30",
      border: "border-rose-200/60 text-rose-700"
    }
  ];

  // PDF Why Choose Highlights
  const whyChoosePoints = [
    "User-centric UI/UX design tailored for intuitive user journeys",
    "Clean, modular and scalable mobile application architecture",
    "Secure backend systems and microservice API integrations",
    "Performance-focused development with sub-second response times",
    "Flexible and future-ready technology stack selections",
    "Structured automated testing and rigorous quality assurance",
    "Transparent communication and sprint milestone tracking",
    "Post-launch maintenance, OS upgrades, and continuous support"
  ];

  const portfolioApps = [
    {
      name: "Solo Hearts",
      tag: "Social Connection",
      desc: "Premium dating and matchmaking application configured for location checks, instant chats, and profiles.",
      features: ["Premium matching algorithm", "Location verified check-ins", "Secure chat modules"],
      playStoreUrl: "#",
      img: "/portfolio/soloohearts.webp"
    },
    {
      name: "Medicompares",
      tag: "Medical & Health",
      desc: "Comprehensive medical services comparison platform designed to compare clinical tests, reports, and prices.",
      features: ["Medical comparison engine", "Clinical report details", "Instant pricing updates"],
      playStoreUrl: "#",
      img: "/portfolio/medicompares.jpg"
    },
    {
      name: "Shri Manik Prabhu Samsthan",
      tag: "Devotional & Community",
      desc: "Official mobile application for managing organization schedules, calendar updates, and daily resources.",
      features: ["Custom calendar systems", "Push alerts & notifications", "Offline asset loading"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.maniksamstahnapp&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/d72a821a275279ea42bc5c58af0f6cc3.png"
    },
    {
      name: "Waypartner",
      tag: "Logistics & Transport",
      desc: "High-performance logistics coordination app designed for driver tracking, dispatch logging, and route reports.",
      features: ["Real-time GPS tracking", "In-app routing & map updates", "Automated trip log files"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.waypartner.waypartner&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/3d5cfa303ab218435bcd47544379e4c8.png"
    },
    {
      name: "JBFMS India",
      tag: "Enterprise Workflow",
      desc: "Corporate resource dashboard system configured for tracking field team tasks, attendance, and instant audits.",
      features: ["Field staff check-ins", "Offline report syncing", "Live dashboard syncs"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.jbfms.jbfmsindia&hl=en",
      img: "/portfolio/jgfms.webp"
    },
    {
      name: "Eaglemart",
      tag: "E-Commerce",
      desc: "Full-scale consumer shopping application featuring secure payment checkout gateways, catalogs, and tracking.",
      features: ["Instant secure checkout", "Multi-payment support", "Real-time order tracking"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.eaglemartuser&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/c93157eeeedb156a1ef3fd23227f742d.png"
    },
    {
      name: "Helomate",
      tag: "Social Connection",
      desc: "Interactive social networking client enabling location matches, real-time chats, and media uploads.",
      features: ["Real-time socket chats", "Location matching engine", "Media sharing streams"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.helomate.meetpeoplevirtual&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/dd0bff5ed7e3698d06753f38a8c985c2.png"
    },
    {
      name: "Gocut Beauty App",
      tag: "On-Demand Services",
      desc: "Booking and service scheduling interface with integrated maps, local search filters, and chats.",
      features: ["Appointment scheduling", "Local provider searches", "In-app customer chats"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.gouser&hl=en",
      img: "/portfolio/gocut-beauty.webp"
    },
    {
      name: "Actin",
      tag: "Activity Tracker",
      desc: "Fitness and workflow check-in client logging user progress, session counts, and targets dynamically.",
      features: ["User metrics tracking", "Goal setting widgets", "Detailed historical logs"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.actin.user&hl=en",
      img: "https://digitalraiz.com/uploads/portfolio/2694ae7bddec4a4d521ea9e9870638db.png"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [portfolioApps.length, isPaused]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />
      <main className="flex-grow">

        {/* HERO SECTION — PDF Aligned Content & Animated Light Layout */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">

            {/* Hero Main Grid */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center py-10 lg:py-14">

              {/* LEFT — H1 & Intro Copy from PDF */}
              <ScrollReveal direction="left" className="flex-grow space-y-7 text-center lg:text-left max-w-[560px]">
                <h1 className="space-y-1">
                  <span className="block text-[10px] font-semibold text-slate-400 tracking-[0.3em] uppercase">Engineering Scalable Mobile Products</span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.4rem] font-black uppercase tracking-tight text-[#1e1b4b] leading-[0.95]">
                    Mobile App
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.4rem] font-black uppercase tracking-tight leading-[0.95] bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    Development
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.4rem] font-black uppercase tracking-tight text-slate-200 leading-[0.95]">
                    In Hyderabad
                  </span>
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
                  At Digital Raiz, we build mobile applications that combine thoughtful design, reliable technology, and real business purpose. As a leading mobile app development company in Hyderabad, we work with startups, growing businesses, and established organizations to turn ideas into intuitive, scalable, and engaging mobile experiences.
                </p>

                {/* Inline Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 transition-transform hover:scale-105">
                      {s.icon}
                      <span className="text-[10px] font-black text-[#1e1b4b]">{s.value}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-sm"
                  >
                    <span>Hire Mobile App Developers</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                  <button
                    onClick={() => {
                      const element = document.getElementById("mobile-services");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-transparent hover:bg-slate-50 border border-slate-200 hover:border-pink-300 text-slate-600 hover:text-pink-600 text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group cursor-pointer"
                  >
                    <span>Explore Services</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </ScrollReveal>

              {/* RIGHT — Clean Realistic Smartphone Showcase */}
              <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[480px] shrink-0 flex justify-center items-center py-6">

                {/* Smartphone Device Frame */}
                <div className="relative w-[250px] sm:w-[270px] h-[500px] sm:h-[530px] rounded-[38px] border-[6px] border-slate-900 bg-slate-950 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-pink-500/10 group">

                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-900 rounded-full z-30 flex items-center justify-end px-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  </div>

                  {/* App Screen Viewport */}
                  <div className="absolute inset-0 overflow-y-auto no-scrollbar z-10 bg-slate-950 pt-7 pb-4">
                    <img
                      src="/portfolio/soloohearts.webp"
                      alt="Mobile App Interface"
                      className="w-full h-auto object-cover object-top select-none pointer-events-none"
                    />
                  </div>

                  {/* Gloss Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20" />
                </div>

                {/* Floating Badge 1 — Top Left */}
                <div className="absolute top-6 -left-3 sm:left-0 bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_3.5s_ease-in-out_infinite] z-30">
                  <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Engineered For</div>
                    <div className="text-xs font-black text-[#1e1b4b]">iOS & Android</div>
                  </div>
                </div>

                {/* Floating Badge 2 — Top Right */}
                <div className="absolute top-20 -right-3 sm:right-0 bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_4s_ease-in-out_1s_infinite] z-30">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                    <Star className="w-4 h-4 fill-amber-500" />
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Rating</div>
                    <div className="text-xs font-black text-amber-600">4.9★ Average</div>
                  </div>
                </div>

                {/* Floating Badge 3 — Bottom Right */}
                <div className="absolute bottom-10 -right-2 sm:right-2 bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_4.5s_ease-in-out_0.5s_infinite] z-30">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Quality SLA</div>
                    <div className="text-xs font-black text-emerald-600">99.9% Crash Free</div>
                  </div>
                </div>

              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* SERVICES SECTION — PDF Aligned Service Matrix */}
        <section id="mobile-services" className="py-16 bg-white relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-12">

            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  Tailored Solutions
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                  Mobile App Development Services in Hyderabad
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
                  Our mobile app development services are designed around the specific needs of each business — from initial concept to deployment and maintenance.
                </p>
              </div>
            </ScrollReveal>

            {/* Industry Use Case Cards — Upgraded Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryUseCases.map((uc, idx) => (
                <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full flex flex-col">
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-br ${uc.color} border border-slate-200/70 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-5 group h-full`}
                  >
                    <div className="space-y-4">
                      {/* Top Row: Icon & Tag */}
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          {uc.icon}
                        </div>
                        <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border ${uc.border}`}>
                          {uc.tag}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-black uppercase tracking-tight text-[#1e1b4b] group-hover:text-pink-600 transition-colors">
                          {uc.title}
                        </h3>
                        <p className="text-slate-700 font-medium text-xs sm:text-[13px] leading-relaxed group-hover:text-slate-900 transition-colors">
                          {uc.desc}
                        </p>
                      </div>
                    </div>

                    {/* Card Bottom Link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-600 group-hover:text-violet-600 transition-colors">
                        Explore Capability
                      </span>
                      <div className="w-7 h-7 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:shadow-xs group-hover:translate-x-0.5">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* PLATFORM EXPLORER (Android, iOS & Cross-Platform) */}
        <section className="py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-12">
            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-violet-600 block">Platform Coverage</span>
                <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                  Android & iOS App Development for Modern Businesses
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

        {/* 7-STEP DEVELOPMENT PROCESS (Direct from PDF) — Stepper Ribbon + Dual-Card Inspector */}
        <section className="py-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 border-y border-slate-100 relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-10">

            {/* Heading */}
            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Workflow className="w-3 h-3" />
                  Engineering Pipeline
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                  Our 7-Step Mobile Engineering Process
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
                  From technical consultation to post-launch SLA support — click any phase to inspect phase deliverables and toolchains.
                </p>
              </div>
            </ScrollReveal>

            {/* TOP: Horizontal Connected Stepper Ribbon Track */}
            <ScrollReveal direction="up" delay={100}>
              <div className="relative w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
                <div className="flex items-center justify-between min-w-[700px] relative px-4">

                  {/* Connecting Line Track */}
                  <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-200 -z-0" />
                  <div
                    className="absolute top-6 left-10 h-0.5 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-600 transition-all duration-500 -z-0"
                    style={{ width: `${(activeStep / 6) * 90}%` }}
                  />

                  {pdfProcessSteps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        onMouseEnter={() => setActiveStep(idx)}
                        className="flex flex-col items-center gap-2.5 relative z-10 group cursor-pointer"
                      >
                        <div className={`w-12 h-12 rounded-2xl font-mono font-black text-xs flex items-center justify-center transition-all duration-300 shadow-xs ${isActive
                          ? "bg-gradient-to-br from-pink-500 to-violet-600 text-white scale-110 shadow-pink-500/20 shadow-md ring-4 ring-pink-500/10"
                          : "bg-white text-slate-500 border border-slate-200 group-hover:border-pink-300 group-hover:scale-105"
                          }`}>
                          {step.step}
                        </div>

                        <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider max-w-[90px] text-center truncate transition-colors ${isActive ? "text-pink-600 font-extrabold" : "text-slate-400 group-hover:text-slate-600"
                          }`}>
                          {step.name.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}

                </div>
              </div>
            </ScrollReveal>

            {/* BOTTOM: Dual-Card Stage Inspector Display */}
            <ScrollReveal direction="up" delay={200}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

                {/* LEFT CARD (7 cols): Phase Title, Summary & Quality Gate */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 relative overflow-hidden">
                  <div className="space-y-4">

                    {/* Phase Badge & Header */}
                    <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                      <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center shrink-0 shadow-xs">
                        {pdfProcessSteps[activeStep].icon}
                      </div>
                      <div className="space-y-0.5">
                        <div className="inline-flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-600">
                          <span>Phase {pdfProcessSteps[activeStep].step} of 07</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300" />
                          <span className="text-slate-400">Roadmap Phase</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">
                          {pdfProcessSteps[activeStep].name}
                        </h3>
                      </div>
                    </div>

                    {/* Executive Summary */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {pdfProcessSteps[activeStep].desc}
                    </p>

                  </div>

                  {/* Timeframe & Quality Gate Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                      <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">Estimated Duration</span>
                      <div className="text-xs font-black text-[#1e1b4b]">⏱ {pdfProcessSteps[activeStep].duration}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-0.5">
                      <span className="text-[9px] font-mono text-emerald-600 uppercase font-bold">Quality SLA Gate</span>
                      <div className="text-xs font-black text-emerald-700 truncate">{pdfProcessSteps[activeStep].qualityGate}</div>
                    </div>
                  </div>
                </div>

                {/* RIGHT CARD (5 cols): Key Deliverables Checklist & Tools */}
                <div className="lg:col-span-5 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6">

                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-[9.5px] font-mono font-bold uppercase tracking-widest text-pink-600">Key Phase Deliverables</span>
                      <span className="text-[8px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full uppercase">Verified</span>
                    </div>

                    {/* Bullet Checklist */}
                    <div className="space-y-2.5 text-xs font-semibold text-slate-700">
                      {pdfProcessSteps[activeStep].deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Toolchain Badges */}
                    <div className="pt-2 space-y-1.5">
                      <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-slate-400 block">Phase Tools</span>
                      <div className="flex flex-wrap gap-1.5">
                        {pdfProcessSteps[activeStep].tools.map((tool, tIdx) => (
                          <span key={tIdx} className="text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200/70 shadow-2xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step Controls Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveStep((prev) => (prev === 0 ? 6 : prev - 1))}
                      className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold text-slate-500 hover:text-pink-600 cursor-pointer transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Prev Phase</span>
                    </button>

                    <span className="text-[10px] font-mono font-black text-slate-400">
                      0{activeStep + 1} / 07
                    </span>

                    <button
                      onClick={() => setActiveStep((prev) => (prev === 6 ? 0 : prev + 1))}
                      className="inline-flex items-center gap-1.5 text-[9.5px] font-mono font-bold text-pink-600 hover:text-pink-700 cursor-pointer transition-colors"
                    >
                      <span>Next Phase</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* HIRE DEVELOPERS & WHY CHOOSE US — Obsidian Executive Talent Banner */}
        <section className="py-8 bg-white relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">

            <ScrollReveal direction="up">
              <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#090d16] rounded-3xl border border-violet-500/20 shadow-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden text-white space-y-10">

                {/* Background Glow Accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

                  {/* Left Column (5 cols) — Copy & Onboarding Badges */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-400">
                      <Users className="w-3.5 h-3.5" />
                      Dedicated Engineering Talent
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                      Hire Mobile App Developers <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">from Hyderabad</span>
                    </h2>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      Finding the right development team can make a significant difference to the success of a mobile application. When you hire mobile app developers from Hyderabad through Digital Raiz, you get access to professionals who focus on both technical requirements and the business purpose behind your application.
                    </p>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                      Our developers work closely with clients to understand workflows, user requirements, and future expansion plans before development begins — reducing unnecessary complexity and ensuring long-term scalability.
                    </p>

                    {/* Trust Highlights */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2 text-[10px] font-mono text-slate-300">
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>48-Hr Developer Match</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                        <span>100% IP Protection</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 py-4 px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white text-[10px] font-black uppercase tracking-wider shadow-[0_10px_25px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95 transition-all"
                      >
                        <span>Hire Dedicated App Developers</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column (7 cols) — Why Choose Digital Raiz 8 Glass Cards */}
                  <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        Why Choose Digital Raiz?
                      </h3>
                      <span className="text-[9px] font-mono font-bold uppercase text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full">
                        8 Core Pillars
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {whyChoosePoints.map((point, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/40 transition-all duration-300 flex items-start gap-3.5 group"
                        >
                          <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 text-white font-mono font-black text-[10px] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform mt-0.5">
                            0{i + 1}
                          </div>
                          <span className="text-xs font-normal text-slate-200 leading-snug">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* REAL-WORLD CLIENT APP PORTFOLIO SHOWCASE */}
        <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden w-full">
          <div className="w-full space-y-12">
            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-2 px-6">
                <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">App Showcase</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Mobile App Projects</h2>
                <p className="text-slate-500 text-xs sm:text-sm font-normal">Explore real-world applications engineered by DigitalRaiz currently active on the Google Play Store.</p>
              </div>
            </ScrollReveal>

            {/* 3D Coverflow Perspective Container */}
            <ScrollReveal direction="up" delay={150}>
              <div className="relative w-full h-[540px] flex items-center justify-center [perspective:1200px] overflow-hidden select-none px-4 sm:px-12">
                <button
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? portfolioApps.length - 1 : prev - 1))}
                  className="absolute left-4 sm:left-8 md:left-12 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-pink-600 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="relative w-full h-[490px] flex items-center justify-center [transform-style:preserve-3d]">
                  {portfolioApps.map((app, idx) => {
                    let offset = idx - activeIndex;
                    const half = Math.floor(portfolioApps.length / 2);
                    if (offset > half) offset -= portfolioApps.length;
                    if (offset < -half) offset += portfolioApps.length;

                    const absOffset = Math.abs(offset);

                    if (absOffset > 2) return null;

                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        onMouseEnter={startAutoScroll}
                        onMouseLeave={stopAutoScroll}
                        className="absolute transition-all duration-500 ease-out cursor-pointer flex flex-col items-center gap-4 group"
                        style={{
                          transform: `translateX(${offset * 255}px) scale(${absOffset === 0 ? 1.08 : 0.92})`,
                          zIndex: 100 - absOffset,
                          opacity: 1,
                        }}
                      >
                        <h4 className={`text-[11px] font-black uppercase tracking-wider text-center max-w-[190px] transition-all duration-500 ${absOffset === 0 ? 'text-pink-600 scale-105 opacity-100' : 'text-slate-500 opacity-60'}`}>
                          {app.name}
                        </h4>

                        <div className={`w-[230px] h-[460px] rounded-[26px] border-[4px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden relative transition-all duration-500 ${absOffset === 0 ? 'ring-4 ring-pink-500/20' : ''}`}>
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-900 rounded-full z-20" />

                          <div
                            className="absolute inset-0 overflow-y-auto no-scrollbar z-10 bg-slate-900 mockup-viewport"
                            onWheel={handleUserScroll}
                            onTouchMove={handleUserScroll}
                          >
                            <img
                              src={app.img}
                              alt={app.name}
                              className="w-full h-auto object-cover object-top select-none pointer-events-none block"
                              style={{
                                imageRendering: '-webkit-optimize-contrast',
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setActiveIndex((prev) => (prev === portfolioApps.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 sm:right-8 md:right-12 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-pink-600 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CALL TO ACTION BANNER — Sleek Full-Width Light Banner Strip */}
        <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50/70 to-indigo-50 border-t border-b border-slate-200/80 py-8 sm:py-10 px-6 sm:px-12 relative overflow-hidden">

          {/* Subtle Ambient Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(100,80,200,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <ScrollReveal direction="up">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

              {/* Left Content */}
              <div className="space-y-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-pink-200/60 shadow-2xs text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  Mobile App Engineering
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">
                  Ready to Build Your Mobile Application with Digital Raiz?
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal">
                  Android • iOS • Cross-Platform Flutter & React Native Solutions in Hyderabad
                </p>
              </div>

              {/* Right Action Button */}
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-2xl bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white text-[10px] font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Get In Touch With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </div>
  );
}
