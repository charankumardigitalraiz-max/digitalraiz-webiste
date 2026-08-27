"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Code, Layout, Globe, Server, Cpu, Database, Flame, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, ShieldAlert, Sparkles, Terminal, Activity, Zap, RefreshCw } from "lucide-react";

export default function WebServicePage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const webPortfolio = [
    {
      name: "Sr Associates",
      url: "https://srimportexport.com/",
      img: "https://digitalraiz.com/uploads/portfolio/27113090177f02688143b9c4812bcd28.png",
      category: "Import Export"
    },
    {
      name: "Gselfi",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/24243c9467fa85c48e8ae6bf1c79b513.png",
      category: "Studio & Portfolio"
    },
    {
      name: "Statmindus",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/a54a7110257b0969a58c6090e1210aab.png",
      category: "Analytics Platform"
    },
    {
      name: "Zoozoo",
      url: "http://zoozootv.com",
      img: "https://digitalraiz.com/uploads/portfolio/6f026b11f2a8f09326c65397ed9ee943.jpg",
      category: "Media & Entertainment"
    },
    {
      name: "Vauntsquare",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/0dd0b81cc7e349e30c3678a6e87d04a5.png",
      category: "Real Estate Portal"
    },
    {
      name: "Thinkstudios",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/a0ce7c26c44671ae6d46f899e1434de1.png",
      category: "Creative Agency"
    },
    {
      name: "Techpro",
      url: "https://www.techprolog.com/",
      img: "https://digitalraiz.com/uploads/portfolio/c443a4a734e299e9d7f21126ce4542e5.png",
      category: "IT Solutions"
    },
    {
      name: "Teccteam",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/1ff3faf675b73d51d9039e6208314bbb.png",
      category: "Workflow System"
    },
    {
      name: "Svmart",
      url: "https://www.svmart.in/",
      img: "https://digitalraiz.com/uploads/portfolio/636cb38b4591f85743372a229c247ba7.jpg",
      category: "E-Commerce"
    },
    {
      name: "Smv",
      url: "http://www.smvchemicals.com/",
      img: "https://digitalraiz.com/uploads/portfolio/547fead930248463e1a33474113a5313.png",
      category: "Industrial Chemical"
    },
    {
      name: "Resort",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/205998a051f16c3bc76eb036c5a065fb.png",
      category: "Hospitality Web"
    },
    {
      name: "Phade",
      url: "#",
      img: "https://digitalraiz.com/uploads/portfolio/e0d824fa8fc388674810cd01ac1a7854.jpg",
      category: "SaaS Dashboard"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === webPortfolio.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [webPortfolio.length, isPaused]);

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

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* Modern Glassmorphic Hero Banner */}
        <section className="relative py-20 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.08),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.06),transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column: Heading copy */}
            <div className="space-y-6 max-w-2xl text-center lg:text-left flex-grow">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-950/45 border border-pink-500/20 text-[10px] font-bold uppercase tracking-wider text-pink-400">
                <Sparkles className="w-3.5 h-3.5" />
                Industry Grade Architecture
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
                WEB DEVELOPMENT <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  SERVICES
                </span>
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl font-light text-justify mx-auto lg:mx-0">
                We engineer lightning-fast corporate portals, custom business applications, responsive corporate sites, and robust e-commerce solutions. Our design architectures emphasize search optimization, speed, security, and enterprise scaling.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-650 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Start Web Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Code Console Mockup */}
            <div className="w-full lg:w-[460px] shrink-0 bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-2xl text-white font-mono space-y-4 relative">
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-md text-[9px] text-slate-500 border border-slate-800">
                <Terminal className="w-3 h-3 text-pink-500 animate-pulse" />
                <span>DrWebConfig.ts</span>
              </div>
              <div className="flex gap-1.5 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-slate-400 space-y-2 border-t border-slate-800 pt-4">
                <p className="text-pink-400 font-bold">// Web core parameters</p>
                <p><span className="text-indigo-400">const</span> <span className="text-white">optimizationMatrix</span> = &#123;</p>
                <p className="pl-4">rendering: <span className="text-pink-400">&quot;SSR / Static Generation&quot;</span>,</p>
                <p className="pl-4">lighthouseScore: <span className="text-emerald-400">&quot;95+ Performance&quot;</span>,</p>
                <p className="pl-4">layoutEngine: <span className="text-pink-400">&quot;Tailwind / Flexbox&quot;</span>,</p>
                <p className="pl-4">securityModel: <span className="text-emerald-400">&quot;CSRF & CSP Configured&quot;</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Copy & Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Text Area */}
              <div className="lg:col-span-7 space-y-6 text-justify">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-pink-650 uppercase tracking-[0.2em] block">We Build everything</span>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                    WEB DEVELOPMENT SERVICES
                  </h2>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Looking for the best web Design Services in Hyderabad? <strong>Digitalraiz Creative Solutions</strong> is one of the most trusted web design Services in Hyderabad where you can get 100% results in web Design Services. We are having experts in web design Services who are always ready for providing you best Services.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  A responsive website is definitely better placed to attract a consistently higher traffic compared to a non-responsive website. In Hyderabad, we have a team of skilled and highly experienced experts who will collaborate with you to roll out the kind of responsive web design that reaches even the most specific of your requirements.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Have a look at some of our work samples and you will know that our web developers do an awesome job ensuring that your website is designed with the best visibility across devices and platforms. Convert PSD to HTML Services: Need the Best web Services?!! NO worries… <strong>Digitalraiz Creative Solutions</strong> will get in touch as soon as you contact to provide you affordable services.
                </p>
              </div>

              {/* Glowing Array of Web Designs Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-1">
                  <h3 className="text-sm font-black uppercase tracking-tight text-slate-800">We provide an array of Web Designs:</h3>
                  <p className="text-slate-500 text-[10px] font-light leading-snug">Affordable solutions designed to fit device screens dynamically.</p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {webDesigns.map((design, idx) => (
                    <div 
                      key={idx} 
                      className="group flex gap-3.5 bg-white p-4 rounded-2xl border border-slate-150 shadow-3xs hover:border-pink-500/30 hover:shadow-2xs transition-all duration-300 items-start"
                    >
                      <div className="w-8 h-8 rounded-xl bg-pink-50/50 border border-pink-100 flex items-center justify-center shrink-0 text-pink-500 group-hover:scale-105 transition-transform">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-black uppercase tracking-wide text-slate-800">{design.title}</h4>
                        <p className="text-[10.5px] text-slate-500 font-light leading-tight">{design.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Maintenance System Grid Layout */}
            <div className="border-t border-slate-200/80 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.06),transparent_40%)]" />
                
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-indigo-900/40 border border-indigo-700/20 text-[9px] font-bold uppercase tracking-widest text-indigo-400">
                    <Activity className="w-3 h-3 text-indigo-400" />
                    Lifecycle & Defense
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">&quot;Maintenance & Updating Website&quot;</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light text-justify">
                    Creating a website or having a well organized blog is not a super thing. Every blog and website has its own responsibilities. Fulfilling all the responsibilities and getting good business to your company is the best thing. Just by uploading your work is not completed you should take more responsive steps to make your website successful.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 relative z-10">
                  <div className="text-center space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest block leading-none">Security</span>
                    <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider block">Active Monitor</span>
                  </div>
                  <div className="text-center space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest block leading-none">Uptime</span>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">99.9% Audit</span>
                  </div>
                  <div className="text-center space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest block leading-none">Updates</span>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">Scheduled</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-justify">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Your website runs smoothly with regular maintenance. Some visitors are there who regularly visit some websites. They always want something new and exciting information on visiting websites. Hacking a website became very easy because so many hacking techniques are available in the market. So its one of the most important responsibilities of taking care for your website. It can be done using a proper website maintenance program and keeping everything up to date.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Without updating the website you can&apos;t get a website because whenever a visitor comes to see the website the same is there and he/she doesn&apos;t find anything new. So keep updating your website with new ideas.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Real-World Client Web Portfolio Showcase (Overhaul to match Mobile page standard) */}
        <section className="py-24 bg-slate-50 border-t border-slate-150 relative overflow-hidden w-full">
          <div className="w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 px-6">
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Web Showcase</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Web Projects</h2>
              <p className="text-slate-400 text-xs font-light">Explore real-world web implementations and corporate portals engineered by DigitalRaiz.</p>
            </div>

            {/* Widescreen Laptop Mockups Coverflow Container */}
            <div className="relative w-full h-[370px] flex items-center justify-center [perspective:1200px] overflow-hidden select-none">
              <div className="relative w-full h-[320px] flex items-center justify-center [transform-style:preserve-3d]">
                {webPortfolio.map((app, idx) => {
                  let offset = idx - activeIndex;
                  const half = Math.floor(webPortfolio.length / 2);
                  if (offset > half) offset -= webPortfolio.length;
                  if (offset < -half) offset += webPortfolio.length;

                  const absOffset = Math.abs(offset);

                  // Keep only adjacent items visible to prevent cluttering
                  if (absOffset > 2) return null;

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={startAutoScroll}
                      onMouseLeave={stopAutoScroll}
                      className="absolute transition-all duration-500 ease-out cursor-pointer flex flex-col items-center gap-4 group"
                      style={{
                        transform: `translateX(${offset * 470}px) scale(${absOffset === 0 ? 1.08 : 0.92})`,
                        zIndex: 100 - absOffset,
                        opacity: 1,
                      }}
                    >
                      {/* Browser mockup chassis */}
                      <div className={`w-[390px] sm:w-[440px] h-[270px] rounded-2xl border-[3px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden relative transition-all duration-500 ${absOffset === 0 ? 'ring-4 ring-pink-500/20' : ''}`}>
                        {/* Browser Top Window bar */}
                        <div className="w-full h-8 bg-slate-900 border-b border-slate-950 flex items-center px-4 gap-2 shrink-0 z-20 relative">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
                          
                          {/* Mini URL Bar */}
                          <div className="flex-grow max-w-[240px] mx-auto bg-slate-950 rounded py-0.5 px-3 flex items-center justify-between border border-slate-800">
                            <span className="text-[7.5px] font-mono text-slate-400 truncate tracking-wide">{app.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.6)]" />
                          </div>
                        </div>

                        {/* Screen Image viewport */}
                        <div 
                          className="absolute top-8 bottom-0 left-0 right-0 overflow-y-auto no-scrollbar bg-slate-950 mockup-viewport"
                          onWheel={handleUserScroll}
                          onTouchMove={handleUserScroll}
                        >
                          <img
                            src={app.img}
                            alt={app.name}
                            className="w-full h-auto object-cover object-top select-none pointer-events-none block"
                          />
                        </div>
                      </div>

                      {/* App Name & Link Label */}
                      <div className="flex items-center gap-2">
                        <span className={`text-[8px] font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 leading-none transition-all duration-500 ${absOffset === 0 ? 'text-indigo-650 opacity-100' : 'text-slate-400 opacity-60'}`}>
                          {app.category}
                        </span>
                        <h4 className={`text-[12px] font-black uppercase tracking-wider text-center transition-all duration-500 ${absOffset === 0 ? 'text-pink-600 scale-105 opacity-100' : 'text-slate-500 opacity-60'}`}>
                          {app.name}
                        </h4>
                        {absOffset === 0 && app.url !== "#" && (
                          <a 
                            href={app.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-pink-600 hover:text-pink-700 p-0.5 bg-pink-50 border border-pink-100 rounded-md transition-colors" 
                            aria-label="Visit Website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons and Pagination Dots */}
            <div className="flex justify-center items-center gap-6 pt-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? webPortfolio.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <div className="flex gap-2">
                {webPortfolio.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-pink-500 w-4' : 'bg-slate-200'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveIndex((prev) => (prev === webPortfolio.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 transition-colors shadow-2xs"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
