import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Search, Eye, Users2, ShieldCheck, MailOpen, LineChart, Sparkles } from "lucide-react";

export const metadata = {
  title: "Digital Marketing & SEO Services | DigitalRaiz",
  description: "Search Engine Optimization (SEO), PPC search campaigns, social media growth, lead acquisition strategies, and conversion tracking.",
};

export default function MarketingServicePage() {
  const capabilities = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Comprehensive on-page, technical, and off-page SEO setups to drive search rankings and organic click acquisition.",
      icon: <Search className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Pay-Per-Click (PPC) Campaigns",
      desc: "Paid search engine, social channel, and network display ads structured to hit target conversion costs.",
      icon: <TrendingUp className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Social Media Growth",
      desc: "Strategic community building, asset creation, and audience targeting across LinkedIn, Instagram, and Facebook.",
      icon: <Users2 className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Conversion Optimization (CRO)",
      desc: "Analytics integrations, user scroll mapping, and A/B layouts to transform baseline traffic into verified leads.",
      icon: <LineChart className="w-5 h-5 text-indigo-500" />
    }
  ];

  const focusAreas = [
    { name: "Technical Audit", desc: "Core Web Vitals & speed" },
    { name: "PPC Management", desc: "AdWords & Meta budgets" },
    { name: "Inbound Marketing", desc: "Authority content funnels" },
    { name: "E-commerce Growth", desc: "Cart recovery & retargeting" },
    { name: "Reporting Dashboards", desc: "Google Analytics & Looker" },
    { name: "Local SEO & Map Pack", desc: "Regional visibility metrics" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-emerald-50/5 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="space-y-6 flex-grow max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                <BarChart3 className="w-3.5 h-3.5" />
                Core Capability
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
                Digital Marketing
              </h1>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed text-justify font-light">
                We align digital strategy, on-page optimization, and campaign execution to your business revenue goals. We eliminate empty clicks, focusing instead on high-intent search acquisition and conversion funnels.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1.5 py-3 px-6 rounded-xl bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-800 transition-transform active:scale-98"
                >
                  <span>Grow Your Business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Tech Visual Console */}
            <div className="w-full lg:w-[420px] shrink-0 bg-slate-950 rounded-2xl p-6 border border-slate-800/80 shadow-2xl text-white font-mono space-y-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <div className="w-3 h-3 rounded-full bg-pink-500" />
              </div>
              <div className="text-xs text-slate-400 space-y-2 border-t border-slate-800 pt-4">
                <p className="text-emerald-400"># campaign_performance_targets</p>
                <p>const ROITargets = &#123;</p>
                <p className="pl-4">organicTrafficGain: &quot;+140%&quot;,</p>
                <p className="pl-4">conversionRateOptimization: true,</p>
                <p className="pl-4 text-slate-500">// Real-time attribution tracking</p>
                <p className="pl-4">dataFunnels: [&quot;GA4&quot;, &quot;Looker Studio&quot;]</p>
                <p>&#125;;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Detailed Capabilities Grid */}
        <section className="py-16 bg-white/40">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] block">Our Focus</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-850">Data-Driven Growth Strategies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-2xs hover:shadow-xs transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {cap.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">{cap.title}</h3>
                    <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-light">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Banner */}
        <section className="py-16 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-8">
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">Marketing Core Focus Areas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {focusAreas.map((area, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 text-center space-y-1.5 shadow-3xs">
                  <span className="text-xs font-bold text-slate-800 block">{area.name}</span>
                  <span className="text-[9px] text-slate-400 block font-light leading-none">{area.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-12 bg-gradient-to-r from-emerald-500 to-indigo-600 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col sm:flex-row gap-6 justify-between items-center relative z-10">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">Need More Qualified Leads?</h3>
              <p className="text-white/85 text-xs font-light max-w-lg">Get a custom, complimentary search ranking and speed audit for your existing domain from our SEO leads.</p>
            </div>
            <Link 
              href="/contact" 
              className="py-3 px-6 rounded-xl bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-50 transition-transform active:scale-98"
            >
              Get Domain Audit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
