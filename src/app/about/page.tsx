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
    <div className="flex flex-col min-h-screen bg-slate-50/10 font-sans select-none text-slate-800">
      <Header />
      
      <main className="flex-grow">
        {/* Asymmetrical Premium Hero Banner with Custom Background Image */}
        <div 
          className="relative pt-36 pb-20 text-slate-800 overflow-hidden text-center select-none bg-cover bg-center border-b border-slate-100"
          style={{
            backgroundImage: "url('/images/about_us_banner.png')"
          }}
        >
          {/* Subtle light overlay blur */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.01)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-3">
            <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Our Story</span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-slate-850">About Us</h1>
            <p className="text-slate-650 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mt-1">Your Trusted IT & Software Partner</p>
          </div>
        </div>

        {/* Bento Grid Layout Section */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            
            {/* The Bento Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Brand Philosophy & Story (Full width 3 columns on large screens) - LIGHT MODE WITH BRAND ILLUSTRATION */}
              <div className="lg:col-span-3 bg-gradient-to-br from-slate-50 via-white to-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-md relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center group hover:scale-[1.005] transition-all duration-300">
                <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-pink-500/5 blur-[80px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.008)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                
                {/* Left text column */}
                <div className="space-y-6 relative z-10 flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-bold uppercase tracking-wider text-pink-600">
                    <Sparkles className="w-3.5 h-3.5" />
                    Welcome to DigitalRaiz
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight max-w-xl text-slate-805">
                    We build scale-ready digital platforms
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-normal max-w-2xl">
                    DigitalRaiz operates as a high-performance technology and marketing partner. We design responsive frameworks, build SEO-friendly web portals, and orchestrate campaign systems designed to scale businesses from local startups to large enterprises. We separate ourselves in our steady capacity to stay up with the changing requests of the business.
                  </p>
                </div>

                {/* Right image column */}
                <div className="relative z-10 w-full lg:w-[320px] shrink-0 flex items-center justify-center">
                  <img 
                    src="https://digitalraiz.com/assets/images/single-img-two.png" 
                    alt="DigitalRaiz Brand Illustration" 
                    className="w-full max-w-[280px] h-auto object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Card 2: Interactive Vision Block (col-span-1) */}
              <div className="bg-gradient-to-br from-pink-50/20 via-white to-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:scale-[1.01] flex flex-col justify-between min-h-[380px]">
                <div className="absolute -bottom-6 -right-6 text-8xl font-black text-pink-500/[0.04] select-none pointer-events-none font-sans tracking-tighter uppercase z-0">
                  Vision
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Medal className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-slate-800">Our Vision</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                    An individual character and arise as a respected programming arrangements supplier by building and keeping up durable relationships, conveying quality programming and by giving inventive business arrangements.
                  </p>
                </div>
                
                <span className="text-[9px] font-bold text-pink-600 uppercase tracking-widest relative z-10 pt-4 block border-t border-slate-100">Future-Focused</span>
              </div>

              {/* Card 3: Interactive Mission Block (col-span-1) */}
              <div className="bg-gradient-to-br from-indigo-50/20 via-white to-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:scale-[1.01] flex flex-col justify-between min-h-[380px]">
                <div className="absolute -bottom-6 -right-6 text-8xl font-black text-indigo-500/[0.04] select-none pointer-events-none font-sans tracking-tighter uppercase z-0">
                  Mission
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Bookmark className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-slate-800">Mission</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                    To give inventive, high calibre and top tier IT Consulting &amp; IT Solutions &amp; Services to our clients, empowering them to accomplish their business objectives. Partners and accomplices while co-operating. also, to keep up and grow our convention of &quot;Greatness through Quality&quot;.
                  </p>
                </div>

                <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest relative z-10 pt-4 block border-t border-slate-100">Quality-Driven</span>
              </div>

              {/* Card 4: Detailed Operational DNA (col-span-1) */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden group hover:scale-[1.005] transition-all duration-300 min-h-[380px] flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Methodology</span>
                    <h4 className="text-xl font-black uppercase tracking-tight text-slate-800">Our DNA</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {pillars.map((pillar, idx) => (
                      <div key={idx} className="flex gap-3.5 items-start">
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${pillar.color} shrink-0 mt-0.5`}>
                          {pillar.icon}
                        </div>
                        <div className="space-y-0.5">
                          <h5 className="text-xs font-bold text-slate-850 uppercase tracking-tight">{pillar.title}</h5>
                          <p className="text-slate-600 text-[10px] sm:text-xs leading-relaxed font-light">{pillar.desc}</p>
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
