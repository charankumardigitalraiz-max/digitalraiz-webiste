"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Compass,
  ArrowRight,
  Globe,
  Layers,
  Bot,
  Lightbulb,
  HeartHandshake,
  Search,
  Eye,
  CheckCircle2,
  Quote
} from "lucide-react";
import BannerSlider from "@/components/BannerSlider";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function AboutPage() {
  // Exact 5 Principles from PDF ("What Drives Us")
  const principles = [
    {
      title: "Curiosity",
      desc: "Curiosity keeps us learning.",
      icon: <Search className="w-5 h-5 text-pink-500" />,
      color: "from-pink-50/80 to-purple-50/30",
      border: "border-pink-200/80"
    },
    {
      title: "Creativity",
      desc: "Creativity helps us look beyond conventional solutions.",
      icon: <Lightbulb className="w-5 h-5 text-purple-500" />,
      color: "from-purple-50/80 to-violet-50/30",
      border: "border-purple-200/80"
    },
    {
      title: "Clarity",
      desc: "Clarity keeps our work focused on the real objective.",
      icon: <Eye className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-50/80 to-blue-50/30",
      border: "border-indigo-200/80"
    },
    {
      title: "Quality",
      desc: "Quality shapes the way we design, develop and deliver.",
      icon: <Zap className="w-5 h-5 text-cyan-500" />,
      color: "from-cyan-50/80 to-teal-50/30",
      border: "border-cyan-200/80"
    },
    {
      title: "Partnership",
      desc: "Partnership reminds us that successful outcomes are built together.",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-50/80 to-green-50/30",
      border: "border-emerald-200/80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* ULTRA-PREMIUM LIGHT STUDIO HERO HEADER SECTION */}
        <section className="relative py-10 sm:py-10 lg:py-10 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
          {/* Micro Grid Background Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* <ScrollReveal direction="up">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-mono font-bold uppercase tracking-widest shadow-2xs backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                    <span>About Digital Raiz</span>
                  </div>
                </ScrollReveal> */}

                <ScrollReveal direction="up" delay={100}>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                    About Digital Raiz –{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      Shaping Ideas into Digital Possibilities
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    <p className="font-medium text-slate-800 text-base sm:text-lg leading-snug">
                      Digital Raiz is a technology and digital solutions company based in Hyderabad, bringing together strategy, creativity and technology to help businesses move forward in a digital-first world.
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Our work spans digital marketing, SEO, social media marketing, website development, web application development and mobile app development. But what defines us is not simply the range of services we provide. It is the way we approach every challenge—with curiosity, clarity and a strong understanding of the business behind the requirement.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Highlighted Quote Box */}
                {/* <ScrollReveal direction="up" delay={250}>
                  <div className="relative p-4 sm:p-5 rounded-2xl bg-pink-50/60 border-l-4 border-l-pink-500 border-y border-r border-pink-100 shadow-xs flex gap-3.5 items-start text-left group">
                    <div className="w-8 h-8 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Quote className="w-4 h-4" />
                    </div>
                    <p className="text-slate-800 font-semibold text-xs sm:text-sm leading-relaxed italic">
                      "We believe the best digital solutions begin with a good understanding of people, purpose and possibilities."
                    </p>
                  </div>
                </ScrollReveal> */}

                {/* Action CTA Buttons */}
                <ScrollReveal direction="up" delay={300}>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                    <button
                      onClick={() => openContactModal("General Agency Inquiry")}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Connect With Our Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                    >
                      <span>Explore Services</span>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Hero Visual Showcase Image ONLY */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <ScrollReveal direction="up" delay={200} className="w-full">
                  <div className="relative w-full rounded-3xl p-3 sm:p-4 bg-white  overflow-hidden group">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden ">
                      <Image
                        src="/about/digital-raiz-technologies-showcase-1200x900-source.png"
                        alt="Digital Raiz Technologies Showcase"
                        width={1200}
                        height={900}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* OUR VISION & OUR MISSION */}
        <section className="py-10 sm:py-10 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-16">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Our Vision */}
              <ScrollReveal direction="up" delay={100} className="h-full">
                <div className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-pink-50/80 via-purple-50/40 to-white border border-pink-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 h-full flex flex-col justify-between group overflow-hidden">
                  {/* Background Watermark Elevated Text */}
                  <span className="absolute -right-4 -bottom-6 text-6xl sm:text-7xl font-black font-sans tracking-widest text-pink-500/10 group-hover:text-pink-500/15 transition-colors pointer-events-none select-none uppercase">
                    VISION
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-md shadow-pink-500/20 shrink-0 group-hover:scale-105 transition-transform">
                          <Target className="w-5.5 h-5.5" />
                        </div>
                        <div>
                          {/* <span className="text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest block">01 / PERSPECTIVE</span> */}
                          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Our Vision</h2>
                        </div>
                      </div>
                      {/* <span className="px-3 py-1 rounded-full bg-pink-100/70 border border-pink-200/80 text-pink-700 font-mono text-[10px] font-bold shadow-2xs">
                        01
                      </span> */}
                    </div>
                    <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      <p>
                        Our vision is to build a digital ecosystem where businesses can use technology not just to keep pace with change, but to create new opportunities.
                      </p>
                      <p>
                        We aspire to become a trusted technology and digital growth partner for businesses in Hyderabad and beyond, known for thoughtful solutions, meaningful experiences and work that creates lasting value.
                      </p>
                      <p>
                        As technology continues to evolve, our focus remains on staying adaptable, learning continuously and helping our clients move confidently toward what comes next.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Our Mission */}
              <ScrollReveal direction="up" delay={200} className="h-full">
                <div className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-indigo-50/80 via-blue-50/40 to-white border border-indigo-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 h-full flex flex-col justify-between group overflow-hidden">
                  {/* Background Watermark Elevated Text */}
                  <span className="absolute -right-4 -bottom-6 text-6xl sm:text-7xl font-black font-sans tracking-widest text-indigo-600/10 group-hover:text-indigo-600/15 transition-colors pointer-events-none select-none uppercase">
                    MISSION
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20 shrink-0 group-hover:scale-105 transition-transform">
                          <Compass className="w-5.5 h-5.5" />
                        </div>
                        <div>
                          {/* <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest block">02 / EXECUTION</span> */}
                          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Our Mission</h2>
                        </div>
                      </div>
                      {/* <span className="px-3 py-1 rounded-full bg-indigo-100/70 border border-indigo-200/80 text-indigo-700 font-mono text-[10px] font-bold shadow-2xs">
                        02
                      </span> */}
                    </div>
                    <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      <p>
                        Our mission is to make digital transformation more purposeful and accessible for businesses.
                      </p>
                      <p>
                        We combine strategic thinking with creative execution and reliable technology to solve practical business challenges. Whether a business needs greater online visibility, a stronger digital identity, a new website or a mobile application, we aim to create solutions that are relevant to its goals and built for its future.
                      </p>
                      <p className="font-semibold text-slate-800">
                        Every project is an opportunity to create something useful, measurable and meaningful.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* OUR APPROACH */}
            <div className="space-y-8 pt-10 border-t border-slate-100">
              <ScrollReveal direction="up">
                <div className="space-y-2 text-center sm:text-left">
                  {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
                    <Layers className="w-3.5 h-3.5 text-pink-500" />
                    <span>Methodology</span>
                  </div> */}
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                    Our Approach
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    We believe great work starts before development or marketing begins.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">

                  {/* Phase 01 */}
                  <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-pink-50/40 via-white to-white border border-pink-100 shadow-xs hover:shadow-xl hover:border-pink-300/80 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between h-full group overflow-hidden">
                    <div className="space-y-4 flex-grow flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        {/* <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold shadow-2xs group-hover:scale-110 transition-transform">
                          <Search className="w-5 h-5" />
                        </div> */}
                        {/* <span className="text-[10px] font-mono font-bold text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">
                          Phase 01
                        </span> */}
                        <span className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 font-mono text-xs font-bold flex items-center justify-center border border-pink-100 shadow-2xs">
                          01
                        </span>
                      </div>
                      <div className="space-y-2 pt-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          Listening &amp; Understanding
                        </h3>
                        <p className="text-slate-600 text-xs leading-relaxed font-normal">
                          Our approach begins with listening and understanding. We look at the business model, audience, market, competition and objectives before defining a direction.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phase 02 */}
                  <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-50/40 via-white to-white border border-purple-100 shadow-xs hover:shadow-xl hover:border-purple-300/80 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between h-full group overflow-hidden">
                    <div className="space-y-4 flex-grow flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        {/* <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold shadow-2xs group-hover:scale-110 transition-transform">
                          <Zap className="w-5 h-5" />
                        </div> */}
                        {/* <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
                          Phase 02
                        </span> */}
                        <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 font-mono text-xs font-bold flex items-center justify-center border border-purple-100 shadow-2xs">
                          02
                        </span>
                      </div>
                      <div className="space-y-2 pt-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          Unified Combination
                        </h3>
                        <p className="text-slate-600 text-xs leading-relaxed font-normal">
                          From there, we bring together the right combination of strategy, design, technology and digital marketing to build a cohesive digital roadmap for your business.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phase 03 */}
                  <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/40 via-white to-white border border-indigo-100 shadow-xs hover:shadow-xl hover:border-indigo-300/80 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between h-full group overflow-hidden">
                    <div className="space-y-4 flex-grow flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shadow-2xs group-hover:scale-110 transition-transform">
                          <Globe className="w-5 h-5" />
                        </div>
                        <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 font-mono text-xs font-bold flex items-center justify-center border border-indigo-100 shadow-2xs">
                          03
                        </span>
                      </div>
                      <div className="space-y-2 pt-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          Connected Experiences
                        </h3>
                        <p className="text-slate-600 text-xs leading-relaxed font-normal">
                          This approach allows us to create connected digital experiences—structuring websites for SEO, aligning social media, extending mobile apps, and running digital campaigns.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>

              {/* Bottom Quote Highlight Banner */}
              {/* <ScrollReveal direction="up" delay={200}>
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-pink-50/80 via-purple-50/50 to-indigo-50/60 border-l-4 border-l-pink-500 border-y border-r border-pink-200/70 shadow-xs flex items-center gap-3.5 text-left">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center shrink-0">
                    <Quote className="w-4.5 h-4.5" />
                  </div>
                  <p className="text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wide leading-relaxed">
                    Everything has a role, and every role should contribute to the bigger picture.
                  </p>
                </div>
              </ScrollReveal> */}
            </div>


            {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-slate-100">
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal direction="up">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Capability Overview</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={100}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    What We Bring to the Table
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                  <div className="space-y-4 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    <p className="font-semibold text-slate-800">
                      Digital Raiz brings diverse digital capabilities together within one ecosystem.
                    </p>
                    <p>
                      Our digital marketing and SEO expertise helps businesses build visibility and connect with relevant audiences. Our social media capabilities help brands communicate consistently and create stronger digital engagement.
                    </p>
                    <p>
                      Our technology teams work across website design and development, custom web applications and mobile app development, creating digital products that are designed around usability, performance and scalability.
                    </p>
                    <p className="text-slate-800 font-medium">
                      This combination gives our clients the advantage of working with a team that understands both the technology and the digital environment in which it needs to perform.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <ScrollReveal direction="up" delay={200} className="w-full">
                  <div className="relative w-full rounded-3xl p-7 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-800 shadow-xl space-y-6 text-center overflow-hidden">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl flex items-center justify-center p-3">
                      <Image
                        src="/logo/logo-without-txt.webp"
                        alt="Digital Raiz Logo Mark"
                        width={90}
                        height={90}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black uppercase tracking-tight text-white">Digital Raiz Ecosystem</h3>
                      <p className="text-slate-300 text-xs font-light leading-relaxed">
                        Understands both the technology and the digital environment in which it needs to perform.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div> */}

            {/* WHAT DRIVES US (5 PRINCIPLES) */}
            <div className="space-y-8 pt-8 border-t border-slate-100">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-mono font-bold text-purple-600 uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  <span>Our Principles</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  What Drives Us
                </h2>
                <p className="text-slate-600 text-xs font-medium">
                  Technology is constantly changing, but our principles remain consistent.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {principles.map((p, idx) => (
                  <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full">
                    <div className={`rounded-2xl p-5 bg-gradient-to-br ${p.color} border ${p.border} shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group space-y-3`}>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        {p.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{p.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed font-normal">{p.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal direction="up" delay={300}>
                <p className="text-center text-xs text-slate-500 font-mono">
                  These principles influence how we communicate with clients, approach challenges and build solutions.
                </p>
              </ScrollReveal>
            </div>

            {/* EXPLORING THE POSSIBILITIES OF AI */}
            <div className="pt-8 border-t border-slate-100">
              <ScrollReveal direction="up">
                <div className="rounded-lg p-8 sm:p-10 bg-gradient-to-br from-pink-50/70 via-purple-50/40 to-indigo-50/60 border border-pink-200/80 shadow-md space-y-6 relative overflow-hidden">
                  <div className="space-y-4 relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[10px] font-mono font-bold text-pink-700 uppercase tracking-widest">
                      <Bot className="w-3.5 h-3.5" />
                      <span>Emerging Technology</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
                      Exploring the <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Possibilities of AI</span>
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      Technology continues to reshape how businesses operate, and Artificial Intelligence is becoming an important part of that evolution. At Digital Raiz, we explore practical ways to bring AI into digital products, business processes and customer experiences.
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      From intelligent automation and AI-powered applications to data-driven insights and smart digital experiences, we look at where emerging technology can create genuine business value.
                    </p>
                    {/* <div className="p-4 rounded-xl bg-white border border-pink-200/80 text-pink-700 font-semibold text-xs sm:text-sm shadow-2xs">
                      Our approach is simple: use AI where it solves a real problem, improves an experience or creates a meaningful advantage.
                    </div> */}
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* PANORAMIC SHOWCASE BANNER SLIDER */}
        <section className="py-4 bg-white border-y border-slate-200/80 overflow-hidden">
          <BannerSlider />
        </section>

        {/* GROWING FROM HYDERABAD & THE DIGITAL RAIZ DIFFERENCE */}
        <section className="py-10 sm:py-10 bg-white relative">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-16">
            <ScrollReveal direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Narrative */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600">
                    <Globe className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Regional Foundation &amp; Beyond</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                    Growing from Hyderabad,{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      Thinking Beyond
                    </span>
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    Hyderabad is an important part of our journey. It is a city shaped by technology, entrepreneurship and an increasingly ambitious business community.
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    From here, Digital Raiz works with businesses looking to strengthen their digital presence and embrace new possibilities through technology.
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    While our foundation is in Hyderabad, our thinking is not limited by geography. Digital businesses can reach audiences across India and around the world, and we approach our work with that wider potential in mind.
                  </p>

                  {/* The Digital Raiz Difference Box */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2 shadow-xs">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">The Digital Raiz Difference</h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      We do not believe there is a universal formula for digital success. Every business has its own challenges, customers and ambitions. Our responsibility is to understand those differences and create a solution that feels right for that particular business.
                    </p>
                    <p className="text-slate-700 text-xs font-semibold pt-1">
                      That is what we strive to bring to every engagement—a thoughtful strategy, purposeful technology, creative execution and a partnership built on trust.
                    </p>
                  </div>
                </div>

                {/* Right Visual Image Showcase */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="p-3 rounded-3xl bg-white">
                    <img
                      src="/about/hyderabad-it-hub-network-white.png"
                      alt="Digital Raiz Hyderabad HQ &amp; Global Reach"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* OUR COMMITMENT TO EVERY CLIENT */}
            {/* <ScrollReveal direction="up" delay={100}>
              <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-pink-50/60 via-purple-50/30 to-indigo-50/40 border border-slate-200/80 shadow-2xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-md shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest block">Client Guarantee</span>
                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Our Commitment to Every Client</h2>
                  </div>
                </div>
                <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    We see every engagement as a partnership rather than simply a project.
                  </p>
                  <p>
                    We take time to understand requirements, communicate clearly and build solutions with long-term usability in mind. We believe clients should understand not only what we are building, but why we are building it.
                  </p>
                  <p className="font-semibold text-slate-800">
                    Whether the requirement involves digital marketing in Hyderabad, SEO, social media, website development, web applications or mobile applications, our commitment remains the same: deliver thoughtful work that aligns with the business and creates genuine value.
                  </p>
                </div>
              </div>
            </ScrollReveal> */}
          </div>
        </section>

        {/* EXECUTIVE LIGHT CTA SECTION — CREATING WHAT COMES NEXT */}
        {/* <section className="py-14 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <ScrollReveal direction="up">
              <div className="rounded-3xl bg-gradient-to-r from-pink-50/80 via-purple-50/40 to-indigo-50/80 p-8 sm:p-12 text-slate-900 border border-pink-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden">
                <div className="space-y-3 text-center sm:text-left relative z-10 max-w-xl">
                  <span className="text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest block">Creating What Comes Next</span>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">Digital Raiz</h2>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    The future belongs to businesses that are willing to adapt, experiment and keep moving forward. At Digital Raiz, we want to be part of that journey. From a first digital idea to a complete digital ecosystem, we help businesses turn possibilities into something real.
                  </p>
                  <p className="text-pink-600 font-bold text-xs sm:text-sm pt-1">
                    Digital Raiz — where ideas meet strategy, technology and possibility.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 shrink-0 relative z-10">
                  <button
                    onClick={() => openContactModal("General Agency Inquiry")}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Connect With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                  >
                    <span>Our Services</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section> */}

      </main>

      <Footer />
    </div>
  );
}
