"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function SalesforceCtaBanner() {
  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10">
        <ScrollReveal direction="up">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-md space-y-6 text-center relative overflow-hidden">
            {/* Subtle Gradient Ambient Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest relative z-10">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>Drive Digital Transformation with Salesforce</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight relative z-10">
              Ready to Elevate Customer Relationships &amp;{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Accelerate Growth?
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-normal relative z-10">
              Whether you are starting your Salesforce journey or looking to optimize an existing implementation, our team is committed to helping you achieve operational excellence, stronger customer relationships, and sustainable business growth. Contact us today to discover how Salesforce can transform your business.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-700 font-medium relative z-10">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Free Technical Assessment</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Tailored Architecture Plan</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Dedicated Salesforce Team</span>
            </div>

            <div className="pt-4 relative z-10">
              <button
                type="button"
                onClick={() => openContactModal("Salesforce Consulting", "Salesforce Transformation Strategy")}
                className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all duration-300 border-0 cursor-pointer"
              >
                <span>Schedule Salesforce Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
