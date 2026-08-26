import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Compass, Users, CheckCircle, Zap, Shield, Sparkles } from "lucide-react";

export const metadata = {
  title: "Why Partner With Us | Digital Raiz",
  description: "Learn more about Digital Raiz, our business objectives, methodologies, and technical expertise.",
};

export default function AboutPage() {
  const stats = [
    { value: "150+", label: "Successful Deliveries", icon: <Award className="w-5 h-5 text-primary" /> },
    { value: "98%", label: "Client ROAS Retention", icon: <Users className="w-5 h-5 text-indigo-500" /> },
    { value: "24/7", label: "Dedicated Engineer Support", icon: <Compass className="w-5 h-5 text-primary" /> },
  ];

  const values = [
    {
      title: "Quality First Design",
      desc: "Pixel-perfect visual experiences built on structured and optimized layouts.",
      icon: <Sparkles className="w-6 h-6 text-primary" />
    },
    {
      title: "Agile Development",
      desc: "Fast, transparent deployment processes matching modern standards.",
      icon: <Zap className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "Security & Scale",
      desc: "Blazing fast speeds coupled with robust security for all user devices.",
      icon: <Shield className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow pt-36 pb-32 bg-white relative overflow-hidden bg-grid-premium">
        {/* Soft background light filters */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs font-bold text-pink-650 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Our Mission
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 uppercase leading-tight">
              Why Partner With <br/>
              <span className="text-gradient-primary">Digital Raiz?</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
              Choosing a digital partner is about working with a dedicated team that aligns with your business goals, target audience, and engineering workflows.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24">
            {stats.map((stat, i) => (
              <div key={i} className="glass-premium rounded-3xl p-8 text-center glow-card">
                <div className="w-10 h-10 mx-auto rounded-xl bg-white flex items-center justify-center border border-zinc-200/50 shadow-sm mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-extrabold text-zinc-900 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Detailed Unique Approach block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-7 glass-premium rounded-[32px] p-8 sm:p-12 border border-zinc-200/60 shadow-lg glow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 uppercase mb-6 tracking-tight">Our Unique Approach</h2>
              <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-light">
                We begin by analyzing your exact audience behavior and conversion requirements. From there, we design high-converting visual components and structured layouts, bringing SEO-friendly optimization and responsive design to all devices.
              </p>
              <p className="text-zinc-650 text-sm leading-relaxed font-light">
                With detailed planning, clear timelines, ongoing support, and high-performance engineering standards, we make sure your product launches successfully and scales cleanly.
              </p>
            </div>
            
            <div className="lg:col-span-5 space-y-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-zinc-200/40 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-white border border-zinc-200/50 shadow-sm shrink-0 h-12 w-12 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-sm mb-1 uppercase tracking-tight">{v.title}</h3>
                    <p className="text-zinc-600 text-xs leading-relaxed font-light">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
