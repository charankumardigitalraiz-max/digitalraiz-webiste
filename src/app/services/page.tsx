import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, BarChart3, Cloud, Cpu, BrainCircuit, ShieldCheck, Sparkles, Award, Megaphone } from "lucide-react";

export const metadata = {
  title: "Our Digital & Technology Services | DigitalRaiz",
  description: "Explore our expert services including custom web development, mobile apps, SAP cloud solutions, digital marketing, AI, and machine learning.",
};

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "Digital Marketing",
      desc: "Full-funnel digital marketing in Hyderabad. High-intent SEO, targeted Google Ads PPC, creative social media management, and qualified lead generation.",
      href: "/digital-marketing-services-in-hyderabad",
      icon: <Megaphone className="w-6 h-6 text-pink-500" />,
      tag: "SEO & Growth",
      colorClass: "border-pink-500/25 hover:border-pink-500 bg-pink-500/5"
    },
    {
      title: "Web Development",
      desc: "Tailored front-end experiences, high-performance web applications, and headless CMS integrations built on Next.js, React, and robust cloud scaling.",
      href: "/web-development",
      icon: <Code className="w-6 h-6 text-pink-500" />,
      tag: "Tech & Scale",
      colorClass: "border-pink-500/25 hover:border-pink-500 bg-pink-500/5"
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform and native iOS & Android applications. We design high-performance, seamless UI/UX apps that scale to millions of active users.",
      href: "/mobile-application",
      icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
      tag: "iOS & Android",
      colorClass: "border-indigo-500/25 hover:border-indigo-500 bg-indigo-500/5"
    },
    {
      title: "Influencer Marketing",
      desc: "Data-driven growth strategies, organic visibility campaigns, brand partnerships, and funnel optimizations designed to maximize ROI.",
      href: "/influencer-marketing",
      icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
      tag: "Organic Growth",
      colorClass: "border-emerald-500/25 hover:border-emerald-500 bg-emerald-500/5"
    },
    {
      title: "SAP Cloud Services",
      desc: "Seamless enterprise resource planning (ERP) migrations, API integrations, custom ABAP module creation, and real-time cloud analytics for scale.",
      href: "/sap-cloud-services",
      icon: <Cloud className="w-6 h-6 text-cyan-500" />,
      tag: "Enterprise Systems",
      colorClass: "border-cyan-500/25 hover:border-cyan-500 bg-cyan-500/5"
    },
    {
      title: "Artificial Intelligence",
      desc: "Unlock automation and smart operations. Custom generative AI pipelines, cognitive agent integrations, and semantic vector search engines.",
      href: "/artificial-intelligence",
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      tag: "Next-Gen AI",
      colorClass: "border-purple-500/25 hover:border-purple-500 bg-purple-500/5"
    },
    {
      title: "Machine Learning",
      desc: "Predictive modeling, data classification networks, custom neural training architectures, and automated intelligence pipelines.",
      href: "/machine-learning",
      icon: <BrainCircuit className="w-6 h-6 text-orange-500" />,
      tag: "Neural Logic",
      colorClass: "border-orange-500/25 hover:border-orange-500 bg-orange-500/5"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-white border-b border-slate-100">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-pink-50/10 pointer-events-none" />
          <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-6 w-full relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-bold uppercase tracking-wider text-pink-600">
              <Sparkles className="w-3.5 h-3.5" />
              What We Do Best
            </div>

            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
              Services Built to Scale
            </h1>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              DigitalRaiz delivers cutting-edge software engineering, custom mobile development, cloud infrastructures, and high-conversion digital marketing solutions that grow brand visibility and operations.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white/40">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((service, i) => (
                <div
                  key={i}
                  className={`group rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-white ${service.colorClass}`}
                >
                  <div className="space-y-4">
                    {/* Header Row: Icon & Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-2xs flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5">
                        {service.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-black uppercase tracking-tight text-slate-850">
                        {service.title}
                      </h2>
                      <p className="text-slate-500 text-xs leading-relaxed font-light">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-6 border-t border-slate-50 mt-6 flex justify-end">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-800 hover:text-pink-600 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Capability Statement Divider */}
        {/* <section className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 opacity-90 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row gap-8 justify-between items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-pink-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400">Enterprise Standard</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                Looking for a Custom Solution?
              </h3>
              <p className="text-slate-400 text-xs font-light max-w-xl">
                Let&apos;s build custom software, web platforms, integrations, or digital SEO strategies specifically matching your long-term roadmap.
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-1.5 py-3 px-6 rounded-xl bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-100 transition-transform active:scale-98"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
