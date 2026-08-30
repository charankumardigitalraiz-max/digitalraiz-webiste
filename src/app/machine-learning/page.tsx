"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { openContactModal } from "@/components/ContactModal";
import { ArrowRight, BrainCircuit, BarChart, Settings, Database, LineChart, Shield, CheckCircle2, Sparkles } from "lucide-react";

export default function MlServicePage() {
  const capabilities = [
    {
      title: "Predictive Analytics Models",
      desc: "Custom regression and time-series forecasting algorithms that analyze past metrics to forecast future outcomes.",
      icon: <LineChart className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Data Classification Networks",
      desc: "Supervised and unsupervised classification pipelines that automatically tag, organize, and filter large datasets.",
      icon: <Database className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Custom Deep Learning",
      desc: "Multi-layered neural network systems configured for specialized NLP or regression tasks.",
      icon: <BrainCircuit className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Anomaly Detection",
      desc: "Deploying automated model thresholds to scan transactional streams and flag deviations or security risks.",
      icon: <Shield className="w-5 h-5 text-indigo-500" />
    }
  ];

  const techStack = [
    { name: "TensorFlow / Keras", desc: "Neural network configurations" },
    { name: "PyTorch", desc: "Scientific model development" },
    { name: "Scikit-Learn", desc: "Regression & classification" },
    { name: "Pandas / NumPy", desc: "Large data structure processing" },
    { name: "AWS SageMaker", desc: "Cloud training pipeline hosts" },
    { name: "MLflow", desc: "Model lifecycle monitoring" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-orange-50/5 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="space-y-6 flex-grow max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold uppercase tracking-wider text-orange-600">
                <BrainCircuit className="w-3.5 h-3.5" />
                Core Capability
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
                Machine Learning
              </h1>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed text-justify font-light">
                We design and engineer bespoke Machine Learning pipelines. From data pre-processing and training to deployment, our models optimize workflow decisions and forecast strategic business indicators.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1.5 py-3 px-6 rounded-xl bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-800 transition-transform active:scale-98"
                >
                  <span>Build ML Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Tech Visual Console */}
            <div className="w-full lg:w-[420px] shrink-0 bg-slate-950 rounded-2xl p-6 border border-slate-800/80 shadow-2xl text-white font-mono space-y-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <div className="w-3 h-3 rounded-full bg-pink-500" />
              </div>
              <div className="text-xs text-slate-400 space-y-2 border-t border-slate-800 pt-4">
                <p className="text-orange-400"># machine_learning_pipeline</p>
                <p>const MLPipeline = &#123;</p>
                <p className="pl-4">datasetSize: &quot;Millions of Entries&quot;,</p>
                <p className="pl-4">validationSplit: 0.20,</p>
                <p className="pl-4 text-slate-500">// Distributed cloud scaling</p>
                <p className="pl-4">trainingHost: &quot;AWS SageMaker Instance&quot;</p>
                <p>&#125;;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Detailed Capabilities Grid */}
        <section className="py-16 bg-white/40">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em] block">Our Focus</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-850">Predictive Logic &amp; Neural Processing</h2>
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
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">Our Machine Learning Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((fw, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 text-center space-y-1.5 shadow-3xs">
                  <span className="text-xs font-bold text-slate-800 block">{fw.name}</span>
                  <span className="text-[9px] text-slate-400 block font-light leading-none">{fw.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-12 bg-gradient-to-r from-orange-500 to-indigo-600 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col sm:flex-row gap-6 justify-between items-center relative z-10">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">Need Predictive Data Models?</h3>
              <p className="text-white/85 text-xs font-light max-w-lg">Get in touch with our machine learning engineers to review database schemas and plan predictive models.</p>
            </div>
            <button 
              onClick={() => openContactModal("Custom SaaS / Cloud")} 
              className="py-3 px-6 rounded-xl bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-50 transition-transform active:scale-98 cursor-pointer border-0"
            >
              Consult ML Specialists
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
