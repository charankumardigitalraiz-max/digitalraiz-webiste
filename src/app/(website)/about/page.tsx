import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Medal, Bookmark, Briefcase, Users, UserCheck, Box, Zap, Shield, TrendingUp } from "lucide-react";
import BannerSlider from "@/components/BannerSlider";


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

  const pillars = [
    {
      title: "Precision Coding",
      desc: "Pixel-perfect visual experiences built on modern architectures.",
      icon: <Zap className="w-4 h-4 text-pink-500" />
    },
    {
      title: "Data-Driven ROI",
      desc: "We align digital marketing and SEO to growth targets.",
      icon: <TrendingUp className="w-4 h-4 text-indigo-500" />
    },
    {
      title: "Security & Scale",
      desc: "Blazing fast cloud deployments keeping systems safe.",
      icon: <Shield className="w-4 h-4 text-emerald-500" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/10 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* Infinite Scrolling Content Bands Banner */}
        <div
          className="relative pt-10 pb-10 overflow-hidden select-none bg-cover bg-center border-b border-slate-100/80"
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

        {/* Narrative Journey & Details Section */}
        <section className="py-10 sm:py-10 bg-white relative overflow-hidden">
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-6 w-full">

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

          </div>

          {/* Premium Panoramic Banner Slider */}
          <BannerSlider />

          <div className="max-w-6xl mx-auto px-6 w-full space-y-10">
            <div className="relative pt-2 border-t border-slate-100/60 space-y-20">

              {/* Vertical timeline track */}
              <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-12 bottom-12 w-[2px] bg-gradient-to-b from-pink-500 via-indigo-500 to-emerald-500 opacity-20 z-0 hidden sm:block" />

              {/* Timeline Row 1: Vision */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
                {/* Left side title */}
                <div className="md:col-span-6 md:text-right space-y-1.5 pr-0 md:pr-14">
                  <span className="text-[10px] font-bold text-pink-600 tracking-widest uppercase">01 / Perspective</span>
                  <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-805">Our Vision</h4>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-pink-500 shadow-sm z-20 hidden md:block" />

                {/* Right side content */}
                <div className="md:col-span-6 pl-0 md:pl-14">
                  <p className="text-slate-600 text-sm leading-relaxed text-justify font-normal">
                    An individual character and arise as a respected programming arrangements supplier by building and keeping up durable relationships, conveying quality programming and by giving inventive business arrangements. We operate on long-term client milestones.
                  </p>
                </div>
              </div>

              {/* Timeline Row 2: Mission */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
                {/* Left side content */}
                <div className="md:col-span-6 pr-0 md:pr-14 order-2 md:order-1">
                  <p className="text-slate-600 text-sm leading-relaxed text-justify font-normal">
                    To give inventive, high calibre and top tier IT Consulting &amp; IT Solutions &amp; Services to our clients, empowering them to accomplish their business objectives. Partners and accomplices while co-operating. also, to keep up and grow our convention of &quot;Greatness through Quality&quot;.
                  </p>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-indigo-500 shadow-sm z-20 hidden md:block" />

                {/* Right side title */}
                <div className="md:col-span-6 space-y-1.5 pl-0 md:pl-14 order-1 md:order-2">
                  <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase">02 / Execution</span>
                  <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-855">Mission</h4>
                </div>
              </div>

              {/* Timeline Row 3: DNA */}
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start z-10">
                {/* Left side title */}
                <div className="md:col-span-6 md:text-right space-y-1.5 pr-0 md:pr-14">
                  <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">03 / Core Competency</span>
                  <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-805">Our DNA</h4>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-emerald-500 shadow-sm z-20 hidden md:block" />

                {/* Right side content: Pillars list */}
                <div className="md:col-span-6 pl-0 md:pl-14 space-y-4">
                  {pillars.map((pillar, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl p-3.5 transition-all duration-300">
                      <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 shadow-2xs">
                        {pillar.icon}
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-tight">{pillar.title}</h5>
                        <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed font-light">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Row: Architectural Split Metrics Console (No cards) */}
            <div className="pt-12 border-t border-slate-100/60 space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Verified Progress</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-850">DigitalRaiz by the Numbers</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex gap-4 items-center group transition-transform duration-300 hover:scale-[1.01]">
                    {/* Large Colored Number */}
                    <div className="text-4xl sm:text-5xl font-black tracking-tight text-gradient-primary shrink-0 select-none">
                      {stat.value}
                    </div>
                    {/* Vertical Divider */}
                    <div className="w-[1.5px] h-10 bg-slate-200" />
                    {/* Text Details Block */}
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block leading-tight">{stat.label}</span>
                      <span className="text-[10px] text-slate-500 font-light leading-snug block">{stat.desc}</span>
                    </div>
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
