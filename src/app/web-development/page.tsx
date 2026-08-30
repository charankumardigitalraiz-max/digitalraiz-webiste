"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { openContactModal } from "@/components/ContactModal";
import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";

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
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const techScrollRef = useRef<HTMLDivElement>(null);
  const [techPaused, setTechPaused] = useState(false);

  const webPortfolio = [
    {
      name: "Sherla Properties",
      url: "#",
      img: "/websites/sherlaproperties.png",
      logo: "/project-logs/sherla-properties.webp",
      category: "Real Estate",
      desc: "Premium real estate platform engineered for showcasing luxury listings. Features advanced search filters, fluid listing galleries, and interactive agent contact forms. Designed to streamline client acquisition and maximize property exposure with modern, responsive layouts and rapid loading times.",
      tech: ["Next.js", "Tailwind CSS", "React Dynamic Search", "Glassmorphic UI", "Vercel Deploy"]
    },
    {
      name: "Medicompares",
      url: "#",
      img: "/websites/medicompares.png",
      logo: "/project-logs/MediCompares_Logo.png",
      category: "Healthcare Portal",
      desc: "Comprehensive healthcare comparison portal. Empowers users to compare medical procedures, clinic ratings, and pricing options with real-time analytics data. Features high-security medical directory search integrations, dynamic pricing sheets, and automated appointment scheduling options.",
      tech: ["React.js", "Next.js Static Pages", "Tailwind CSS", "Data Sheets API", "Medical Analytics"]
    },
    {
      name: "Skanda Hospital",
      url: "#",
      img: "/websites/skanda-life-line-hospital.png",
      logo: "/project-logs/skanda.png",
      category: "Healthcare Platform",
      desc: "Advanced healthcare management and clinic lookup portal for Skanda Life Line Hospital. Features interactive consultant listings, department directory lookups, emergency scheduling services, and a patient inquiry module designed for rapid local clinic navigation.",
      tech: ["React.js", "Next.js Static Pages", "Tailwind CSS", "Clinic Locator API", "Patient Inquiry Portal"]
    },
    {
      name: "Livewell Rehab",
      url: "#",
      img: "/websites/livewell.png",
      logo: "/project-logs/livewell.png",
      category: "Rehabilitation Services",
      desc: "Premium digital portal for Livewell Rehabilitation Services. Engineered to coordinate post-operative care, dynamic therapeutic exercise plans, physiotherapist consultant schedules, and interactive appointment bookings for recovering patients.",
      tech: ["React.js", "Tailwind CSS", "Next.js Pre-rendering", "Booking Scheduler", "Patient Care Module"]
    },
    {
      name: "Sr Associates",
      url: "https://srimportexport.com/",
      img: "https://digitalraiz.com/uploads/portfolio/27113090177f02688143b9c4812bcd28.png",
      category: "Import Export",
      desc: "Modern import-export logistics portal. Built with secure client dashboards, real-time shipment status tracking, and multilocational currency conversion tools. Streamlines communication between global trade partners, custom house brokers, and transport carriers with ease.",
      tech: ["Next.js Routing", "Node.js REST API", "Client Dashboard", "Real-Time Tracking", "Currency Converter"]
    },
    {
      name: "Gselfi",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/24243c9467fa85c48e8ae6bf1c79b513.png",
      category: "Studio & Portfolio",
      desc: "High-end photography studio and interactive portfolio site. Features fluid masonry galleries, dynamic lightboxes, and smooth contact integrations. Tailored for creative professionals looking to showcase visual arts with high-fidelity retina images, lazy loading, and premium layouts.",
      tech: ["HTML5 / CSS3", "Tailwind CSS", "Framer Motion", "Lazy Image Loading", "Portfolio Masonry"]
    },
    {
      name: "Techpro",
      url: "https://www.techprolog.com/",
      img: "https://digitalraiz.com/uploads/portfolio/c443a4a734e299e9d7f21126ce4542e5.png",
      category: "IT Solutions",
      desc: "Full-scale corporate IT services portal. Showcases robust cloud computing solutions, cybersecurity diagnostics tools, and service request forms. Designed for enterprises requiring detailed documentation, custom booking slots, and automated support ticket generation.",
      tech: ["Next.js Static Pages", "Secure Forms Backend", "IT Service Catalog", "Booking Calendar API", "SEO Pre-rendering"]
    },
    {
      name: "Svmart",
      url: "https://www.svmart.in/",
      img: "https://digitalraiz.com/uploads/portfolio/636cb38b4591f85743372a229c247ba7.jpg",
      category: "E-Commerce",
      desc: "Modern e-commerce platform built for retail scaling. Features product catalogs, secure checkout gateways, and integrated user profiles. Designed to handle high concurrent traffic with quick product loading, automated cart recovery, and shipping API connections.",
      tech: ["Next.js SSG / SSR", "Stripe Checkout API", "Product Catalog CRM", "Cart System Hooks", "Shipping API Hooks"]
    }
  ];

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
        <section className="relative overflow-hidden bg-white border-b border-slate-100 py-10 sm:py-14">
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
                    src="/services/digital-raiz-imac-showcase-vertical.png"
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
          <div className="border-t border-slate-100 py-3 w-full overflow-hidden mt-8">
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
        <section id="web-services-grid" className="py-10 sm:py-10 bg-white relative border-t border-slate-100">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {developedServices.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <ScrollReveal key={idx} delay={(idx % 3) * 60} direction="up" className="h-full">
                    <div className="bg-white border border-slate-200/90 hover:border-pink-300 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full flex flex-col justify-between space-y-3">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                          <Icon className="w-5 h-5 text-pink-600" />
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight">
                            {svc.title}
                          </h3>
                          <p className="text-slate-600 text-xs leading-relaxed font-normal">
                            {svc.desc}
                          </p>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-pink-600 group-hover:text-violet-600">
                        <span>Read Capability</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Design Pillars</h3>
                  <div className="space-y-3">
                    {[
                      { title: "Intuitive Navigation", desc: "Clear user pathways so visitors find information without friction." },
                      { title: "Brand Identity Alignment", desc: "Custom color schemes and typography reflecting your core identity." },
                      { title: "Multi-Device Consistency", desc: "Pixel-perfect experience across mobile phones, tablets & desktop monitors." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.title}</div>
                          <div className="text-[11px] text-slate-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Split Row 2: Custom Web Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-slate-200/60 pt-10">
              <ScrollReveal direction="left" className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Technical Architecture</h3>
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                    {[
                      "Custom Dashboards & Portals",
                      "REST API & Database Integrations",
                      "Secure Form Controllers",
                      "Scalable Cloud Backend",
                      "Role-Based Access Control",
                      "High-Speed Page Caching"
                    ].map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
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
        <section className="py-10 sm:py-10 bg-white border-t border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Card 1: Web Applications */}
              <ScrollReveal direction="up" delay={0} className="h-full">
                <div className="bg-white border border-slate-200/90 hover:border-pink-300 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-pink-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      Web Application Development
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      As businesses become more digitally connected, conventional websites may not always be enough. We build customized web applications, customer portals, dashboards, booking systems, and marketplaces engineered around your workflows.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                    Scalable SaaS Architecture
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: WordPress & E-Commerce */}
              <ScrollReveal direction="up" delay={100} className="h-full">
                <div className="bg-white border border-slate-200/90 hover:border-pink-300 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-pink-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      WordPress &amp; E-Commerce Stores
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      From flexible WordPress sites designed for easy content management to full-fledged e-commerce stores with product catalogs, shopping carts, payment gateways, and order workflows that drive online sales.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                    High-Converting Retail Stores
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: Responsive & SEO Friendly */}
              <ScrollReveal direction="up" delay={200} className="h-full">
                <div className="bg-white border border-slate-200/90 hover:border-pink-300 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center">
                      <Search className="w-5 h-5 text-pink-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      Responsive &amp; SEO-Friendly Architecture
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      Designed to provide a consistent experience across desktops, tablets, and smartphones. Our SEO-friendly website development considers page speed, semantic HTML structure, clean URLs, internal linking, and mobile responsiveness.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                    Search Engine Optimized
                  </div>
                </div>
              </ScrollReveal>

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

                  {/* Right Column (7 Cols): 9 Core Focus Points Grid */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {whyChoosePoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl hover:border-pink-300 transition-colors space-y-1.5 flex flex-col justify-between group"
                        >
                          <div className="w-6 h-6 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center text-xs font-bold font-mono">
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                          <span className="text-xs font-bold text-slate-800 leading-snug group-hover:text-pink-600 transition-colors">
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

        {/* WEB PORTFOLIO SHOWCASE SECTION */}
        <section id="web-showcase" className="py-10 sm:py-14 bg-white relative border-t border-slate-100">
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
                        {webPortfolio[activeIndex].logo ? (
                          <img src={webPortfolio[activeIndex].logo} alt={webPortfolio[activeIndex].name} className="w-full h-full object-contain filter brightness-200" />
                        ) : (
                          <Globe className="w-4 h-4 text-pink-400" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest leading-none">
                            {webPortfolio[activeIndex].category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline-block" />
                          <span className="hidden sm:inline-flex items-center gap-1 text-[8px] font-mono font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Website
                          </span>
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-[#1e1b4b] uppercase tracking-tight truncate mt-0.5">
                          {webPortfolio[activeIndex].name}
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
                          {webPortfolio[activeIndex].category}
                        </span>
                        <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-500" />
                          Live Production
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {webPortfolio[activeIndex].name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed font-sans">
                        {webPortfolio[activeIndex].desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block">Project Tech Stack</span>
                        <div className="flex flex-wrap gap-1.5">
                          {webPortfolio[activeIndex].tech?.map((technology, idx) => (
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
                      {webPortfolio[activeIndex].url !== "#" && (
                        <a
                          href={webPortfolio[activeIndex].url}
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
