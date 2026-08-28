"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Video, 
  Target, 
  Award, 
  CheckCircle2, 
  Camera, 
  Play, 
  Share2, 
  Zap, 
  ExternalLink,
  Flame,
  MessageCircle,
  Eye,
  Heart
} from "lucide-react";



export default function InfluencerMarketingPage() {
  const stats = [
    { value: "500+", label: "Verified Creators", color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-200/60" },
    { value: "50M+", label: "Total Impressions", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200/60" },
    { value: "4.2x", label: "Average Campaign ROAS", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200/60" },
    { value: "98%", label: "Brand Retention Rate", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200/60" },
  ];

  const influencerServices = [
    {
      title: "Creator Discovery & Matchmaking",
      desc: "Data-driven influencer selection matching your target demographics, niche audience interest, engagement rates, and authentic brand voice.",
      tag: "Audience Target",
      icon: <Target className="w-5 h-5 text-pink-500" />,
      color: "from-pink-50 to-pink-100/30",
      accent: "border-pink-200/60 text-pink-700"
    },
    {
      title: "UGC & Short-Video Reels",
      desc: "High-converting User Generated Content (UGC), Instagram Reels, YouTube Shorts, and unboxing videos crafted to drive instant user action.",
      tag: "Content Engine",
      icon: <Video className="w-5 h-5 text-violet-500" />,
      color: "from-violet-50 to-violet-100/30",
      accent: "border-violet-200/60 text-violet-700"
    },
    {
      title: "End-to-End Campaign Management",
      desc: "We handle creator contracts, script briefs, product seeding, compliance, posting timelines, and approval workflows seamlessly.",
      tag: "Full Execution",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-50 to-emerald-100/30",
      accent: "border-emerald-200/60 text-emerald-700"
    },
    {
      title: "Real Estate & Niche Influencers",
      desc: "Specialized regional creator networks tailored for real estate properties, healthcare, tech products, e-commerce, and B2B services.",
      tag: "Industry Niche",
      icon: <Award className="w-5 h-5 text-amber-500" />,
      color: "from-amber-50 to-amber-100/30",
      accent: "border-amber-200/60 text-amber-700"
    },
    {
      title: "Performance Tracking & ROAS",
      desc: "Transparent dashboard analytics tracking real-time click-through rates, custom promo code conversions, reach velocity, and true ROI.",
      tag: "Analytics",
      icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-50 to-indigo-100/30",
      accent: "border-indigo-200/60 text-indigo-700"
    },
    {
      title: "Brand Ambassador Programs",
      desc: "Building long-term, multi-month brand ambassador partnerships that establish continuous credibility and long-term customer trust.",
      tag: "Long-Term Affinity",
      icon: <Share2 className="w-5 h-5 text-rose-500" />,
      color: "from-rose-50 to-rose-100/30",
      accent: "border-rose-200/60 text-rose-700"
    }
  ];

  const creatorTiers = [
    {
      tier: "Nano & Micro Creators",
      followers: "10K - 100K Followers",
      perk: "Highest Engagement & Local Trust",
      bestFor: "Hyper-local campaigns, app installs & niche products",
      badge: "High Conversion",
      badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      tier: "Macro Influencers",
      followers: "100K - 1M Followers",
      perk: "Massive Organic Reach & Authority",
      bestFor: "Brand awareness, product launches & regional reach",
      badge: "High Impact",
      badgeBg: "bg-pink-50 text-pink-600 border-pink-200"
    },
    {
      tier: "Celebrity & Mega Talent",
      followers: "1M+ Followers",
      perk: "Industry Stardom & National Prestige",
      bestFor: "National brand building & major real estate showcases",
      badge: "Maximum Visibility",
      badgeBg: "bg-violet-50 text-violet-600 border-violet-200"
    }
  ];

  const workflowSteps = [
    { step: "01", title: "Strategy & Niche Mapping", desc: "Define campaign KPIs, target demographics, creator style, and offer funnels." },
    { step: "02", title: "Creator Shortlisting", desc: "Match vetted influencers with high audience engagement and authentic brand alignment." },
    { step: "03", title: "Creative Brief & Seeding", desc: "Provide detailed content briefs, product samples, and key brand messaging guidelines." },
    { step: "04", title: "Live Multi-Channel Launch", desc: "Synchronized posting across Instagram, YouTube, and LinkedIn for peak impact." },
    { step: "05", title: "Analytics & ROI Reporting", desc: "Detailed breakdown of reach, conversions, engagement rate, and attribution metrics." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">

        {/* HERO SECTION — Clean Light Split Layout */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10">

            {/* Top Eyebrow Row */}
            <div className="flex items-center justify-between pt-10 pb-6 border-b border-slate-100/80">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-200/60 text-[9px] font-bold uppercase tracking-[0.2em] text-pink-600">
                <Sparkles className="w-3 h-3" />
                Influencer & Creator Marketing Agency
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[9px] text-slate-400 font-mono uppercase tracking-widest">
                <span>DigitalRaiz</span>
                <span>/</span>
                <span className="text-pink-500 font-bold">Influencer Marketing</span>
              </div>
            </div>

            {/* Main Content Split */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center py-10 lg:py-14">

              {/* LEFT — Typography & Action CTAs */}
              <div className="flex-grow space-y-7 text-center lg:text-left max-w-[540px]">
                <h1 className="space-y-1">
                  <span className="block text-[10px] font-semibold text-slate-400 tracking-[0.3em] uppercase">Scale Your Reach & Sales</span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-black uppercase tracking-tight text-[#1e1b4b] leading-[0.95]">
                    Influencer
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-black uppercase tracking-tight leading-[0.95] bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    Marketing
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-black uppercase tracking-tight text-slate-200 leading-[0.95]">
                    Campaigns
                  </span>
                </h1>

                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-light max-w-md mx-auto lg:mx-0 text-justify">
                  Connect your brand with top-performing creators, influencers, and industry voices. We design end-to-end influencer campaigns that drive viral engagement, brand trust, and direct sales conversions.
                </p>

                {/* Inline Stat Pills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                  {stats.map((s) => (
                    <div key={s.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${s.bg} border ${s.border}`}>
                      <span className={`text-[10px] font-black ${s.color}`}>{s.value}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 py-3 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-sm"
                  >
                    <span>Launch Influencer Campaign</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                  <button
                    onClick={() => {
                      const element = document.getElementById("creator-services");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2.5 py-3 px-7 rounded-xl bg-transparent hover:bg-slate-50 border border-slate-200 hover:border-pink-300 text-slate-600 hover:text-pink-600 text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>Explore Services</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* RIGHT — Interactive Live Creator Dashboard Card */}
              <div className="relative w-full lg:w-[480px] shrink-0 flex justify-center">
                <div className="w-full bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.2)] space-y-5 relative overflow-hidden">
                  
                  {/* Top Bar Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-300">Live Campaign Tracker</span>
                    </div>
                    <span className="text-[9px] font-mono bg-pink-500/20 text-pink-400 border border-pink-500/30 rounded-full px-2.5 py-0.5 uppercase font-bold">Active</span>
                  </div>

                  {/* Creator Card Preview */}
                  <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-400 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-black text-xs text-pink-400">
                          DR
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          @digitalraiz_creators
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        <div className="text-[9px] text-slate-400 font-mono">Tech & Lifestyle Creator Network</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-emerald-400">+124.8%</div>
                      <div className="text-[8px] text-slate-400 font-mono uppercase">Reach Growth</div>
                    </div>
                  </div>

                  {/* Campaign Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-800 text-center space-y-1">
                      <div className="flex justify-center text-pink-400"><Eye className="w-4 h-4" /></div>
                      <div className="text-sm font-black text-white">2.4M</div>
                      <div className="text-[8px] font-mono text-slate-400 uppercase">Impressions</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-800 text-center space-y-1">
                      <div className="flex justify-center text-violet-400"><Heart className="w-4 h-4" /></div>
                      <div className="text-sm font-black text-white">186K</div>
                      <div className="text-[8px] font-mono text-slate-400 uppercase">Engagements</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-800 text-center space-y-1">
                      <div className="flex justify-center text-emerald-400"><Flame className="w-4 h-4" /></div>
                      <div className="text-sm font-black text-emerald-400">4.8x</div>
                      <div className="text-[8px] font-mono text-slate-400 uppercase">ROAS Target</div>
                    </div>
                  </div>

                  {/* Channel Badges Strip */}
                  <div className="flex items-center justify-between pt-2 text-[9px] font-mono text-slate-400 border-t border-slate-800/80">
                    <span className="flex items-center gap-1"><Camera className="w-3.5 h-3.5 text-pink-400" /> Instagram Reels</span>
                    <span className="flex items-center gap-1"><Play className="w-3.5 h-3.5 text-red-500" /> YouTube Shorts</span>
                    <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5 text-indigo-400" /> LinkedIn B2B</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* PLATFORM MARQUEE TICKER */}
        <section className="py-5 bg-slate-50 border-b border-slate-100 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-wrap items-center justify-between gap-6">
            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">Supported Creator Platforms</span>
            <div className="flex flex-wrap items-center gap-8 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <span className="flex items-center gap-2 hover:text-pink-600 transition-colors"><Camera className="w-4 h-4 text-pink-500" /> Instagram Reels</span>
              <span className="flex items-center gap-2 hover:text-red-600 transition-colors"><Play className="w-4 h-4 text-red-600" /> YouTube Shorts & Vlogs</span>
              <span className="flex items-center gap-2 hover:text-indigo-600 transition-colors"><Share2 className="w-4 h-4 text-indigo-600" /> LinkedIn Thought Leaders</span>
              <span className="flex items-center gap-2 hover:text-violet-600 transition-colors"><Zap className="w-4 h-4 text-violet-500" /> Regional & Micro Creators</span>
            </div>
          </div>
        </section>

        {/* CORE INFLUENCER SERVICES GRID */}
        <section id="creator-services" className="py-16 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                End-To-End Influencer Solutions
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                Complete Creator Campaign Ecosystem
              </h2>
              <p className="text-slate-500 text-xs font-light max-w-xl mx-auto">
                From strategy and creator selection to content publishing and live sales tracking — we manage everything.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {influencerServices.map((svc, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${svc.color} border border-slate-200/60 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-5`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                        {svc.icon}
                      </div>
                      <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border ${svc.accent}`}>
                        {svc.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-black uppercase tracking-tight text-[#1e1b4b]">
                        {svc.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-light text-justify">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/40 flex items-center gap-1.5 text-[9px] font-bold text-pink-600 uppercase tracking-wider">
                    <span>Managed By DigitalRaiz</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CREATOR TIERS & INFLUENCER MATRIX */}
        <section className="py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">

            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-violet-600 block">Tiered Talent Matrix</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                Creator Tiers Tailored to Your Goals
              </h2>
              <p className="text-slate-500 text-xs font-light">
                Whether you need high-conversion micro-creators or national celebrity endorsements, we have verified talent pools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {creatorTiers.map((tier, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-5 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <span className={`text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${tier.badgeBg} inline-block`}>
                      {tier.badge}
                    </span>
                    <div>
                      <h3 className="text-base font-black uppercase tracking-tight text-[#1e1b4b]">{tier.tier}</h3>
                      <div className="text-xs font-bold text-pink-600 font-mono mt-0.5">{tier.followers}</div>
                    </div>
                    <div className="space-y-2 text-xs text-slate-500 font-light">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Advantage:</strong> {tier.perk}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span><strong>Best For:</strong> {tier.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#1e1b4b] text-[9px] font-black uppercase tracking-wider text-center block transition-colors"
                  >
                    Select Creator Tier
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* STEP-BY-STEP CAMPAIGN WORKFLOW */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-pink-600 block">Execution Framework</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                How We Run Your Influencer Campaign
              </h2>
              <p className="text-slate-500 text-xs font-light">
                Our structured 5-step process ensures zero hassle and maximum campaign performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {workflowSteps.map((ws, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs space-y-3 relative">
                  <div className="text-2xl font-black font-mono text-pink-500/40">{ws.step}</div>
                  <h3 className="text-xs font-bold uppercase tracking-tight text-[#1e1b4b]">{ws.title}</h3>
                  <p className="text-slate-500 text-[11px] font-light leading-relaxed">{ws.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="py-14 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col sm:flex-row gap-8 justify-between items-center relative z-10">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-pink-200 block">Ready To Scale With Creators?</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Launch Your Custom Influencer Campaign</h3>
              <p className="text-white/85 text-xs font-light max-w-xl">
                Get in touch with our Influencer Strategists today to receive a tailored creator roster and custom campaign proposal for your brand.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="py-3.5 px-8 rounded-2xl bg-white text-[#1e1b4b] text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              Get Campaign Proposal
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
