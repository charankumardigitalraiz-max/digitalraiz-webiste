"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { openContactModal } from "@/components/ContactModal";
import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";
import { usePortfolioStore, getWebProjects } from "@/store";
import { usePortfolioProjects } from "@/hooks/usePortfolioProjects";

const ThreeDShowcase = dynamic(() => import("@/components/ThreeDShowcase"), {
  ssr: false,
});
import {
  ArrowRight,
  Code,
  Layout,
  Globe,
  Server,
  Cpu,
  Database,
  Flame,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Terminal,
  Activity,
  Zap,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  Search,
  Users,
  Check,
  Layers,
  FileCode2,
  Palette
} from "lucide-react";

export default function WebServicePage() {
  const storeProjects = usePortfolioStore((state) => state.projects);
  // TanStack Query for Data Fetching & Caching
  const { data: allProjects = storeProjects } = usePortfolioProjects();

  // Dynamically filter top 10 web portfolio projects via store helper
  const webPortfolio = useMemo(() => {
    return getWebProjects(allProjects, 10);
  }, [allProjects]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeWebProject = useMemo(() => {
    return webPortfolio[activeIndex % webPortfolio.length] || webPortfolio[0];
  }, [webPortfolio, activeIndex]);
  const [isPaused, setIsPaused] = useState(false);
  const techScrollRef = useRef<HTMLDivElement>(null);
  const [techPaused, setTechPaused] = useState(false);

  const developedServices = [
    { title: "Corporate & Business Websites", desc: "Professional, brand-aligned websites built to establish strong online presence, communicate business value, and convert visitors into active leads.", icon: Globe },
    { title: "Custom Website Development", desc: "Bespoke digital platforms with custom features, workflows, dashboards, and API integrations tailored to exact business operations.", icon: Code },
    { title: "WordPress Development", desc: "Easy-to-manage, flexible WordPress platforms combining user-friendly content management with robust design and speed.", icon: FileCode2 },
    { title: "E-Commerce Platforms", desc: "High-converting online stores featuring seamless product catalogs, secure payment gateways, shopping carts, and order management.", icon: ShoppingBag },
    { title: "Landing Page Architecture", desc: "High-impact, conversion-focused landing pages engineered for marketing campaigns, product launches, and lead capture.", icon: Layout },
    { title: "Responsive Web Design", desc: "Fluid, multi-device layouts ensuring flawless user experience across desktops, laptops, tablets, and mobile smartphones.", icon: Smartphone },
    { title: "Portfolio & Professional Sites", desc: "Elegant digital portfolios designed for agencies, executives, and professionals to present work and build credibility.", icon: Palette },
    { title: "Custom Web Applications", desc: "Operational web applications including customer portals, booking engines, management dashboards, and SaaS tools.", icon: Cpu },
    { title: "Business Portals & Redigns", desc: "Modern web portal integrations and complete website redesigns that modernize outdated platforms and boost performance.", icon: RefreshCw },
  ];

  const whyChoosePoints = [
    "Business-focused planning",
    "Professional UI/UX design",
    "Responsive development",
    "Custom functionality",
    "SEO-friendly architecture",
    "Performance-conscious development",
    "Scalable technology",
    "Clear project communication",
    "Post-launch support"
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === webPortfolio.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [webPortfolio.length, isPaused]);

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
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION — Modern Clean Studio Layout */}
        <section className="relative overflow-hidden bg-white  py-10 sm:py-14">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

              {/* LEFT — Typography & Intro Copy */}
              <ScrollReveal direction="left" className="flex-grow space-y-6 text-center lg:text-left max-w-2xl">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  Website Development Company in Hyderabad
                </div> */}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Website Development Company in Hyderabad for{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Modern Digital Experiences
                  </span>
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
                  A strong website should do more than establish your presence online. It should represent your brand, communicate your value and create a smooth path for customers to connect with your business. Digital Raiz is a website development company in Hyderabad helping businesses create professional, responsive and purpose-driven digital experiences.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-justify sm:text-left">
                  We combine strategy, creative thinking and technology to develop websites that are built around real business requirements. From corporate websites and WordPress platforms to e-commerce stores and custom web applications, our team creates digital solutions that support both your current objectives and future growth.
                </p>

                {/* Stat Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
                  {[
                    { val: "99.9%", label: "Uptime SLA", bg: "bg-emerald-50 text-emerald-700 border-emerald-200/60", dot: "bg-emerald-500" },
                    { val: "0.2s", label: "Page Load Speed", bg: "bg-pink-50 text-pink-700 border-pink-200/60", dot: "bg-pink-500 animate-pulse" },
                    { val: "100", label: "Lighthouse Score", bg: "bg-violet-50 text-violet-700 border-violet-200/60", dot: "bg-violet-500" },
                    { val: "100%", label: "SEO Optimized", bg: "bg-indigo-50 text-indigo-700 border-indigo-200/60", dot: "bg-indigo-500" },
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
                    onClick={() => openContactModal("Web Development")}
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer border-0"
                  >
                    <span>Start Web Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById("web-services-grid");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>Explore Services</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </ScrollReveal>

              {/* RIGHT — Generated Desktop & Laptop iMac Showcase */}
              <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[500px] shrink-0 flex justify-center">
                <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden group">
                  <img
                    src="/services/digital-raiz-imac-showcase-vertical.webp"
                    alt="Website Development Company in Hyderabad - Digital Raiz Desktop & Laptop Studio"
                    className="w-full h-auto object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />

                  {/* Floating badge — top-left */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-mono text-slate-400 uppercase">Lighthouse</div>
                      <div className="text-xs font-extrabold text-emerald-600">100 / 100</div>
                    </div>
                  </div>

                  {/* Floating badge — bottom-right */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-pink-50 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-pink-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-mono text-slate-400 uppercase">Performance</div>
                      <div className="text-xs font-extrabold text-pink-600">Ultra-Fast</div>
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
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
              ].concat([
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
              ]).map((t, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-1.5 border-r border-slate-100 shrink-0">
                  <img src={t.icon} alt={t.name} className="w-6 h-6 object-contain" />
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1: WEBSITE DEVELOPMENT SERVICES BUILT AROUND YOUR BUSINESS */}
        <section id="web-services-grid" className="py-10 sm:py-10 bg-white relative ">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  Tailored Solutions
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Website Development Services in Hyderabad{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Built Around Your Business
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
                  Every business has a different audience, identity and way of operating. Our website development services in Hyderabad are planned around your specific requirements rather than forcing your business into a standard template.
                </p>
              </div>
            </ScrollReveal>

            {/* 3x3 Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developedServices.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <ScrollReveal key={idx} delay={(idx % 3) * 60} direction="up" className="h-full">
                    <div
                      onClick={() => openContactModal(`Web Dev: ${svc.title}`)}
                      className="group relative bg-white border border-slate-200/80 hover:border-pink-300/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 h-full flex flex-col justify-between space-y-5 cursor-pointer overflow-hidden"
                    >
                      {/* Top Accent Line on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Subtle Ambient Background Glow on Hover */}
                      <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-pink-400/10 via-violet-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                      <div className="space-y-4 relative z-10">
                        {/* Header: Icon Badge & Index Number */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-pink-50/80 border border-pink-100/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-md group-hover:shadow-pink-500/25 shrink-0">
                            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-pink-500 transition-colors">
                            0{idx + 1}
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
                      </div>

                      {/* Footer Action CTA */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-pink-600 transition-colors">
                          Explore Capability
                        </span>
                        <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 group-hover:bg-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2 & 3: WEBSITE DESIGN & CUSTOM SOLUTIONS (2-COL SPLIT BLUEPRINT) */}
        <section className="py-10 sm:py-10 bg-white relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-12">

            {/* Split Row 1: Website Design Company */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <ScrollReveal direction="left" className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Palette className="w-3 h-3 text-pink-500" />
                  User-Focused Design
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Website Design Company in Hyderabad{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Creating Engaging User Experiences
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  Design is one of the first things customers notice about a website, but good website design goes far beyond visual appeal. It should make information easy to understand, navigation intuitive and important actions simple to complete.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  As a website design company in Hyderabad, Digital Raiz creates clean, modern and user-focused interfaces that reflect your brand identity. Our design process considers your audience, industry, brand positioning and business objectives across desktops, tablets and smartphones.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" className="lg:col-span-6">
                <div className="relative group rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-pink-300">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-50">
                    <img
                      src="/web-development/modern-minimalist-workspace-white.webp"
                      alt="Website Design Showcase"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Split Row 2: Custom Web Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-slate-200/60 pt-10">
              <ScrollReveal direction="left" className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative group rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:border-violet-300">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img
                      src="/web-development/enterprise-software-architecture-white.webp"
                      alt="Custom Web Architecture"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                  <Code className="w-3 h-3 text-pink-500" />
                  Underlying Technology
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Web Development &amp; Custom Website Solutions{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    in Hyderabad
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  A website's visual appearance is only one part of the development process. The underlying technology determines how effectively the platform performs, adapts and integrates with your business operations.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  For businesses with specific requirements, our custom website development services in Hyderabad provide the flexibility to create features and workflows that standard templates cannot offer. We focus on building technology that serves a clear business purpose.
                </p>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* SECTION 4, 5, 6: WEB APPS, WORDPRESS, E-COMMERCE & SEO */}
        <section className="py-10 sm:py-10 bg-white relative  overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-12 relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

              {[
                {
                  title: "Web Application Development",
                  subtitle: "Custom SaaS & Enterprise Portals",
                  desc: "As businesses become more digitally connected, conventional websites may not always be enough. We build customized web applications, customer portals, dashboards, booking systems, and marketplaces engineered around your exact workflows.",
                  tag: "SaaS & Portals Engine",
                  icon: Cpu,
                  gradient: "from-pink-500 to-rose-600",
                  badgeBg: "bg-pink-50 text-pink-600 border-pink-100",
                  pulseColor: "bg-pink-500",
                  checkColor: "text-pink-500",
                  hoverBorder: "hover:border-pink-300",
                  features: ["Custom Dashboards", "Role-Based Access", "API Workflows"]
                },
                {
                  title: "WordPress & E-Commerce Stores",
                  subtitle: "High-Converting Retail Platforms",
                  desc: "From flexible WordPress sites designed for easy content management to full-fledged e-commerce stores with product catalogs, shopping carts, payment gateways, and automated order workflows that scale online sales.",
                  tag: "Retail & E-Com Suite",
                  icon: ShoppingBag,
                  gradient: "from-violet-600 to-indigo-600",
                  badgeBg: "bg-violet-50 text-violet-600 border-violet-100",
                  pulseColor: "bg-violet-600",
                  checkColor: "text-violet-600",
                  hoverBorder: "hover:border-violet-300",
                  features: ["Product Catalogs", "Secure Gateways", "Cart System"]
                },
                {
                  title: "Responsive & SEO-Friendly Architecture",
                  subtitle: "Core Web Vitals & Speed First",
                  desc: "Designed to provide a consistent experience across desktops, tablets, and smartphones. Our SEO-friendly website development considers page speed, semantic HTML structure, clean URLs, internal linking, and mobile responsiveness.",
                  tag: "SEO & Speed Core",
                  icon: Search,
                  gradient: "from-emerald-500 to-teal-600",
                  badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
                  pulseColor: "bg-emerald-500",
                  checkColor: "text-emerald-500",
                  hoverBorder: "hover:border-emerald-300",
                  features: ["100/100 Lighthouse", "Semantic HTML5", "Mobile First"]
                }
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <ScrollReveal key={idx} direction="up" delay={idx * 100} className="h-full">
                    <div
                      onClick={() => openContactModal(`Web Dev: ${card.title}`)}
                      className={`group relative bg-white border border-slate-200/80 ${card.hoverBorder} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 h-full flex flex-col justify-between space-y-4 cursor-pointer overflow-hidden`}
                    >
                      {/* Top Accent Line on Hover */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      {/* Ambient Glow */}
                      <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-pink-400/10 via-violet-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                      <div className="space-y-4 relative z-10">
                        {/* Header: Icon Box & Status Tag */}
                        {/* <div className="flex items-center justify-between">
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center shadow-md shadow-pink-500/15 group-hover:scale-105 transition-transform shrink-0`}>
                            <Icon className="w-5 h-5 stroke-[2]" />
                          </div>
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9.5px] font-mono font-bold uppercase tracking-wider ${card.badgeBg}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${card.pulseColor} animate-pulse`} />
                            <span>{card.tag}</span>
                          </div>
                        </div> */}

                        {/* Title & Subtitle */}
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                            {card.title}
                          </h3>
                          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                            {card.subtitle}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-xs font-normal leading-relaxed">
                          {card.desc}
                        </p>

                        {/* Compact Feature Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {card.features.map((feat, fIdx) => (
                            <div key={fIdx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[10.5px] font-semibold text-slate-700 group-hover:bg-slate-100 transition-all hover:scale-105">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${card.checkColor} shrink-0`} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Action CTA */}
                      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between relative z-10">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 group-hover:text-pink-600 transition-colors">
                          Explore Capability
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}

            </div>

          </div>
        </section>

        {/* SECTION 7 & 8: HIRE DEVELOPERS & WHY CHOOSE DIGITAL RAIZ */}
        <section className="py-10 sm:py-10 bg-white">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6">
            <ScrollReveal direction="up">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Left Column (5 Cols): Title & Intro */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                      <Sparkles className="w-3 h-3 text-pink-500" />
                      The Digital Raiz Advantage
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      Why Choose Digital Raiz for{" "}
                      <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                        Website Development?
                      </span>
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      Choosing a website development company in Hyderabad is not simply about finding someone who can build a website. You need a partner who understands how design, technology, user experience and digital marketing come together.
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      When you hire web developers in Hyderabad through Digital Raiz, we build websites with the intention of making them useful business assets—not simply attractive online pages.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => openContactModal("Web Development")}
                        className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
                      >
                        <span>Hire Web Developers Today</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column (7 Cols): Showcase Image & Scrolling Marquee Badges */}
                  <div className="lg:col-span-7 space-y-4">
                    {/* Standalone Showcase Image Container */}
                    <div className="relative group overflow-hidden bg-white transition-all duration-300 p-2">
                      <div className="relative w-full flex items-center justify-center bg-white min-h-[220px] sm:min-h-[280px]">
                        <img
                          src="/web-development/website-development-agency-white-v2.webp"
                          alt="Why Choose Digital Raiz Web Development"
                          className="w-full h-auto max-h-[340px] sm:max-h-[400px] object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* High-Visibility Dual-Row Scrolling Ticker Marquee */}
                    <div className="overflow-hidden relative pt-2 space-y-2.5 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
                      {/* Row 1: Left Stream */}
                      <div className="flex gap-2.5 animate-scroll-horizontal whitespace-nowrap w-max">
                        {[
                          { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" },
                          { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
                          { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
                          { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
                          { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
                          { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
                          { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
                          { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
                          { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" },
                          { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" },
                          { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
                          { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
                          { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
                          { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
                          { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
                          { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
                          { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
                          { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" }
                        ].map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={idx}
                              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-pink-400 text-slate-900 text-xs font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all shrink-0 cursor-default group"
                            >
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.bg} text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                                <ItemIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="group-hover:text-pink-600 transition-colors tracking-tight">{item.title}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Row 2: Right Stream (Reverse Direction) */}
                      <div className="flex gap-2.5 animate-scroll-horizontal-reverse whitespace-nowrap w-max">
                        {[
                          { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" },
                          { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
                          { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
                          { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
                          { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
                          { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
                          { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
                          { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
                          { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" },
                          { title: "24/7 Post-Launch Support", icon: CheckCircle2, bg: "from-emerald-500 to-teal-600" },
                          { title: "Clear Communication", icon: Users, bg: "from-blue-600 to-indigo-600" },
                          { title: "Scalable Infrastructure", icon: Layers, bg: "from-purple-600 to-pink-600" },
                          { title: "Performance-Conscious", icon: Activity, bg: "from-amber-500 to-orange-600" },
                          { title: "SEO-Friendly Architecture", icon: Search, bg: "from-emerald-500 to-teal-600" },
                          { title: "Custom Functionality", icon: Code, bg: "from-pink-500 to-violet-600" },
                          { title: "Responsive Multi-Device", icon: Smartphone, bg: "from-indigo-500 to-blue-600" },
                          { title: "Professional UI/UX Design", icon: Palette, bg: "from-violet-600 to-purple-600" },
                          { title: "Business-Focused Planning", icon: Zap, bg: "from-pink-500 to-rose-600" }
                        ].map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={idx}
                              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-violet-400 text-slate-900 text-xs font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all shrink-0 cursor-default group"
                            >
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.bg} text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                                <ItemIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="group-hover:text-violet-600 transition-colors tracking-tight">{item.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* WEB PORTFOLIO SHOWCASE SECTION */}
        <section id="web-showcase" className="py-10 sm:py-14 bg-white relative ">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest block">Featured Works</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Production Web Applications</h2>
                <p className="text-slate-600 text-xs font-normal">Explore real-world web implementations and corporate portals engineered by Digital Raiz.</p>
              </div>
            </ScrollReveal>

            {/* Project Navigator Tabs with Logos */}
            <ScrollReveal direction="up" delay={100}>
              <div className="w-full space-y-4">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden p-2 sm:p-3 space-y-3">

                  {/* Header Bar */}
                  <div className="flex items-center justify-between gap-4 px-3 py-2 border-b border-slate-100">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1.5">
                        {activeWebProject?.logo ? (
                          <img src={activeWebProject.logo} alt={activeWebProject.name} className="w-full h-full object-contain filter brightness-200" />
                        ) : (
                          <Globe className="w-4 h-4 text-pink-400" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest leading-none">
                            {activeWebProject?.category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline-block" />
                          <span className="hidden sm:inline-flex items-center gap-1 text-[8px] font-mono font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Website
                          </span>
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-[#1e1b4b] uppercase tracking-tight truncate mt-0.5">
                          {activeWebProject?.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setActiveIndex((prev) => (prev === 0 ? webPortfolio.length - 1 : prev - 1))}
                        className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-all active:scale-90 shadow-2xs cursor-pointer"
                        aria-label="Previous Project"
                        title="Previous Project"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="text-[11px] font-mono font-black text-slate-400 tabular-nums px-1.5 min-w-[42px] text-center">
                        <span className="text-pink-600">{String(activeIndex + 1).padStart(2, '0')}</span>
                        <span className="text-slate-300">/</span>
                        <span>{String(webPortfolio.length).padStart(2, '0')}</span>
                      </div>

                      <button
                        onClick={() => setActiveIndex((prev) => (prev === webPortfolio.length - 1 ? 0 : prev + 1))}
                        className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-all active:scale-90 shadow-2xs cursor-pointer"
                        aria-label="Next Project"
                        title="Next Project"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Tab Strip with Brand Logos */}
                  <div className="relative group">
                    <div className="flex flex-row overflow-x-auto gap-2 p-1 no-scrollbar flex-nowrap scroll-smooth">
                      {webPortfolio.map((app, idx) => {
                        const isActive = activeIndex === idx;
                        return (
                          <button
                            key={idx}
                            id={`web-tab-${idx}`}
                            onClick={() => setActiveIndex(idx)}
                            title={app.name}
                            className={`relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl shrink-0 transition-all duration-300 select-none group/tab cursor-pointer ${isActive
                              ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-md shadow-pink-500/20 border-transparent scale-[1.02]"
                              : "bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-2xs hover:shadow-xs"
                              }`}
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${isActive
                              ? "bg-white/20 border-white/30 text-white"
                              : "bg-slate-50 text-slate-500 group-hover/tab:text-pink-600 border border-slate-200/70"
                              }`}>
                              {app.logo ? (
                                <img src={app.logo} alt={app.name} className="w-4 h-4 object-contain" />
                              ) : (
                                <Globe className="w-3.5 h-3.5" />
                              )}
                            </div>

                            <div className="flex flex-col text-left">
                              <span className="text-xs font-bold tracking-tight whitespace-nowrap">
                                {app.name}
                              </span>
                            </div>

                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse ml-0.5 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* 3D Desktop Showcase & Project Details Grid */}
            <ScrollReveal direction="up" delay={150}>
              <div className="w-full pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  <div className="lg:col-span-6 w-full h-[360px] sm:h-[400px]">
                    <ThreeDShowcase
                      projects={webPortfolio}
                      activeIndex={activeIndex}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    />
                  </div>

                  <div className="lg:col-span-6 space-y-5 flex flex-col justify-between h-full py-2">
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200/60">
                          {activeWebProject?.category}
                        </span>
                        <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-500" />
                          Live Production
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {activeWebProject?.name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed font-sans">
                        {activeWebProject?.desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block">Project Tech Stack</span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeWebProject?.tech?.map((technology, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200/60 rounded-lg px-2.5 py-1 text-slate-600 hover:text-pink-600 transition-colors cursor-default"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      {activeWebProject?.url && activeWebProject.url !== "#" && (
                        <a
                          href={activeWebProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-300"
                        >
                          <span>Explore Project Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 9: BUILD YOUR DIGITAL PRESENCE & FINAL CTA */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100 text-slate-800 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
            <ScrollReveal direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Build Your Digital Presence with{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Raiz
                </span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed pt-2">
                Your website can become the foundation of your entire digital presence. From the first idea to design, development and launch, we bring together technology and creative expertise to create digital experiences built around your business. Start your next website or web application project with Digital Raiz.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => openContactModal("Web Development")}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 shadow-xl transition-all cursor-pointer border-0"
                >
                  <span>Start Your Next Web Project Today</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
