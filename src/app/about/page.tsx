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

  const pillars = [
    {
      title: "Precision Coding",
      desc: "Pixel-perfect visual experiences built on modern, clean web architectures.",
      icon: <Zap className="w-5 h-5 text-pink-500" />,
      color: "border-pink-100 bg-pink-50/10"
    },
    {
      title: "Data-Driven ROI",
      desc: "We align digital marketing and SEO directly to client growth targets.",
      icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
      color: "border-indigo-100 bg-indigo-50/10"
    },
    {
      title: "Security & Scale",
      desc: "Blazing fast cloud deployments keeping systems safe and responsive.",
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      color: "border-emerald-100 bg-emerald-50/10"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30 font-sans select-none">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Asymmetrical Premium Hero Banner */}
        <div className="relative pt-24 pb-16 bg-gradient-to-r from-primary-mid via-primary to-primary-dark text-white overflow-hidden text-center select-none">
          {/* Decorative background patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-[9px] font-mono text-pink-300 font-bold uppercase tracking-[0.35em] block">Our Story</span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">About Us</h1>
            <p className="text-pink-100/70 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] mt-1">Your Trusted IT & Software Partner</p>
          </div>
        </div>

        {/* Bento Grid Layout Section */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            
            {/* The Bento Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Brand Philosophy & Story (col-span-2) - DARK FUTURISTIC CARD */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-900 relative overflow-hidden flex flex-col justify-between min-h-[380px] group hover:scale-[1.005] transition-all duration-300">
                <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-pink-500/10 blur-[80px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                
                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono font-bold uppercase tracking-wider text-pink-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    Welcome to DigitalRaiz
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight max-w-xl">
                    We build scale-ready digital platforms
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify font-light max-w-2xl">
                    DigitalRaiz operates as a high-performance technology and marketing partner. We design responsive frameworks, build SEO-friendly web portals, and orchestrate campaign systems designed to scale businesses from local startups to large enterprises. We separate ourselves in our steady capacity to stay up with the changing requests of the business.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 relative z-10 text-[9px] text-slate-400 font-mono uppercase tracking-widest flex items-center justify-between">
                  <span>Digital Raiz DNA</span>
                  <span>Est. Hyderabad</span>
                </div>
              </div>

              {/* Card 2: Interactive Vision Block (col-span-1) */}
              <div className="bg-gradient-to-br from-pink-50/20 via-white to-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:scale-[1.01] flex flex-col justify-between min-h-[380px]">
                <div className="absolute -bottom-6 -right-6 text-8xl font-black text-pink-500/[0.04] select-none pointer-events-none font-mono tracking-tighter uppercase z-0">
                  Vision
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Medal className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-slate-800">Our Vision</h4>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                    An individual character and arise as a respected programming arrangements supplier by building and keeping up durable relationships, conveying quality programming and by giving inventive business arrangements.
                  </p>
                </div>
                
                <span className="text-[9px] font-mono font-bold text-pink-500 uppercase tracking-widest relative z-10 pt-4 block border-t border-slate-100">Future-Focused</span>
              </div>

              {/* Card 3: Interactive Mission Block (col-span-1) */}
              <div className="bg-gradient-to-br from-indigo-50/20 via-white to-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:scale-[1.01] flex flex-col justify-between min-h-[380px]">
                <div className="absolute -bottom-6 -right-6 text-8xl font-black text-indigo-500/[0.04] select-none pointer-events-none font-mono tracking-tighter uppercase z-0">
                  Mission
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Bookmark className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-slate-800">Mission</h4>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                    To give inventive, high calibre and top tier IT Consulting &amp; IT Solutions &amp; Services to our clients, empowering them to accomplish their business objectives. Partners and accomplices while co-operating. also, to keep up and grow our convention of &quot;Greatness through Quality&quot;.
                  </p>
                </div>

                <span className="text-[9px] font-mono font-bold text-indigo-500 uppercase tracking-widest relative z-10 pt-4 block border-t border-slate-100">Quality-Driven</span>
              </div>

              {/* Card 4: Detailed Operational DNA (col-span-2) */}
              <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden group hover:scale-[1.005] transition-all duration-300 min-h-[380px] flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-pink-500 font-bold uppercase tracking-[0.25em] block">Methodology</span>
                    <h4 className="text-xl font-black uppercase tracking-tight text-slate-800">Our Operational DNA</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {pillars.map((pillar, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${pillar.color} shrink-0`}>
                          {pillar.icon}
                        </div>
                        <div className="space-y-1">
                          <h5 className="text-[13px] font-bold text-slate-800 uppercase tracking-tight">{pillar.title}</h5>
                          <p className="text-slate-500 text-[11px] leading-relaxed font-light">{pillar.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                  Integrated Execution Model
                </div>
              </div>

            </div>

            {/* Bottom Row: FID / Stats Card Grid */}
            <div className="pt-8 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-[9px] font-mono text-pink-500 font-bold uppercase tracking-[0.25em] block">Verified Progress</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-800">DigitalRaiz by the Numbers</h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-white to-slate-50/40 border border-slate-100 rounded-3xl p-6 text-center shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-sm mb-4 group-hover:scale-105 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-tight mt-1">{stat.label}</div>
                    <p className="text-[10px] text-slate-400 mt-1 font-light leading-snug">{stat.desc}</p>
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
