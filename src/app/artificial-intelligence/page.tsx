import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Cpu, Eye, MessageSquareCode, Database, Settings, Terminal, CheckCircle2, Sparkles } from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Integrations | DigitalRaiz",
  description: "Custom Generative AI pipelines, Large Language Model (LLM) agents, semantic vector databases, cognitive chat networks, and smart automations.",
};

export default function AiServicePage() {
  const capabilities = [
    {
      title: "Generative LLM Pipelines",
      desc: "Custom integration of OpenAI GPT, Anthropic Claude, or open source Llama systems into business logic systems.",
      icon: <MessageSquareCode className="w-5 h-5 text-purple-500" />
    },
    {
      title: "Semantic Vector Search",
      desc: "Developing embedding models and databases using Pinecone or Milvus to allow smart cognitive text search.",
      icon: <Database className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "AI Agents & RAG Systems",
      desc: "Retrieval-Augmented Generation (RAG) structures that parse corporate manuals and respond accurately with data.",
      icon: <Terminal className="w-5 h-5 text-purple-500" />
    },
    {
      title: "Vision & Image Models",
      desc: "Visual classification networks, automated object detection models, and custom image processing arrays.",
      icon: <Eye className="w-5 h-5 text-indigo-500" />
    }
  ];

  const techStack = [
    { name: "OpenAI API", desc: "Advanced LLM features" },
    { name: "LangChain", desc: "AI agent orchestrations" },
    { name: "Pinecone / Chroma", desc: "Vector indexing storage" },
    { name: "Hugging Face", desc: "Open-source NLP models" },
    { name: "Python / FastAPI", desc: "AI microservice structures" },
    { name: "LlamaIndex", desc: "RAG data frameworks" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-purple-50/5 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="space-y-6 flex-grow max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-bold uppercase tracking-wider text-purple-600">
                <Cpu className="w-3.5 h-3.5" />
                Core Capability
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
                Artificial Intelligence
              </h1>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed text-justify font-light">
                We engineer scalable AI integrations that automate business processes. We specialize in Retrieval-Augmented Generation, vector embeddings, cognitive LLM agents, and semantic database integrations.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1.5 py-3 px-6 rounded-xl bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-800 transition-transform active:scale-98"
                >
                  <span>Build AI Platform</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Tech Visual Console */}
            <div className="w-full lg:w-[420px] shrink-0 bg-slate-950 rounded-2xl p-6 border border-slate-800/80 shadow-2xl text-white font-mono space-y-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <div className="w-3 h-3 rounded-full bg-pink-500" />
              </div>
              <div className="text-xs text-slate-400 space-y-2 border-t border-slate-800 pt-4">
                <p className="text-purple-400"># ai_model_configuration</p>
                <p>const AIModelConfig = &#123;</p>
                <p className="pl-4">baseModel: &quot;gpt-4o&quot;,</p>
                <p className="pl-4">embeddings: &quot;text-embedding-3-large&quot;,</p>
                <p className="pl-4 text-slate-500">// Cognitive agent prompt</p>
                <p className="pl-4">agentMemory: &quot;Vector Store Retrievable&quot;</p>
                <p>&#125;;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Detailed Capabilities Grid */}
        <section className="py-16 bg-white/40">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-purple-600 uppercase tracking-[0.2em] block">Our Focus</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-850">Cognitive &amp; Automated Agent Systems</h2>
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
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">Our Artificial Intelligence Stack</h3>
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
        <section className="py-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col sm:flex-row gap-6 justify-between items-center relative z-10">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">Looking to Integrate AI?</h3>
              <p className="text-white/85 text-xs font-light max-w-lg">Get in touch with our AI engineers to assess feasibility and map model deployment roadmaps.</p>
            </div>
            <Link 
              href="/contact" 
              className="py-3 px-6 rounded-xl bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-slate-50 transition-transform active:scale-98"
            >
              Consult AI Specialist
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
