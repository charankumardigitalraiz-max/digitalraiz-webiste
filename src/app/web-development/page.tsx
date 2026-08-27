import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Code, Layout, Globe, Server, Cpu, Database, Flame, CheckCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Custom Web Development Services | DigitalRaiz",
  description: "High-performance web apps, portal design, headless CMS frameworks, and custom SaaS platforms built with Next.js, React, and Node.",
};

export default function WebServicePage() {
  const capabilities = [
    {
      title: "Custom Web Applications",
      desc: "Pixel-perfect, performance-optimized, and responsive web portals aligned to modern architectural standards.",
      icon: <Layout className="w-5 h-5 text-pink-500" />
    },
    {
      title: "E-Commerce & Marketplaces",
      desc: "Secure checkout systems, customized catalog management, and payment processor integrations.",
      icon: <Globe className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Headless CMS & Jamstack",
      desc: "Fast, SEO-friendly, and secure content frameworks using Next.js, Strapi, and static builds.",
      icon: <Flame className="w-5 h-5 text-pink-500" />
    },
    {
      title: "Back-End & API Engineering",
      desc: "Restful and GraphQL API layers, microservices architectures, and third-party portal integrations.",
      icon: <Server className="w-5 h-5 text-indigo-500" />
    }
  ];

  const techStack = [
    { name: "Next.js / React", desc: "Front-end SPA & SSR" },
    { name: "Node.js / Express", desc: "Back-end logic" },
    { name: "Tailwind CSS", desc: "Utility-first styling" },
    { name: "TypeScript", desc: "Typed JavaScript development" },
    { name: "PostgreSQL / MongoDB", desc: "Data storage" },
    { name: "Docker / AWS", desc: "Cloud orchestrations" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-pink-50/5 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="space-y-6 flex-grow max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-bold uppercase tracking-wider text-pink-600">
                <Code className="w-3.5 h-3.5" />
                Core Capability
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
                Web Development
              </h1>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed text-justify font-light">
                We engineer lightning-fast corporate portals, custom business applications, responsive corporate sites, and robust e-commerce solutions. Our design architectures emphasize search optimization, speed, security, and enterprise scaling.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1.5 py-3 px-6 rounded-xl bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-800 transition-transform active:scale-98"
                >
                  <span>Build Web App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Tech Visual Console */}
            <div className="w-full lg:w-[420px] shrink-0 bg-slate-950 rounded-2xl p-6 border border-slate-800/80 shadow-2xl text-white font-mono space-y-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="text-xs text-slate-400 space-y-2 border-t border-slate-800 pt-4">
                <p className="text-pink-400"># tech_stack_configuration</p>
                <p>const TechStack = [</p>
                {techStack.slice(0, 4).map((tech, i) => (
                  <p key={i} className="pl-4">
                    <span className="text-indigo-400">&quot;{tech.name}&quot;</span>, <span className="text-slate-500">// {tech.desc}</span>
                  </p>
                ))}
                <p>];</p>
              </div>
            </div>

          </div>
        </section>

        {/* Detailed Capabilities Grid */}
        <section className="py-16 bg-white/40">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.2em] block">Our Approach</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-850">Full-Stack Solutions Built with Precision</h2>
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
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">Our Modern Core Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 text-center space-y-1.5 shadow-3xs">
                  <span className="text-xs font-bold text-slate-800 block">{tech.name}</span>
                  <span className="text-[9px] text-slate-400 block font-light leading-none">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-12 bg-gradient-to-r from-pink-500 to-indigo-600 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col sm:flex-row gap-6 justify-between items-center relative z-10">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">Ready to build your web solution?</h3>
              <p className="text-white/85 text-xs font-light max-w-lg">Get in touch with our tech engineering leads for an interactive consultation and proposal.</p>
            </div>
            <Link 
              href="/contact" 
              className="py-3 px-6 rounded-xl bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-50 transition-transform active:scale-98"
            >
              Contact Engineering
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
