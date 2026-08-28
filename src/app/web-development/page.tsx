"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import dynamic from "next/dynamic";

const ThreeDShowcase = dynamic(() => import("@/components/ThreeDShowcase"), {
  ssr: false,
});
import { ArrowRight, Code, Layout, Globe, Server, Cpu, Database, Flame, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, ShieldAlert, Sparkles, Terminal, Activity, Zap, RefreshCw } from "lucide-react";

export default function WebServicePage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const optScrollRef = useRef<HTMLDivElement>(null);
  const [optPaused, setOptPaused] = useState(false);
  const designScrollRef = useRef<HTMLDivElement>(null);
  const [designPaused, setDesignPaused] = useState(false);
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
      name: "Statmindus",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/a54a7110257b0969a58c6090e1210aab.png",
      category: "Analytics Platform",
      desc: "Industrial analytics platform dashboard. Formatted for high-performance visual graphing, workflow diagnostics, and cross-platform server monitoring. Provides clean chart modules, customizable alerts, and rapid database rendering to help teams analyze metrics in real-time.",
      tech: ["React.js Canvas", "Recharts Data Library", "Server-Side Stats", "Tailwind Dashboard", "Real-Time Alerts"]
    },
    {
      name: "Zoozoo",
      url: "http://zoozootv.com",
      img: "https://digitalraiz.com/uploads/portfolio/6f026b11f2a8f09326c65397ed9ee943.jpg",
      category: "Media & Entertainment",
      desc: "Entertainment media portal built for streaming networks. Optimized for high-throughput video content delivery, automated scheduling, and community boards. Empowers media houses to manage digital assets, schedule streaming loops, and build an interactive viewer community.",
      tech: ["CDN Streaming Integration", "Next.js SSR", "Scheduler Script", "Community Boards", "Video CDN Wrapper"]
    },
    {
      name: "Vauntsquare",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/0dd0b81cc7e349e30c3678a6e87d04a5.png",
      category: "Real Estate Portal",
      desc: "Corporate real estate directory and agent listing application. Implements strict security, responsive layout engines, and dynamic mapping APIs. Helps agents catalog industrial, commercial, and residential spaces while letting clients filter by location, budget, and size.",
      tech: ["Next.js Dynamic API", "MapBox API", "Strict CSP Security", "Responsive Columns", "Agent Contact CRM"]
    },
    {
      name: "Thinkstudios",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/a0ce7c26c44671ae6d46f899e1434de1.png",
      category: "Creative Agency",
      desc: "Creative agency showcase website. Features immersive scrolling experiences, premium web animations, and full-screen project profiles. Tailored to help marketing agencies project branding strength, display case studies, and capture inbound lead flows smoothly.",
      tech: ["Framer Motion", "Tailwind CSS", "SmoothScroll.js", "Lead-Capture Form", "Immersive Media Deck"]
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
      name: "Teccteam",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/1ff3faf675b73d51d9039e6208314bbb.png",
      category: "Workflow System",
      desc: "Enterprise workflow management and team collaboration dashboard. Optimizes daily reporting systems, internal communications, and task sheets. Helps team leaders track project status, allocate resources, and streamline daily production schedules.",
      tech: ["Node.js Backend", "React Dashboard UI", "Task Sheets CRM", "Reporting System APIs", "Group Security Access"]
    },
    {
      name: "Svmart",
      url: "https://www.svmart.in/",
      img: "https://digitalraiz.com/uploads/portfolio/636cb38b4591f85743372a229c247ba7.jpg",
      category: "E-Commerce",
      desc: "Modern e-commerce platform built for retail scaling. Features product catalogs, secure checkout gateways, and integrated user profiles. Designed to handle high concurrent traffic with quick product loading, automated cart recovery, and shipping API connections.",
      tech: ["Next.js SSG / SSR", "Stripe Checkout API", "Product Catalog CRM", "Cart System Hooks", "Shipping API Hooks"]
    },
    {
      name: "Smv",
      url: "http://www.smvchemicals.com/",
      img: "https://digitalraiz.com/uploads/portfolio/547fead930248463e1a33474113a5313.png",
      category: "Industrial Chemical",
      desc: "Industrial chemical products manufacturing portal. Built with secure chemical safety datasheets (SDS) downloads and bulk product inquiry systems. Promotes compliant product cataloging, safety documentation delivery, and custom order request tracking.",
      tech: ["HTML5 Compliant Bevels", "PDF File Handler", "Bulk Inquiry Module", "Client Support System", "Compliance Tracking"]
    },
    {
      name: "Resort",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/205998a051f16c3bc76eb036c5a065fb.png",
      category: "Hospitality Web",
      desc: "Luxury hospitality and booking web application. Integrated with interactive room selection galleries, calendar schedules, and local tour booking guides. Optimized to maximize hotel reservations and provide a fluid concierge digital experience.",
      tech: ["Next.js SSR Booking", "Calendar Selection API", "Interactive Room Deck", "Stripe Payment Gateway", "Concierge Panel API"]
    },
    {
      name: "Phade",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/e0d824fa8fc388674810cd01ac1a7854.jpg",
      category: "SaaS Dashboard",
      desc: "High-performance SaaS platform analytics dashboard. Engineered for multi-tenant data rendering, billing sheets, and key metric tracking. Integrates data visualization hooks, customizable layout tiles, and developer-friendly documentation screens.",
      tech: ["React Charting Canvas", "Multi-Tenant Access", "Billing Sheets API", "Metric Tracking Dashboard", "Developer Docs Module"]
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === webPortfolio.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [webPortfolio.length, isPaused]);

  useEffect(() => {
    const activeTab = document.getElementById(`web-tab-${activeIndex}`);
    const container = activeTab?.parentElement;
    if (activeTab && container) {
      const offset = activeTab.offsetLeft - container.offsetWidth / 2 + activeTab.offsetWidth / 2;
      container.scrollTo({
        left: offset,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const container = optScrollRef.current;
    if (!container || optPaused) return;

    let animationId: number;
    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += 0.8; // Slow, premium auto-scroll speed

      const maxScroll = container.scrollWidth / 2;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [optPaused]);

  useEffect(() => {
    const container = designScrollRef.current;
    if (!container || designPaused) return;

    let animationId: number;
    const scrollStep = () => {
      if (!container) return;
      container.scrollLeft += 0.6; // Slow, premium auto-scroll speed

      const maxScroll = container.scrollWidth / 2;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [designPaused]);

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
    const duration = 14000; // Slow smooth scroll

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

  const webDesigns = [
    { title: "Static Web Design", desc: "Pre-rendered ultra-fast landing pages with optimized SEO footprint." },
    { title: "Dynamic Web Design", desc: "Real-time content systems and database integrations." },
    { title: "Responsive Web Design", desc: "Adaptive CSS fluid layouts looking perfect on mobile, tablets, & desktops." },
    { title: "Web Portal Design", desc: "Multi-user enterprise structures with granular roles & secure dashboards." },
    { title: "Corporate Web Design", desc: "Clean, professional corporate sites capturing high-intent brand presence." },
    { title: "Custom Web Design", desc: "Tailored JS components and custom animations mapped to exact requirements." }
  ];

  const optimizationCards = [
    {
      title: "Firewall & Hacker Defense",
      desc: "We implement strict Content Security Policies (CSP), audit dependencies for vulnerable packages, and configure active shields to block unauthorized traffic.",
      status: "No vulnerabilities",
      icon: <ShieldAlert className="w-5 h-5" />,
      colorClass: "bg-pink-50/60 hover:bg-pink-100/50 hover:shadow-[0_20px_40px_rgba(244,63,94,0.06)] text-pink-650",
      statusColor: "bg-emerald-500",
      statusTextClass: "text-slate-500"
    },
    {
      title: "Latency Monitoring",
      desc: "Our systems run dynamic server-side page speed checks. Periodic cache rebuilding and asset compression maintain page loads at standard sub-second speeds.",
      status: "99.9% Monitored Uptime",
      icon: <Activity className="w-5 h-5" />,
      colorClass: "bg-indigo-50/60 hover:bg-indigo-100/50 hover:shadow-[0_20px_40px_rgba(99,102,241,0.06)] text-indigo-650",
      statusColor: "bg-indigo-550",
      statusTextClass: "text-slate-555"
    },
    {
      title: "Content & Engine Patches",
      desc: "Keep visitors returning with dynamic asset revisions, regular promotions configuration, React framework version upgrades, and fluid typography optimizations.",
      status: "Weekly updates",
      icon: <RefreshCw className="w-5 h-5" />,
      colorClass: "bg-amber-50/60 hover:bg-amber-100/50 hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] text-amber-600",
      statusColor: "bg-amber-500",
      statusTextClass: "text-slate-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* Hero — Light Split with Image */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100">


          <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
            {/* Main content row */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center py-10 lg:py-14">

              {/* LEFT — Typography + CTA */}
              <div className="flex-grow space-y-8 text-center lg:text-left max-w-[540px]">

                <h1 className="space-y-1">
                  {/* <span className="block text-[10px] font-semibold text-slate-400 tracking-[0.3em] uppercase">High-Performance Production</span> */}
                  <span className="block text-5xl sm:text-6xl lg:text-[3.8rem] font-black uppercase tracking-tight text-[#1e1b4b] leading-[0.95]">
                    Web
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-[3.8rem] font-black uppercase tracking-tight leading-[0.95] bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    Development
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-[3.8rem] font-black uppercase tracking-tight text-slate-200 leading-[0.95]">
                    Services
                  </span>
                </h1>

                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-light max-w-md mx-auto lg:mx-0 text-justify">
                  We engineer lightning-fast corporate portals, custom business applications, responsive corporate sites, and robust e-commerce solutions — built for speed, security, and enterprise scale.
                </p>

                {/* Inline stat pills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                  {[
                    { val: "99.9%", label: "Uptime SLA", bg: "bg-emerald-50", border: "border-emerald-200/60", text: "text-emerald-700", dot: "bg-emerald-500" },
                    { val: "0.2s", label: "Load Speed", bg: "bg-pink-50", border: "border-pink-200/60", text: "text-pink-700", dot: "bg-pink-500 animate-pulse" },
                    { val: "100", label: "Lighthouse", bg: "bg-violet-50", border: "border-violet-200/60", text: "text-violet-700", dot: "bg-violet-500" },
                    { val: "A+", label: "SSL Grade", bg: "bg-indigo-50", border: "border-indigo-200/60", text: "text-indigo-700", dot: "bg-indigo-500" },
                  ].map((s) => (
                    <div key={s.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${s.bg} border ${s.border}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                      <span className={`text-[10px] font-black ${s.text}`}>{s.val}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 py-3 px-7 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>Start Web Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                  <button
                    onClick={() => {
                      const element = document.getElementById("web-showcase");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2.5 py-3 px-7 rounded-xl bg-transparent hover:bg-slate-50 border border-slate-200 hover:border-violet-300 text-slate-600 hover:text-violet-600 text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>Explore Works</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* RIGHT — Image with floating overlays */}
              <div className="relative w-full lg:w-[500px] shrink-0 flex justify-center">

                {/* Main image */}
                <div className="relative w-full max-w-[500px]">
                  <img
                    src="/DigitalRaiz_single_laptop_web_implementation.png"
                    alt="Web Development Showcase"
                    className="w-full h-auto object-contain drop-shadow-[0_20px_48px_rgba(100,80,200,0.15)] select-none pointer-events-none"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />

                  {/* Floating badge — top-left */}
                  <div className="absolute top-6 -left-4 sm:left-0 bg-white rounded-2xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_3s_ease-in-out_infinite]">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Lighthouse</div>
                      <div className="text-xs font-black text-emerald-600">Score 100</div>
                    </div>
                  </div>

                  {/* Floating badge — bottom-right */}
                  <div className="absolute bottom-12 -right-4 sm:right-0 bg-white rounded-2xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_3.5s_ease-in-out_0.5s_infinite]">
                    <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-violet-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Load Speed</div>
                      <div className="text-xs font-black text-violet-600">0.2s Avg</div>
                    </div>
                  </div>

                  {/* Floating badge — top-right */}
                  <div className="absolute top-16 -right-2 sm:right-4 bg-white rounded-2xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_4s_ease-in-out_1s_infinite]">
                    <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-4 h-4 text-pink-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">SSL Grade</div>
                      <div className="text-xs font-black text-pink-600">A+ Secure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom tech logo ticker — full-width, outside max-w container */}
          <div className="border-t border-slate-100 py-3 w-full overflow-hidden">
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
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
                { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
                { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
              ].concat([
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
                { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
                { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
              ]).map((t, i) => (
                <div key={i} className="flex items-center gap-2.5 px-6 py-2 border-r border-slate-100/80 shrink-0 group cursor-default">
                  <img
                    src={t.icon}
                    alt={t.name}
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200 select-none pointer-events-none"
                  />
                  <span className="text-[9px] font-bold text-slate-400 group-hover:text-slate-600 uppercase tracking-widest font-mono transition-colors duration-200 whitespace-nowrap">{t.name}</span>
                </div>
              ))}
            </div>
          </div>


          {/* CSS keyframes for floating badges */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
          `}</style>
        </section>


        {/* Detailed Copy & Capabilities Section */}
        {/* Modernized Capabilities & Services Overview Section */}
        <section className="py-10 bg-white relative overflow-hidden">
          {/* Ambient Background Elements */}
          <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-500/5 to-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 w-full space-y-5 relative z-10">
            {/* Centered Modern Tech Header */}
            <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-150 shadow-3xs">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-[8.5px] font-mono font-black text-slate-700 uppercase tracking-widest">Capabilities Matrix</span>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                State-of-the-Art Web Architecture
              </h2>
              <p className="text-slate-500 text-xs font-light max-w-xl">
                We engineer scalable, high-performance web systems using cutting-edge workflows and modern layout engines.
              </p>
            </div>

            {/* The Integrated Premium Dashboard Frame */}
            <div className="relative w-full bg-gradient-to-br from-slate-50/70 to-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-[32px] p-6 sm:p-10 overflow-hidden text-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                {/* Left Side: Large gold image showcase */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-[460px]">
                    <img
                      src="/DigitalRaiz_single_laptop_web_implementation.png"
                      alt="Gold Amber Web Dev Illustration"
                      className="w-full h-auto object-cover rounded-2xl select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:scale-[1.01] transition-transform duration-300"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                  </div>
                </div>

                {/* Right Side: Process, values, and inline tag details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-pink-600 uppercase tracking-[0.2em] block">Dynamic Platform Delivery</span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b] leading-tight">
                      Full-Stack Engineering & Optimization
                    </h3>
                    <p className="text-slate-600 text-xs font-light text-justify leading-relaxed">
                      We build conversion-optimized, responsive, and search-optimized frontends. By integrating static pre-rendering, modern layout engines, and secure server controllers, we make sure your web applications scale with your business traffic.
                    </p>
                  </div>

                  {/* Horizontal capabilities matrix */}
                  <div className="pt-6 space-y-3">
                    <span className="text-[8.5px] font-mono text-slate-400 uppercase tracking-widest block">Available Framework Verticals</span>
                    <div
                      ref={designScrollRef}
                      onMouseEnter={() => setDesignPaused(true)}
                      onMouseLeave={() => setDesignPaused(false)}
                      className="w-full flex flex-row overflow-x-auto gap-2 pb-2 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap justify-start"
                    >
                      {[...webDesigns, ...webDesigns].map((design, idx) => (
                        <div
                          key={idx}
                          className="text-[9.5px] font-bold uppercase tracking-wider bg-white border border-slate-200/60 hover:border-primary/20 rounded-lg px-3 py-1.5 text-slate-600 hover:text-primary transition-all cursor-default shrink-0"
                          title={design.desc}
                        >
                          {design.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sub-section: SecOps & Maintenance Console (3-Column Layout) */}
            <div className="pt-14 space-y-8">
              <div className="flex flex-col items-center text-center space-y-2 max-w-xl mx-auto">
                <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.2em] block">Defense & Optimization</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">
                  Continuous Platform Maintenance
                </h3>
                <p className="text-slate-500 text-xs font-light">
                  A website is a living asset. We configure dynamic protection layers and periodic core upgrades so your platform runs safely.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {optimizationCards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`group ${card.colorClass.split(' ')[0]} p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.01)] space-y-4 hover:-translate-y-1 hover:shadow${card.colorClass.split(' hover:shadow')[1]} transition-all duration-300 flex flex-col justify-between`}
                  >
                    <div className="space-y-4">
                      <div className={`w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-all duration-300 ${card.colorClass.split(' ').pop()}`}>
                        {card.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">{card.title}</h4>
                        <p className="text-slate-500 text-[11px] leading-relaxed font-light text-justify">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${card.statusColor} ${idx === 0 ? 'animate-pulse' : ''}`} />
                      <span className={`text-[9px] font-mono ${card.statusTextClass} uppercase tracking-wider font-bold`}>
                        {card.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Client Web Portfolio Showcase (Overhaul to match Mobile page standard) */}
        <section id="web-showcase" className="py-10 bg-white relative overflow-hidden w-full">

          <div className="w-full space-y-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto space-y-2 px-6">
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Web Showcase</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Web Projects</h2>
              <p className="text-slate-400 text-xs font-light">Explore real-world web implementations and corporate portals engineered by DigitalRaiz.</p>
            </div>

            {/* Project Navigator — Full-Width Info Bar + Number Grid */}
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="overflow-hidden">

                {/* Top: Active project info bar */}
                {/* <div className="flex items-center gap-4 px-5 py-4">
           
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
                    {webPortfolio[activeIndex].logo ? (
                      <img src={webPortfolio[activeIndex].logo} alt={webPortfolio[activeIndex].name} className="w-7 h-7 object-contain" />
                    ) : (
                      <Globe className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

   
                  <div className="flex-1 min-w-0">
                    <div className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{webPortfolio[activeIndex].category}</div>
                    <div className="text-base font-black text-[#1e1b4b] uppercase tracking-tight leading-none truncate">{webPortfolio[activeIndex].name}</div>
                  </div>

               
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-wider">Live</span>
                  </div>

                  
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setActiveIndex((prev) => (prev === 0 ? webPortfolio.length - 1 : prev - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-primary transition-all active:scale-90"
                      aria-label="Previous Project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-black text-slate-400 font-mono tabular-nums min-w-[36px] text-center">
                      <span className="text-[#1e1b4b]">{String(activeIndex + 1).padStart(2, '0')}</span>/{String(webPortfolio.length).padStart(2, '0')}
                    </span>
                    <button
                      onClick={() => setActiveIndex((prev) => (prev === webPortfolio.length - 1 ? 0 : prev + 1))}
                      className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-primary transition-all active:scale-90"
                      aria-label="Next Project"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div> */}

                {/* Bottom: Number + logo grid selector */}
                <div className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap">
                  {webPortfolio.map((app, idx) => (
                    <button
                      key={idx}
                      id={`web-tab-${idx}`}
                      onClick={() => setActiveIndex(idx)}
                      title={app.name}
                      className={`relative flex flex-col items-center gap-1.5 px-4 py-3 shrink-0 border-r border-slate-100 transition-all duration-200 group ${activeIndex === idx
                        ? "bg-primary/5"
                        : "bg-white hover:bg-slate-50"
                        }`}
                    >
                      {/* Active underline */}
                      {activeIndex === idx && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500" />
                      )}

                      {/* Logo circle */}
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${activeIndex === idx
                        ? "bg-primary/10 scale-105"
                        : "bg-slate-50 group-hover:bg-slate-100"
                        }`}>
                        {app.logo ? (
                          <img src={app.logo} alt={app.name} className="w-5 h-5 object-contain" />
                        ) : (
                          <Globe className={`w-4 h-4 ${activeIndex === idx ? "text-primary" : "text-slate-400"}`} />
                        )}
                      </div>

                      {/* Number index */}
                      <span className={`text-[8px] font-black font-mono leading-none ${activeIndex === idx ? "text-primary" : "text-slate-400"
                        }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>



            {/* 3D Desktop Case Study Showcase (Borderless Grid) */}
            <div className="max-w-6xl mx-auto px-6 w-full pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Interactive 3D Laptop Model (lg:col-span-6) */}
                <div className="lg:col-span-6 w-full h-[400px] md:h-[450px]">
                  <ThreeDShowcase
                    projects={webPortfolio}
                    activeIndex={activeIndex}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  />
                </div>

                {/* Right Column: Case Study Details & Navigation (lg:col-span-6) */}
                <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full py-4">
                  <div className="space-y-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-2.5 py-1 rounded border border-primary/10 w-max block animate-fade-in">
                      {webPortfolio[activeIndex].category}
                    </span>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                      {webPortfolio[activeIndex].name}
                    </h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed text-justify">
                      {webPortfolio[activeIndex].desc}
                    </p>

                    {/* Dynamic project-specific technology stack matrix */}
                    <div className="space-y-2 pt-3">
                      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block">Project Tech Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {webPortfolio[activeIndex].tech?.map((technology, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-bold uppercase tracking-wider bg-white border border-slate-200/60 rounded-lg px-2.5 py-1 text-slate-600 hover:text-primary transition-colors cursor-default"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    {/* Action buttons & direct links */}
                    {webPortfolio[activeIndex].url !== "#" && (
                      <a
                        href={webPortfolio[activeIndex].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-white text-[10px] font-black uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-300"
                      >
                        <span>Explore Project Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
