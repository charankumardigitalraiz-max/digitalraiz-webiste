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
      title: "Precision Engineering",
      desc: "Pixel-perfect visual experiences built on robust, modern framework architectures.",
      icon: <Zap className="w-5 h-5 text-pink-500" />,
      color: "border-pink-100 bg-pink-50/10",
      accent: "text-pink-500"
    },
    {
      title: "Data-Driven ROI",
      desc: "We align digital marketing and SEO strategy directly to your business acquisition targets.",
      icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
      color: "border-indigo-100 bg-indigo-50/10",
      accent: "text-indigo-500"
    },
    {
      title: "Scale & Security",
      desc: "Robust, enterprise-grade cloud deployments keeping client databases safe and responsive.",
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      color: "border-emerald-100 bg-emerald-50/10",
      accent: "text-emerald-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Asymmetrical Premium Hero Banner */}
        <div className="relative pt-28 pb-20 bg-gradient-to-r from-primary-mid via-primary to-primary-dark text-white overflow-hidden text-center select-none">
          {/* Decorative background patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <span className="text-[10px] font-mono text-pink-300 font-bold uppercase tracking-[0.35em] block">Who We Are</span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none">About Us</h1>
            <p className="text-pink-100/70 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] mt-2">Your Trusted IT & Software Partner</p>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-6 w-full space-y-24">
            
            {/* Top Row: Intro & Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Brand & Intro */}
              <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-28">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-bold text-pink-650 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Company Introduction
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-800 leading-none">
                    Welcome To <br />
                    <span className="text-gradient-primary">DigitalRaiz</span>
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify font-normal">
                  <strong>DigitalRaiz</strong> is the main supplier in IT Development, Software Development, creative Mobile applications Development, web index showcasing and advancement administrations. Our essential subject matters incorporate site improvement (SEO), on page streamlining, search-accommodating web advancement, informal communication and third party referencing. We separate ourselves in our steady capacity to stay up with the changing requests of the business. DigitalRaiz have gone from little new businesses to huge organizations making significant degrees of progress with every customer.
                </p>
              </div>

              {/* Right Column: Vision & Mission Premium Cards */}
              <div className="lg:col-span-6 space-y-8">
                
                {/* Vision Box */}
                <div className="bg-gradient-to-br from-pink-50/20 via-white to-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:scale-[1.01]">
                  <div className="absolute -bottom-6 -right-6 text-7xl font-black text-pink-500/[0.04] select-none pointer-events-none font-mono tracking-tighter uppercase z-0">
                    Vision
                  </div>
                  
                  <div className="flex gap-5 items-start relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Medal className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black uppercase tracking-tight text-slate-800">Our Vision</h3>
                      <p className="text-slate-550 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                        An individual character and arise as a respected programming arrangements supplier by building and keeping up durable relationships, conveying quality programming and by giving inventive business arrangements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mission Box */}
                <div className="bg-gradient-to-br from-indigo-50/20 via-white to-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:scale-[1.01]">
                  <div className="absolute -bottom-6 -right-6 text-7xl font-black text-indigo-500/[0.04] select-none pointer-events-none font-mono tracking-tighter uppercase z-0">
                    Mission
                  </div>

                  <div className="flex gap-5 items-start relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Bookmark className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black uppercase tracking-tight text-slate-800">Mission</h3>
                      <p className="text-slate-550 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                        To give inventive, high calibre and top tier IT Consulting &amp; IT Solutions &amp; Services to our clients, empowering them to accomplish their business objectives. Partners and accomplices while co-operating. also, to keep up and grow our convention of &quot;Greatness through Quality&quot;.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Middle Row: Why We Stand Out (New Premium Section) */}
            <div className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-[9px] font-mono text-indigo-500 font-bold uppercase tracking-[0.25em] block">Our DNA</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-800">Why We Stand Out</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light">We combine strategic alignment with execution to bring you maximum growth.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group hover:scale-[1.01]">
                    <div className="space-y-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${pillar.color} shrink-0`}>
                        {pillar.icon}
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-slate-800 uppercase tracking-tight">{pillar.title}</h4>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: FID / Stats Card Grid */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-[9px] font-mono text-pink-500 font-bold uppercase tracking-[0.25em] block">Verified Progress</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-800">DigitalRaiz by the Numbers</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-white to-slate-50/40 border border-slate-100 rounded-3xl p-6 text-center shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
                    <div className="w-11 h-11 mx-auto rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-sm mb-4 group-hover:scale-105 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-850 uppercase tracking-tight mt-1">{stat.label}</div>
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
