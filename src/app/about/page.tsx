import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Target,
  Compass,
  Lightbulb,
  Cpu,
  ShieldCheck,
  Zap,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Search,
  Share2,
  Code2,
  Smartphone,
  Layers,
  HeartHandshake,
  Bot,
  BrainCircuit,
  BarChart3,
  ExternalLink,
  Award
} from "lucide-react";
import BannerSlider from "@/components/BannerSlider";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AiExplorerSection from "@/components/about/AiExplorerSection";

export const metadata = {
  title: "About Digital Raiz | Digital & Technology Company in Hyderabad",
  description:
    "Learn about Digital Raiz, a Hyderabad-based digital and technology company delivering digital marketing, SEO, web development and mobile app solutions for growing businesses.",
  alternates: {
    canonical: "https://digitalraiz.com/about-us/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const corePrinciples = [
    {
      title: "Curiosity",
      desc: "Keeps us learning and exploring new technical frontiers.",
      icon: <Lightbulb className="w-5 h-5 text-pink-500" />,
      color: "from-pink-50 to-pink-100/30",
      borderColor: "border-pink-200/60 text-pink-700",
    },
    {
      title: "Creativity",
      desc: "Helps us look beyond conventional solutions to solve challenges.",
      icon: <Zap className="w-5 h-5 text-violet-500" />,
      color: "from-violet-50 to-violet-100/30",
      borderColor: "border-violet-200/60 text-violet-700",
    },
    {
      title: "Clarity",
      desc: "Keeps our work sharply focused on the real business objective.",
      icon: <Target className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-50 to-indigo-100/30",
      borderColor: "border-indigo-200/60 text-indigo-700",
    },
    {
      title: "Quality",
      desc: "Shapes the way we design, develop, test, and deliver digital products.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-50 to-emerald-100/30",
      borderColor: "border-emerald-200/60 text-emerald-700",
    },
    {
      title: "Partnership",
      desc: "Reminds us that successful digital outcomes are built together.",
      icon: <HeartHandshake className="w-5 h-5 text-amber-500" />,
      color: "from-amber-50 to-amber-100/30",
      borderColor: "border-amber-200/60 text-amber-700",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">

        {/* HERO SECTION — Mobile App Page Aligned Layout */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100 py-10 lg:py-14">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

              {/* LEFT — H1 & Intro Story */}
              <ScrollReveal direction="left" className="flex-grow space-y-6 text-center lg:text-left max-w-[620px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-pink-500" />
                  Shaping Ideas into Digital Possibilities
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  About Digital{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Raiz Technologies
                  </span>{" "}
                  Hyderabad &amp; Global
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Digital Raiz is a technology and digital solutions company based in Hyderabad, bringing together strategy, creativity, and technology to help businesses move forward in a digital-first world.
                </p>

                <p className="text-slate-600 text-xs leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                  Our work spans digital marketing, SEO, social media marketing, website development, web application development, and mobile app development. What defines us is the way we approach every challenge: with curiosity, clarity, and a deep understanding of the business behind the requirement.
                </p>

                {/* Key Pillars Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="w-7 h-7 rounded-lg bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-black text-[#1e1b4b] block leading-tight">Purpose-Driven Tech</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Real Impact</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="w-7 h-7 rounded-lg bg-violet-50 border border-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-black text-[#1e1b4b] block leading-tight">Strategy-First</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Measurable</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Globe2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-black text-[#1e1b4b] block leading-tight">Global Reach</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Hyderabad Base</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-sm"
                  >
                    <span>Start Your Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* RIGHT — Brand Image Showcase Container */}
              <ScrollReveal direction="right" delay={150} className="w-full lg:w-[460px] shrink-0 flex justify-center items-center">
                <img
                  src="/about/digital-raiz-technologies-showcase-1200x900-source.png"
                  alt="Digital Raiz Technologies Showcase"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* OUR VISION & MISSION SECTION */}
        <section className="py-14 bg-white relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-10">

            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600">
                  <Compass className="w-3.5 h-3.5" />
                  Strategic Foundation
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Our Vision &amp;{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
                  Driven by long-term purpose, technological adaptability, and measurable business outcomes.
                </p>
              </div>
            </ScrollReveal>

            {/* 2-Column Studio Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Card 1: Our Vision */}
              <ScrollReveal direction="up" delay={100} className="h-full">
                <div className="p-7 rounded-2xl bg-gradient-to-br from-pink-50/60 to-pink-100/30 border border-slate-200/70 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-5 group h-full relative overflow-hidden">
                  <div className="absolute top-4 right-6 text-7xl font-black text-pink-500/5 select-none pointer-events-none group-hover:text-pink-500/10 transition-colors">
                    VISION
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center text-pink-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Compass className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-pink-200/60 text-pink-700">
                        Future Direction
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                        Our Vision
                      </h3>
                      <p className="text-slate-650 font-medium text-xs sm:text-sm leading-relaxed">
                        Our vision is to build a digital ecosystem where businesses can use technology not just to keep pace with change, but to create new opportunities. We aspire to become a trusted technology and digital growth partner for businesses in Hyderabad and beyond, known for thoughtful solutions, meaningful experiences, and work that creates lasting value.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex flex-wrap gap-2 relative z-10">
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-pink-200/60 text-[9px] font-mono font-bold text-pink-700 uppercase">
                      <CheckCircle2 className="w-3 h-3 text-pink-500" /> Digital Ecosystem
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-pink-200/60 text-[9px] font-mono font-bold text-pink-700 uppercase">
                      <CheckCircle2 className="w-3 h-3 text-pink-500" /> Lasting Growth
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: Our Mission */}
              <ScrollReveal direction="up" delay={200} className="h-full">
                <div className="p-7 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-indigo-100/30 border border-slate-200/70 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-5 group h-full relative overflow-hidden">
                  <div className="absolute top-4 right-6 text-7xl font-black text-indigo-500/5 select-none pointer-events-none group-hover:text-indigo-500/10 transition-colors">
                    MISSION
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Target className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-indigo-200/60 text-indigo-700">
                        Purpose &amp; Action
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        Our Mission
                      </h3>
                      <p className="text-slate-650 font-medium text-xs sm:text-sm leading-relaxed">
                        Our mission is to make digital transformation more purposeful and accessible for businesses. We combine strategic thinking with creative execution and reliable technology to solve practical business challenges. Whether a business needs greater online visibility, a stronger digital identity, a new website, or a mobile application, we aim to create solutions that are relevant to its goals and built for its future.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex flex-wrap gap-2 relative z-10">
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-indigo-200/60 text-[9px] font-mono font-bold text-indigo-700 uppercase">
                      <CheckCircle2 className="w-3 h-3 text-indigo-500" /> Purposeful Impact
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-indigo-200/60 text-[9px] font-mono font-bold text-indigo-700 uppercase">
                      <CheckCircle2 className="w-3 h-3 text-indigo-500" /> Practical Solutions
                    </span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* 4-STEP PROCESS ROADMAP — OUR APPROACH */}
        <section className="py-12 bg-slate-50/60 border-y border-slate-100 relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-10">

            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600">
                  <Search className="w-3.5 h-3.5" />
                  Methodology &amp; Execution
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Our{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Approach
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
                  We believe great work starts before development or marketing begins — by listening, understanding, and connecting every digital element.
                </p>
              </div>
            </ScrollReveal>

            {/* 4-Step Process Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* Step 1 */}
              <ScrollReveal direction="up" delay={100} className="h-full">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-pink-300 hover:shadow-lg transition-all duration-300 space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100 uppercase tracking-wider">
                        STEP 01
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-pink-500 group-hover:scale-105 transition-transform">
                        <Search className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
                        Discovery &amp; Listening
                      </h3>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed">
                        Analyzing your business model, audience, market, and competition before defining a technical direction.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal direction="up" delay={150} className="h-full">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-violet-300 hover:shadow-lg transition-all duration-300 space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-100 uppercase tracking-wider">
                        STEP 02
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-violet-500 group-hover:scale-105 transition-transform">
                        <Code2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-violet-600 transition-colors">
                        SEO Web Architecture
                      </h3>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed">
                        Building responsive website frameworks structured with SEO best practices from day one.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal direction="up" delay={200} className="h-full">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-300 hover:shadow-lg transition-all duration-300 space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 uppercase tracking-wider">
                        STEP 03
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-500 group-hover:scale-105 transition-transform">
                        <Smartphone className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        App &amp; Platform Build
                      </h3>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed">
                        Developing custom web apps and mobile applications for seamless customer engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 4 */}
              <ScrollReveal direction="up" delay={250} className="h-full">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all duration-300 space-y-4 group h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase tracking-wider">
                        STEP 04
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        Growth &amp; Positioning
                      </h3>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed">
                        Executing targeted digital marketing campaigns guiding audiences along a designed journey.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* CORE VALUES — WHAT DRIVES US */}
        <section className="py-14 bg-white relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-10">

            <ScrollReveal direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono font-bold uppercase tracking-widest text-pink-600">
                  <Lightbulb className="w-3.5 h-3.5" />
                  Core Values
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  What{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Drives Us
                  </span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
                  Technology is constantly changing, but our principles remain consistent.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {corePrinciples.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 80} direction="up" className="h-full">
                  <div
                    className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} border border-slate-200/70 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between space-y-4 group h-full`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-650 font-medium text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* AI POSSIBILITIES SECTION — Interactive Studio Explorer */}
        <AiExplorerSection />

        {/* WHAT WE BRING & OUR COMMITMENT */}
        <section className="py-10 bg-white relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full space-y-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* What We Bring */}
              <ScrollReveal direction="up" delay={100} className="h-full">
                <div className="p-7 rounded-2xl bg-gradient-to-br from-pink-50/60 to-pink-100/30 border border-slate-200/70 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-4 group h-full">
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-pink-200/60 text-pink-700 inline-block">
                      Integrated Ecosystem
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                      What We Bring to the Table
                    </h3>
                    <p className="text-slate-650 font-medium text-xs sm:text-sm leading-relaxed">
                      Digital Raiz brings diverse digital capabilities together within one ecosystem. Our digital marketing and SEO expertise helps businesses build visibility and connect with relevant audiences. Our social media capabilities help brands communicate consistently and create stronger digital engagement. Our technology teams work across website design and development, custom web applications, and mobile app development, creating digital products designed around usability, performance, and scalability. This gives our clients the advantage of working with a team that understands both technology and the digital environment.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Our Commitment */}
              <ScrollReveal direction="up" delay={200} className="h-full">
                <div className="p-7 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-indigo-100/30 border border-slate-200/70 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-4 group h-full">
                  <div className="space-y-3">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-indigo-200/60 text-indigo-700 inline-block">
                      Long-Term Partnership
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      Our Commitment to Every Client
                    </h3>
                    <p className="text-slate-650 font-medium text-xs sm:text-sm leading-relaxed">
                      We see every engagement as a partnership rather than simply a project. We take time to understand requirements, communicate clearly, and build solutions with long-term usability in mind. We believe clients should understand not only what we are building, but why we are building it. Whether the requirement involves digital marketing in Hyderabad, SEO, social media, website development, web applications, or mobile applications, our commitment remains the same: deliver thoughtful work that aligns with the business and creates genuine value.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* HYDERABAD ROOTS & GLOBAL THINKING */}
        <section className="py-10 bg-white relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full">
            <ScrollReveal direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Narrative */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600">
                    <Globe2 className="w-3.5 h-3.5 text-indigo-500" />
                    Regional Foundation &amp; Beyond
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Growing from Hyderabad,{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      Thinking Beyond
                    </span>
                  </h2>

                  <p className="text-slate-650 text-xs sm:text-sm font-normal leading-relaxed">
                    Hyderabad is an important part of our journey. It is a city shaped by technology, entrepreneurship, and an increasingly ambitious business community. From here, Digital Raiz works with businesses looking to strengthen their digital presence and embrace new possibilities through technology.
                  </p>

                  <p className="text-slate-650 text-xs sm:text-sm font-normal leading-relaxed">
                    While our foundation is in Hyderabad, our thinking is not limited by geography. Digital businesses can reach audiences across India and around the world, and we approach our work with that wider potential in mind.
                  </p>

                  {/* The Digital Raiz Difference Box */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2 shadow-xs">
                    <h3 className="text-sm font-extrabold text-slate-900">The Digital Raiz Difference</h3>
                    <p className="text-slate-650 text-xs leading-relaxed font-normal">
                      We do not believe there is a universal formula for digital success. Every business has its own challenges, customers, and ambitions. Our responsibility is to understand those differences and create a solution that feels right for that particular business.
                    </p>
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-[10px] font-mono text-slate-500">
                      <span>Thoughtful Strategy • Purposeful Tech</span>
                      <span className="font-extrabold text-pink-600 uppercase">Built on Trust</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual Image Showcase */}
                <div className="lg:col-span-5 flex justify-center">
                  <img
                    src="/about/hyderabad-it-hub-network-white.png"
                    alt="Digital Raiz Hyderabad HQ &amp; Global Reach"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>

              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CREATING WHAT COMES NEXT — Executive Dark Studio CTA Banner */}
        {/* <section className="py-10 bg-white relative overflow-hidden">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">
            <ScrollReveal direction="up">
              <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#090d16] rounded-3xl border border-violet-500/20 shadow-2xl p-7 sm:p-10 relative overflow-hidden text-white space-y-6">

              
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

        
                  <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-[9px] font-mono font-bold uppercase tracking-widest text-pink-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      Future-Ready Digital Partner
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                      Creating <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">What Comes Next</span>
                    </h2>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal max-w-xl">
                      The future belongs to businesses willing to adapt, experiment, and keep moving forward. At Digital Raiz, we help turn possibilities into something real — where ideas meet strategy, technology, and execution.
                    </p>

               
                    <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-[0_10px_25px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95 transition-all group"
                      >
                        <span>Start Your Digital Journey</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-[10px] font-extrabold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                      >
                        <span>Schedule Consultation</span>
                      </Link>
                    </div>
                  </div>

       
                  <div className="lg:col-span-5 flex justify-center">
                    <img
                      src="/about/digital-creation-rocket-growth-white.png"
                      alt="Digital Raiz Future Growth &amp; Strategy"
                      className="w-full max-h-[220px] sm:max-h-[260px] object-cover rounded-2xl"
                    />
                  </div>

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
