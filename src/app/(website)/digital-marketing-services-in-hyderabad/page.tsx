"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCtaBanner from "@/components/ServiceCtaBanner";
import { openContactModal } from "@/components/ContactModal";
import {
  TrendingUp,
  Target,
  Megaphone,
  Search,
  Share2,
  FileText,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  MousePointerClick,
  Compass,
  LineChart
} from "lucide-react";

export default function DigitalMarketingPage() {
  const verticalsData = [
    {
      id: "seo",
      step: "01",
      tag: "SEO & Organic Visibility",
      titlePrefix: "",
      titleGradient: "SEO Services in Hyderabad",
      titleSuffix: " for Long-Term Search Visibility",
      badge: "Organic Search Authority",
      icon: <Search className="w-5 h-5 text-pink-500" />,
      color: "from-pink-500/10 via-pink-500/5 to-transparent",
      accentBorder: "border-pink-200/80",
      accentText: "text-pink-600",
      pillBg: "bg-pink-50 text-pink-600 border-pink-200/60",
      img: "/digital-marketing-service/seo-vertical-3d.webp",
      para1: "Search is often the starting point for customers researching a product, service, or business. Our SEO services in Hyderabad focus on helping your website become more visible for searches that are relevant to your business.",
      para2: "We work across keyword research, on-page optimization, technical SEO, content optimization, internal linking, local SEO, and website structure. As an SEO company in Hyderabad, we focus on search intent rather than simply inserting keywords into content.",
      para3: "",
      features: [
        "Keyword & Intent Research",
        "Technical SEO Audits",
        "On-Page Optimization",
        "Local SEO & Maps Pack"
      ],
      insightTitle: "Search Intent Alignment",
      insightDesc: "We match content with exact customer search queries, positioning your brand as the primary authority when potential buyers search for solutions.",
      metricValue: "#1 Rank",
      metricLabel: "Search Intent Scale"
    },
    {
      id: "social",
      step: "02",
      tag: "Social Brand Positioning",
      titlePrefix: "",
      titleGradient: "Social Media Marketing Services in Hyderabad",
      titleSuffix: " That Build Your Brand",
      badge: "Creative Social Presence",
      icon: <Share2 className="w-5 h-5 text-violet-500" />,
      color: "from-violet-500/10 via-violet-500/5 to-transparent",
      accentBorder: "border-violet-200/80",
      accentText: "text-violet-600",
      pillBg: "bg-violet-50 text-violet-600 border-violet-200/60",
      img: "/digital-marketing-service/social-vertical-3d.webp",
      para1: "Social media has become an important part of how customers discover and evaluate businesses. Our social media marketing services in Hyderabad help brands create a consistent presence while communicating their products, services, and personality clearly.",
      para2: "Digital Raiz develops social media strategies based on your target audience and brand positioning. Our capabilities include content planning, creative development, social media management, campaign planning, paid social advertising, and performance analysis.",
      para3: "",
      features: [
        "Content Strategy & Planning",
        "Creative Graphic Development",
        "Social Media Management",
        "Paid Social & Performance Analysis"
      ],
      insightTitle: "Multi-Platform Strategy",
      insightDesc: "From Instagram reels and LinkedIn thought leadership to Facebook campaigns and video promotions, we tailor creatives specifically for each social network.",
      metricValue: "10x Reach",
      metricLabel: "Audience Engagement"
    },
    {
      id: "ppc",
      step: "03",
      tag: "Google Ads & PPC",
      titlePrefix: "",
      titleGradient: "Google Ads & Performance Marketing",
      titleSuffix: " in Hyderabad",
      badge: "High-Intent Paid Acquisition",
      icon: <MousePointerClick className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-500/10 via-indigo-500/5 to-transparent",
      accentBorder: "border-indigo-200/80",
      accentText: "text-indigo-600",
      pillBg: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
      img: "/digital-marketing-service/ppc-vertical-3d.webp",
      para1: "When businesses need targeted visibility and faster opportunities, paid advertising can complement organic marketing. Our Google Ads services in Hyderabad are designed around relevant audiences, search intent, and campaign objectives.",
      para2: "We help businesses plan and manage paid campaigns across appropriate digital advertising channels, with attention to keyword selection, audience targeting, ad messaging, landing pages, and campaign performance. Performance marketing is not simply about generating clicks — the focus is on attracting the right traffic and creating meaningful actions such as inquiries, calls, registrations, or purchases.",
      para3: "",
      features: [
        "Keyword Selection & Audience Targeting",
        "Ad Messaging & Creative Assets",
        "Optimized Landing Page Conversion",
        "Performance Campaign Management"
      ],
      insightTitle: "Action-Focused PPC Metrics",
      insightDesc: "We tune bidding algorithms and ad creative headlines to drive maximum quality score and lower cost per conversion.",
      metricValue: "4.8x ROAS",
      metricLabel: "Targeted Paid Return"
    },
    {
      id: "content",
      step: "04",
      tag: "Content & Lead Funnels",
      titlePrefix: "",
      titleGradient: "Content Marketing & Lead Generation",
      titleSuffix: " for Growing Businesses",
      badge: "Qualified Inquiry Pipeline",
      icon: <FileText className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      accentBorder: "border-emerald-200/80",
      accentText: "text-emerald-600",
      pillBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
      img: "/digital-marketing-service/content-vertical-3d.webp",
      para1: "Good digital marketing needs good content. From website pages and search-focused articles to social media creatives and campaign messaging, content plays a vital role in how customers understand your business.",
      para2: "Our content marketing services in Hyderabad help businesses communicate their expertise, answer customer questions, and create content that supports their broader marketing strategy.",
      para3: "We develop lead generation strategies in Hyderabad that connect digital campaigns with business opportunities. Depending on your objectives, this includes search campaigns, social media campaigns, landing pages, website optimization, and targeted digital promotions.",
      features: [
        "Search-Focused Article Writing",
        "Lead Generation Funnel Strategy",
        "Website Copy & Page Messaging",
        "Conversion Landing Page Optimization"
      ],
      insightTitle: "Frictionless Inquiry Pipeline",
      insightDesc: "To move beyond mere traffic and visibility, creating a clear, frictionless path from audience attention to genuine business inquiries.",
      metricValue: "100% Intent",
      metricLabel: "Qualified Inquiries"
    }
  ];

  const capabilities = [
    { title: "Search Engine Optimization", desc: "Technical, on-page, and keyword research for long-term organic visibility.", icon: <Search className="w-5 h-5 text-pink-500" />, tag: "SEO Search", color: "from-pink-50/70 to-pink-100/20", border: "border-pink-200/70 text-pink-700", img: "/digital-marketing-service/seo-search-chart.webp" },
    { title: "Social Media Marketing", desc: "Brand positioning, content planning, and creative social media management.", icon: <Share2 className="w-5 h-5 text-violet-500" />, tag: "Social Reach", color: "from-violet-50/70 to-violet-100/20", border: "border-violet-200/70 text-violet-700", img: "/digital-marketing-service/social-media-phone.webp" },
    { title: "Google Ads & Paid PPC", desc: "High-intent paid search, ad messaging, and conversion-focused landing pages.", icon: <MousePointerClick className="w-5 h-5 text-indigo-500" />, tag: "Google PPC", color: "from-indigo-50/70 to-indigo-100/20", border: "border-indigo-200/70 text-indigo-700", img: "/digital-marketing-service/ppc-ad-cursor.webp" },
    { title: "Content Marketing", desc: "Expertise-driven articles, search copy, and creative brand storytelling.", icon: <FileText className="w-5 h-5 text-emerald-500" />, tag: "Content Copy", color: "from-emerald-50/70 to-emerald-100/20", border: "border-emerald-200/70 text-emerald-700", img: "/digital-marketing-service/content-creation-notebook.webp" },
    { title: "Local SEO", desc: "Geofenced maps optimization and local business search dominance in Hyderabad.", icon: <Compass className="w-5 h-5 text-amber-500" />, tag: "Local Maps", color: "from-amber-50/70 to-amber-100/20", border: "border-amber-200/70 text-amber-700", img: "/digital-marketing-service/local-seo-location.webp" },
    { title: "Lead Generation", desc: "Funnel architecture connecting campaign traffic to genuine business inquiries.", icon: <Target className="w-5 h-5 text-rose-500" />, tag: "Lead Funnels", color: "from-rose-50/70 to-rose-100/20", border: "border-rose-200/70 text-rose-700", img: "/digital-marketing-service/conversion-funnel.webp" },
    { title: "Performance Marketing", desc: "Data-informed metrics tracking ROI, cost per acquisition, and conversions.", icon: <LineChart className="w-5 h-5 text-cyan-500" />, tag: "ROI Metrics", color: "from-cyan-50/70 to-cyan-100/20", border: "border-cyan-200/70 text-cyan-700", img: "/digital-marketing-service/roi-growth-chart.webp" },
    { title: "Online Brand Promotion", desc: "Multi-channel digital presence strengthening authority and recall.", icon: <Megaphone className="w-5 h-5 text-purple-500" />, tag: "Brand Recall", color: "from-purple-50/70 to-purple-100/20", border: "border-purple-200/70 text-purple-700", img: "/digital-marketing-service/brand-megaphone.webp" },
    { title: "Campaign Management", desc: "Continuous monitoring, A/B testing, and end-to-end campaign optimization.", icon: <Layers className="w-5 h-5 text-pink-600" />, tag: "A/B Testing", color: "from-pink-50/70 to-purple-100/20", border: "border-pink-200/70 text-pink-700", img: "/digital-marketing-service/ab-testing-cards.webp" }
  ];

  const integratedStrategySteps = [
    {
      step: "01",
      title: "SEO Visibility",
      desc: "Captures organic demand and search traffic over time.",
      tag: "Organic Growth",
      accentBg: "bg-pink-500",
      accentBorder: "border-pink-100 hover:border-pink-300",
      accentHoverText: "group-hover:text-pink-600",
      gradient: "from-pink-50/70 via-white to-white",
      shadow: "hover:shadow-pink-500/10",
      badgeStyle: "text-pink-700 bg-pink-100/80 border-pink-200 group-hover:bg-pink-600",
      shadowColor: "shadow-pink-500/25"
    },
    {
      step: "02",
      title: "Social Presence",
      desc: "Fosters trust, brand recall, and active engagement.",
      tag: "Brand Recall",
      accentBg: "bg-violet-500",
      accentBorder: "border-violet-100 hover:border-violet-300",
      accentHoverText: "group-hover:text-violet-600",
      gradient: "from-violet-50/70 via-white to-white",
      shadow: "hover:shadow-violet-500/10",
      badgeStyle: "text-violet-700 bg-violet-100/80 border-violet-200 group-hover:bg-violet-600",
      shadowColor: "shadow-violet-500/25"
    },
    {
      step: "03",
      title: "Paid Advertising",
      desc: "Accelerates targeted lead acquisition and visibility.",
      tag: "Targeted Leads",
      accentBg: "bg-indigo-500",
      accentBorder: "border-indigo-100 hover:border-indigo-300",
      accentHoverText: "group-hover:text-indigo-600",
      gradient: "from-indigo-50/70 via-white to-white",
      shadow: "hover:shadow-indigo-500/10",
      badgeStyle: "text-indigo-700 bg-indigo-100/80 border-indigo-200 group-hover:bg-indigo-600",
      shadowColor: "shadow-indigo-500/25"
    },
    {
      step: "04",
      title: "Unified Content",
      desc: "Communicates consistent brand authority across all touchpoints.",
      tag: "Brand Authority",
      accentBg: "bg-emerald-500",
      accentBorder: "border-emerald-100 hover:border-emerald-300",
      accentHoverText: "group-hover:text-emerald-600",
      gradient: "from-emerald-50/70 via-white to-white",
      shadow: "hover:shadow-emerald-500/10",
      badgeStyle: "text-emerald-700 bg-emerald-100/80 border-emerald-200 group-hover:bg-emerald-600",
      shadowColor: "shadow-emerald-500/25"
    }
  ];

  const whyChooseUs = [
    "Customized digital marketing strategies built around your goals",
    "Data-informed decision making and real-time campaign tracking",
    "Search-focused content and intent-based SEO optimization",
    "Creative social media campaigns that build authentic brand recall",
    "Targeted paid advertising maximizing return on ad spend (ROAS)",
    "Conversion-focused digital user experiences and landing pages",
    "Transparent communication with continuous campaign improvement"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION — Clean Light Studio Layout */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">

            {/* Top Eyebrow Ribbon */}
            {/* <div className="flex items-center justify-between pt-10 pb-6 border-b border-slate-100/80">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/60 text-[9px] font-bold uppercase tracking-[0.2em] text-pink-600">
                <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
                Digital Marketing Agency in Hyderabad
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[9px] text-slate-400 font-mono uppercase tracking-widest">
                <span>DigitalRaiz</span>
                <span>/</span>
                <span className="text-pink-500 font-bold">Digital Marketing</span>
              </div>
            </div> */}

            {/* Main Content Split */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center py-10 lg:py-14">

              {/* LEFT COLUMN — High-Impact Typography & Action CTAs */}
              <ScrollReveal direction="left" className="flex-grow space-y-7 text-center lg:text-left max-w-[560px]">

                {/* Headline */}
                <h1 className="space-y-1">
                  <span className="block text-[10px] font-semibold text-slate-400 tracking-[0.3em] ">Scale Your Visibility & Revenue</span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-[#1e1b4b] leading-[0.95]">
                    Digital Marketing
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[0.95] bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Services in Hyderabad
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-slate-400 leading-[0.95] pt-1">
                    For Brands Ready to Grow
                  </span>
                </h1>

                {/* Subtitle Copy */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal max-w-md mx-auto lg:mx-0">
                  In a crowded digital market, being online is not enough. Your business needs to be discoverable by target buyers, communicate value clearly, and turn online attention into predictable revenue. <strong className="text-slate-900 font-semibold">Digital Raiz</strong> brings search engine optimization, Google Ads PPC, social media management, and performance lead generation together.
                </p>

                {/* Key Metric Stat Cards */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                  {[
                    { val: "+350%", label: "Organic Traffic", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200/60" },
                    { val: "4.8x", label: "Paid Ads ROAS", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200/60" },
                    { val: "100K+", label: "Leads Logged", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200/60" },
                    { val: "99.2%", label: "Client SLA", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200/60" },
                  ].map((s, idx) => (
                    <div key={idx} className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${s.bg} border ${s.border}`}>
                      <span className={`text-[10px] font-black ${s.color}`}>{s.val}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Buttons */}
                {/* <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-sm"
                  >
                    <span>Launch Marketing Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                  <a
                    href="#marketing-services"
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-transparent hover:bg-slate-50 border border-slate-200 hover:border-pink-300 text-slate-600 hover:text-pink-600 text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>Explore Capabilities</span>
                    <Compass className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </div> */}

              </ScrollReveal>

              {/* RIGHT COLUMN — 3D Marketing Illustration with Floating Glass Badges */}
              <ScrollReveal direction="right" delay={150} className="relative w-full lg:w-[480px] shrink-0 flex justify-center">
                <div className="relative w-full max-w-[460px]">
                  <img
                    src="/services/service_light_3d_marketing.webp"
                    alt="Digital Marketing Services Showcase"
                    className="w-full h-auto object-contain  select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />

                  {/* Floating badge — top-left */}
                  <div className="absolute top-4 -left-4 sm:left-0 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_3s_ease-in-out_infinite]">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">SEO Visibility</div>
                      <div className="text-xs font-black text-emerald-600">#1 Organic Intent</div>
                    </div>
                  </div>

                  {/* Floating badge — bottom-right */}
                  <div className="absolute bottom-6 -right-4 sm:right-0 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_3.5s_ease-in-out_0.5s_infinite]">
                    <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 text-pink-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">PPC ROAS</div>
                      <div className="text-xs font-black text-pink-600">4.8x Return Target</div>
                    </div>
                  </div>

                  {/* Floating badge — top-right */}
                  <div className="absolute top-12 -right-2 sm:right-2 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-2.5 animate-[float_4s_ease-in-out_1s_infinite]">
                    <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-violet-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Google Partner</div>
                      <div className="text-xs font-black text-violet-600">Certified Agency</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
          `}</style>
        </section>

        {/* CORE CAPABILITIES SECTION — Studio Grid Layout */}
        <section id="marketing-services" className="py-16 sm:py-20 bg-white relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-12">

            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  Capabilities & Solutions
                </div>
                <h2 className="text-3xl font-black tracking-tight text-[#1e1b4b]">
                  Digital Marketing Company in Hyderabad{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Focused on Business Results
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
                  We combine different marketing channels based on what your business actually needs. Some businesses require stronger SEO visibility, while others benefit from social media campaigns, Google Ads, content marketing, or lead generation.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap, idx) => (
                <ScrollReveal key={idx} delay={(idx % 3) * 80} direction="up" className="h-full flex flex-col">
                  <div className="bg-white border border-slate-200/90 hover:border-pink-300 p-3.5 sm:p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden h-full flex flex-col justify-between space-y-2 group">
                    <div className="space-y-2 flex-grow flex flex-col justify-between">
                      {/* TOP: 3D Image Banner */}
                      <div className="w-full h-40 sm:h-44 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <img
                          src={cap.img}
                          alt={cap.title}
                          className="w-full h-full object-contain pointer-events-none select-none"
                        />
                      </div>

                      {/* MIDDLE: Content */}
                      <div className="space-y-1.5 pt-0.5">
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-[#1e1b4b] group-hover:text-pink-600 transition-colors leading-snug">
                          {cap.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-[13px] font-medium leading-relaxed group-hover:text-slate-800 transition-colors">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* DETAILED SERVICE VERTICALS — Light & Elegant Studio Layout */}
        <section className="py-16 sm:py-5 bg-white relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-16">

            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  In-Depth Service Execution
                </div> */}
                <h2 className="text-3xl font-black tracking-tight text-[#1e1b4b]">
                  Specialized{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Digital Marketing Verticals
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
                  Explore how our specialized marketing disciplines deliver measurable growth across organic search, social channels, paid acquisition, and lead funnels.
                </p>
              </div>
            </ScrollReveal>

            {/* Alternating Light & Airy Vertical Rows */}
            <div className="space-y-16 sm:space-y-10">
              {verticalsData.map((vert, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={vert.id} className=" pb-16 sm:pb-10 last:border-0 last:pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-2 items-center">

                      {/* Visual Graphic Column */}
                      <ScrollReveal
                        direction={isEven ? "left" : "right"}
                        className={`lg:col-span-6 ${isEven ? "order-1" : "order-1 lg:order-2"} flex items-center justify-center`}
                      >
                        <div className="w-full h-72 sm:h-96 md:h-[420px] flex items-center justify-center p-2">
                          <img
                            src={vert.img}
                            alt={vert.titleGradient}
                            className="w-full h-full object-contain pointer-events-none select-none hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </ScrollReveal>

                      {/* Content Column */}
                      <ScrollReveal
                        direction={isEven ? "right" : "left"}
                        delay={100}
                        className={`lg:col-span-6 ${isEven ? "order-2" : "order-2 lg:order-1"} space-y-5`}
                      >
                        <div className="space-y-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-[9px] font-mono font-bold uppercase tracking-widest border border-pink-200/60">
                            {vert.icon}
                            <span>{vert.tag}</span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] leading-tight tracking-tight">
                            {vert.titlePrefix}
                            <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                              {vert.titleGradient}
                            </span>
                            {vert.titleSuffix}
                          </h3>
                        </div>

                        <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                          <p>{vert.para1}</p>
                          <p>{vert.para2}</p>
                          {vert.para3 && <p>{vert.para3}</p>}
                        </div>

                        {/* Clean Bullet Feature Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {vert.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 ${vert.accentText}`} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </ScrollReveal>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* INTEGRATED STRATEGY SECTION — 2-Column Split Blueprint */}
        <section className="py-16 sm:py-24 bg-white relative border-t border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column (5 Cols): Section Title & Context */}
              <ScrollReveal direction="left" className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  Synergistic Framework
                </div>

                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1e1b4b] leading-tight">
                  An Integrated{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Digital Marketing Strategy
                  </span>{" "}
                  for Your Business
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  Digital channels work better when they work together. SEO creates long-term organic visibility, social media strengthens brand awareness, paid advertising generates targeted traffic, and content supports every stage of the customer journey.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed pt-1">
                  At Digital Raiz, we bring these capabilities together to create a connected digital marketing strategy in Hyderabad. Your website, search presence, social profiles, content, and advertising campaigns should communicate one consistent message.
                </p>
              </ScrollReveal>

              {/* Right Column (7 Cols): Strategy Steps Map */}
              <ScrollReveal direction="right" delay={100} className="lg:col-span-7 space-y-3">
                {integratedStrategySteps.map((item) => (
                  <div
                    key={item.step}
                    className={`group relative bg-gradient-to-r ${item.gradient} border ${item.accentBorder} rounded-lg p-4 sm:p-4 transition-all duration-300 hover:shadow-lg ${item.shadow} hover:-translate-y-1 overflow-hidden cursor-pointer`}
                  >
                    <div className={`w-1.5 h-full ${item.accentBg} absolute left-0 top-0 rounded-r-full`} />

                    <div className="flex items-start justify-between gap-4 pl-1">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl ${item.accentBg} text-white flex items-center justify-center font-mono font-black text-sm group-hover:scale-110 transition-transform shadow-md ${item.shadowColor} shrink-0`}>
                          {item.step}
                        </div>
                        <div className="space-y-1">
                          <h3 className={`text-base sm:text-lg font-bold text-[#1e1b4b] ${item.accentHoverText} transition-colors tracking-tight`}>
                            {item.title}
                          </h3>
                          <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <span className={`text-[10px] font-mono font-bold border px-3 py-1 rounded-full shrink-0 group-hover:text-white transition-all ${item.badgeStyle}`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE DIGITAL RAIZ — Executive Split Advantage Showcase */}
        <section className="py-10 sm:py-5 bg-white ">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-1">
            <ScrollReveal direction="up">
              <div className="bg-white  rounded-3xl p-6 sm:p-10 lg:p-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Left Column (5 Cols): Title, PDF intro paragraph & CTA */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                      <Sparkles className="w-3 h-3" />
                      The Digital Raiz Advantage
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1e1b4b] leading-tight">
                      Why Choose Digital Raiz for{" "}
                      <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                        Digital Marketing in Hyderabad?
                      </span>
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      Choosing a digital marketing agency in Hyderabad is an important decision because your marketing investment should contribute to real business objectives. We begin by understanding your business, audience, and goals before recommending channels.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => openContactModal("Digital Marketing & SEO", "Start Your Marketing Strategy")}
                        className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-600 text-white text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border-0"
                      >
                        <span>Start Your Marketing Strategy</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column (7 Cols): 7 Core Pillars Cards */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                      <h3 className="text-sm font-extrabold uppercase tracking-tight text-[#1e1b4b] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-600" />
                        7 Core Service Pillars
                      </h3>
                      <span className="text-[9px] font-mono font-bold uppercase text-pink-600 bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-full">
                        Data-Driven Growth
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {whyChooseUs.map((pillar, idx) => (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-pink-300 hover:shadow-md transition-all duration-300 flex items-start gap-3 group ${idx === 6 ? "sm:col-span-2" : ""}`}
                        >
                          <div className="w-6 h-6 rounded-lg bg-pink-50 text-pink-600 font-mono font-black text-[10px] flex items-center justify-center shrink-0 border border-pink-100 group-hover:bg-pink-600 group-hover:text-white transition-all mt-0.5">
                            0{idx + 1}
                          </div>
                          <span className="text-xs font-semibold text-slate-700 leading-snug group-hover:text-pink-600 transition-colors">
                            {pillar}
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

        {/* CALL TO ACTION BANNER */}
        <ServiceCtaBanner
          badge="Digital Marketing Growth"
          title="Ready to Grow Your Business with Digital Raiz?"
          description="SEO • Google Ads PPC • Social Media Marketing • Lead Generation Solutions in Hyderabad"
        />

        {/* CONTACT FORM SECTION */}
        {/* <Contact /> */}

      </main>

      <Footer />
    </div>
  );
}
