import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Medal, Bookmark, Briefcase, Users, UserCheck, Box, Zap, Shield, TrendingUp } from "lucide-react";

export const metadata = {
  title: "About DigitalRaiz – Your Trusted IT & Software Partner",
  description: "Learn how DigitalRaiz delivers cutting-edge digital solutions. We’re your trusted tech partner for innovation, growth & long-term success.",
};

export default function AboutPage() {
  const stats = [
    { value: "121", label: "Completed Projects", desc: "Successfully delivered corporate portals & apps", icon: <Briefcase className="w-5 h-5 text-pink-500" /> },
    { value: "98", label: "Happy Clients", desc: "Trusted by founders and marketing leaders", icon: <UserCheck className="w-5 h-5 text-indigo-500" /> },
    { value: "27", label: "Employees", desc: "Expert engineers & digital strategists", icon: <Users className="w-5 h-5 text-pink-500" /> },
    { value: "16", label: "Our Products", desc: "Proprietary tools scaling business workflows", icon: <Box className="w-5 h-5 text-indigo-500" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/10 font-sans select-none text-slate-800">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Infinite Scrolling Content Bands Banner */}
        <div 
          className="relative pt-28 pb-14 overflow-hidden select-none bg-cover bg-center border-b border-slate-100/80"
          style={{
            backgroundImage: "url('/images/about_us_banner.png')"
          }}
        >
          {/* Ambient overlays */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1.5px] pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Scroll Band 1 (Left to Right) */}
            <div className="w-full overflow-hidden whitespace-nowrap">
              <div className="flex animate-scroll-horizontal whitespace-nowrap gap-12 text-[26px] sm:text-[34px] font-black uppercase tracking-wider text-slate-800/85">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="flex items-center gap-12 shrink-0">
                    <span>DigitalRaiz Technologies</span>
                    <span className="text-pink-600 font-normal opacity-50">•</span>
                    <span>Software Engineering</span>
                    <span className="text-indigo-600 font-normal opacity-50">•</span>
                    <span>Digital Marketing</span>
                    <span className="text-pink-600 font-normal opacity-50">•</span>
                    <span>IT Consulting</span>
                    <span className="text-indigo-600 font-normal opacity-50">•</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Scroll Band 2 (Right to Left) */}
            <div className="w-full overflow-hidden whitespace-nowrap">
              <div className="flex animate-scroll-horizontal-reverse whitespace-nowrap gap-12 text-[13px] sm:text-[16px] font-bold uppercase tracking-[0.2em] text-slate-500/80">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="flex items-center gap-12 shrink-0">
                    <span>Precision Coding</span>
                    <span className="text-pink-500/40">•</span>
                    <span>Data-Driven ROI</span>
                    <span className="text-indigo-500/40">•</span>
                    <span>Enterprise Scale</span>
                    <span className="text-pink-500/40">•</span>
                    <span>Verified Growth</span>
                    <span className="text-indigo-500/40">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout Section */}
        <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-6 w-full space-y-20">

            {/* 1. Brand Philosophy Editorial Split Row (No card outline) */}
            <div className="flex flex-col lg:flex-row gap-12 items-center pb-8">
              {/* Left text column */}
              <div className="space-y-6 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-bold uppercase tracking-wider text-pink-600">
                  <Sparkles className="w-3.5 h-3.5" />
                  Welcome to DigitalRaiz
                </div>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight max-w-xl text-slate-850">
                  We build scale-ready digital platforms
                </h3>
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed text-justify font-normal max-w-2xl">
                  DigitalRaiz operates as a high-performance technology and marketing partner. We design responsive frameworks, build SEO-friendly web portals, and orchestrate campaign systems designed to scale businesses from local startups to large enterprises. We separate ourselves in our steady capacity to stay up with the changing requests of the business.
                </p>
              </div>

              {/* Right image column */}
              <div className="w-full lg:w-[360px] shrink-0 flex items-center justify-center">
                <img
                  src="/images/about_us_branding.png"
                  alt="DigitalRaiz Brand Illustration"
                  className="w-full max-w-[320px] h-auto object-contain hover:scale-102 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
            </div>

            {/* 2. Unified Split-Studio Dashboard (Matches Capabilities/Home Page style) */}
            <div className="flex flex-col lg:flex-row border border-slate-100 rounded-3xl overflow-hidden bg-white shadow-md relative z-10 min-h-[500px]">
              
              {/* Left Column: Brand Perspective (Vision & Mission) */}
              <div className="flex-1 relative p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 bg-[#fdfcff] overflow-hidden flex flex-col justify-between">
                {/* Ambient glow */}
                <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-pink-50/50 blur-[80px] pointer-events-none" />
                {/* Watermark number */}
                <div className="absolute bottom-4 right-6 text-[120px] font-black text-slate-900/[0.02] leading-none pointer-events-none select-none tracking-tighter z-0">
                  01
                </div>

                <div className="space-y-8 relative z-10">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-150 text-[9px] font-bold text-pink-600 uppercase tracking-widest">
                      <Medal className="w-3.5 h-3.5" />
                      <span>Brand Perspective</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-350 uppercase tracking-widest">Vision &amp; Mission</span>
                  </div>

                  {/* Content Blocks */}
                  <div className="space-y-8">
                    {/* Vision */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-pink-500">01.</span>
                        <h4 className="text-sm font-black uppercase tracking-tight text-slate-800">Our Vision</h4>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-normal pl-6">
                        An individual character and arise as a respected programming arrangements supplier by building and keeping up durable relationships, conveying quality programming and by giving inventive business arrangements.
                      </p>
                    </div>

                    {/* Mission */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-indigo-500">02.</span>
                        <h4 className="text-sm font-black uppercase tracking-tight text-slate-800">Our Mission</h4>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-normal pl-6">
                        To give inventive, high calibre and top tier IT Consulting &amp; IT Solutions &amp; Services to our clients, empowering them to accomplish their business objectives. Partners and accomplices while co-operating. also, to keep up and grow our convention of &quot;Greatness through Quality&quot;.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Execution DNA (Pillars) */}
              <div className="flex-1 relative p-8 sm:p-12 bg-[#faf9ff] overflow-hidden flex flex-col justify-between">
                {/* Ambient glow */}
                <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-indigo-50/50 blur-[80px] pointer-events-none" />
                {/* Watermark number */}
                <div className="absolute bottom-4 right-6 text-[120px] font-black text-slate-900/[0.02] leading-none pointer-events-none select-none tracking-tighter z-0">
                  02
                </div>

                <div className="space-y-8 relative z-10">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-150 text-[9px] font-bold text-indigo-600 uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Execution DNA</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-350 uppercase tracking-widest">Core Competency</span>
                  </div>

                  {/* Pillars list styled as premium hover components */}
                  <div className="space-y-4">
                    {/* Pillar 1 */}
                    <div className="bg-pink-50/30 hover:bg-pink-50/80 border border-pink-100/50 hover:border-pink-300 transition-all duration-300 rounded-2xl p-4 sm:p-5 flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-xl bg-white border border-pink-200 flex items-center justify-center text-pink-500 shrink-0 shadow-xs">
                        <Zap className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-tight">Precision Coding</h5>
                        <p className="text-slate-550 text-[11px] sm:text-xs leading-relaxed font-light">Pixel-perfect visual experiences built on modern architectures.</p>
                      </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-indigo-50/30 hover:bg-indigo-50/80 border border-indigo-100/50 hover:border-indigo-300 transition-all duration-300 rounded-2xl p-4 sm:p-5 flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-xl bg-white border border-indigo-200 flex items-center justify-center text-indigo-500 shrink-0 shadow-xs">
                        <TrendingUp className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-tight">Data-Driven ROI</h5>
                        <p className="text-slate-550 text-[11px] sm:text-xs leading-relaxed font-light">We align digital marketing and SEO directly to client growth targets.</p>
                      </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-emerald-50/30 hover:bg-emerald-50/80 border border-emerald-100/50 hover:border-emerald-300 transition-all duration-300 rounded-2xl p-4 sm:p-5 flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-500 shrink-0 shadow-xs">
                        <Shield className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-tight">Security &amp; Scale</h5>
                        <p className="text-slate-550 text-[11px] sm:text-xs leading-relaxed font-light">Blazing fast cloud deployments keeping systems safe and responsive.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: FID / Stats Card Grid */}
            <div className="pt-8 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-[9px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Verified Progress</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-850">DigitalRaiz by the Numbers</h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-white to-slate-50/40 border border-slate-100 rounded-3xl p-6 text-center shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-sm mb-4 group-hover:scale-105 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-850 uppercase tracking-tight mt-1">{stat.label}</div>
                    <p className="text-[10px] text-slate-500 mt-1 font-light leading-snug">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
