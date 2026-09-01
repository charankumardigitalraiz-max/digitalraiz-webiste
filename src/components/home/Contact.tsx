"use client";

import React from "react";
import {
  CheckCircle,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Lock,
  Laptop,
  Smartphone,
  TrendingUp,
  Code2
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContactStore } from "@/store";

export default function Contact() {
  const {
    formData,
    submitting,
    submitted,
    setFormField,
    submitForm,
  } = useContactStore();

  const serviceOptions = [
    { label: "Web Development", icon: Laptop },
    { label: "Mobile Apps", icon: Smartphone },
    { label: "SEO & Growth", icon: TrendingUp },
    { label: "Custom SaaS", icon: Code2 },
  ];

  return (
    <section id="contact" className="py-10 sm:py-10 relative bg-white text-slate-800 font-sans overflow-hidden select-none">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-6 relative z-10 space-y-6">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 ">
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Direct Executive Consultation
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let&apos;s Build Your{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Platform
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-[11px] font-mono shrink-0">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Engineers Available Now</span>
            </div>
          </div>
        </ScrollReveal>

        {/* FULL BANNER CONTAINER WITH FORWARD-FACING BACKGROUND IMAGE */}
        <ScrollReveal direction="up" delay={50}>
          {/* MOBILE VIEW (< lg): Dedicated Mobile Image Header + Clean Form Card */}
          <div className="block lg:hidden space-y-4">
            {/* Mobile Top Image Banner */}
            <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 bg-slate-900 border border-slate-200/80 shadow-xs">
              <img
                src="/home/digital-raiz-contact-section-forward-facing.webp"
                alt="Digital Raiz Contact"
                className="w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white space-y-0.5">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-pink-500/90 backdrop-blur-md text-[8.5px] font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-2.5 h-2.5" />
                  Hyderabad Engineering Hub
                </div>
                <h3 className="text-base font-extrabold text-white tracking-tight">
                  Connect with Principal Architects
                </h3>
              </div>
            </div>

            {/* Mobile Form Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 space-y-3.5 shadow-xs">
              {/* Card Title Header */}
              <div className="space-y-1 border-b border-slate-100 pb-2.5">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100 text-[8.5px] font-mono font-bold uppercase tracking-wider">
                  <MessageCircle className="w-2.5 h-2.5 text-pink-500" />
                  Free Technical Audit
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Start Your Consultation
                </h3>
              </div>

              {submitted ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center mx-auto shadow-2xs">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Consultation Scheduled!</h4>
                  <p className="text-slate-500 text-[11px] max-w-xs mx-auto leading-relaxed">
                    A Digital Raiz principal architect will review your project details and respond within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submitForm} className="space-y-3">
                  {/* Service Selector Chips */}
                  <div className="space-y-1">
                    <label className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Primary Target Solution
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {serviceOptions.map((opt) => {
                        const Icon = opt.icon;
                        const isSelected = (formData.service || "Web Development") === opt.label;
                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => setFormField("service", opt.label)}
                            className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-[9.5px] font-mono font-bold transition-all cursor-pointer ${isSelected
                              ? "bg-pink-600 text-white border-pink-600 shadow-2xs"
                              : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/70"
                              }`}
                          >
                            {/* <Icon className="w-3 h-3 shrink-0" /> */}
                            <span className="truncate">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormField("name", e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormField("email", e.target.value)}
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormField("phone", e.target.value)}
                      placeholder="+91 (10-digit number)"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Project Brief Field */}
                  <div>
                    <label className="text-[9.5px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Brief Project Overview *
                    </label>
                    <textarea
                      rows={2.5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormField("message", e.target.value)}
                      placeholder="Describe your goals, tech preferences, or desired timeline..."
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action CTA */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border-0"
                  >
                    {submitting ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <span>Request Free Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  {/* Security Guarantee Footer */}
                  <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[8.5px] font-mono text-slate-400 text-center">
                    <Lock className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                    <span>Strict NDA Guarantee • Zero Spam • 2-Hour Response Time</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* DESKTOP VIEW (lg:flex): Full Width Background Banner Card */}
          <div className="hidden lg:flex relative rounded-2xl overflow-hidden bg-white min-h-[440px] items-center">
            {/* Direct Background Image (Full Width Banner - Crisp & Normal) */}
            <img
              src="/home/digital-raiz-contact-section-forward-facing.webp"
              alt="Digital Raiz Contact Background"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-100"
            />

            {/* Grid Overlay: Left side open for artwork, Right side form card */}
            <div className="relative z-10 w-full p-7 lg:p-9 grid grid-cols-12 gap-8 items-center">
              {/* LEFT SPACE: Leaves image artwork visible (lg:col-span-6) */}
              <div className="col-span-6 min-h-[300px]" />

              {/* RIGHT COLUMN: Ultra-Clean Minimalist Form Card (lg:col-span-6) */}
              <div className="col-span-6 w-full ml-auto max-w-lg">
                <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-6 space-y-4">
                  {/* Card Title Header */}
                  <div className="space-y-1 border-b border-slate-100 pb-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100 text-[9px] font-mono font-bold uppercase tracking-wider">
                      <MessageCircle className="w-3 h-3 text-pink-500" />
                      Free Technical Audit
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      Start Your Consultation
                    </h3>
                  </div>

                  {submitted ? (
                    <div className="py-8 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center mx-auto shadow-2xs">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900">Consultation Scheduled!</h4>
                      <p className="text-slate-500 text-xs max-w-xs mx-auto leading-relaxed">
                        A Digital Raiz principal architect will review your project details and respond within 2 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={submitForm} className="space-y-3.5">
                      {/* Service Selector Chips */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                          Primary Target Solution
                        </label>
                        <div className="grid grid-cols-4 gap-1.5">
                          {serviceOptions.map((opt) => {
                            const Icon = opt.icon;
                            const isSelected = (formData.service || "Web Development") === opt.label;
                            return (
                              <button
                                key={opt.label}
                                type="button"
                                onClick={() => setFormField("service", opt.label)}
                                className={`flex flex-col items-center justify-center p-2 rounded-lg border text-[10px] font-mono font-bold transition-all cursor-pointer ${isSelected
                                  ? "bg-pink-600 text-white border-pink-600 shadow-xs scale-[1.02]"
                                  : "bg-white hover:bg-slate-100 text-slate-600 border-slate-200/70"
                                  }`}
                              >
                                {/* <Icon className="w-3.5 h-3.5 mb-1" /> */}
                                <span className="truncate max-w-full">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormField("name", e.target.value)}
                            placeholder="John Doe"
                            className="w-full bg-white border border-slate-200/80 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormField("email", e.target.value)}
                            placeholder="john@company.com"
                            className="w-full bg-white border border-slate-200/80 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone Number Field */}
                      <div>
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormField("phone", e.target.value)}
                          placeholder="+91 (10-digit number)"
                          className="w-full bg-white border border-slate-200/80 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Project Brief Field */}
                      <div>
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                          Brief Project Overview *
                        </label>
                        <textarea
                          rows={2.5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormField("message", e.target.value)}
                          placeholder="Describe your goals, tech preferences, or desired timeline..."
                          className="w-full bg-white border border-slate-200/80 rounded-lg p-3 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Action CTA */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border-0"
                      >
                        {submitting ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <span>Request Free Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      {/* Security Guarantee Footer */}
                      <div className="flex items-center justify-center gap-1.5 pt-1 text-[9px] font-mono text-slate-400">
                        <Lock className="w-3 h-3 text-emerald-500" />
                        <span>Strict NDA Guarantee • Zero Spam • 2-Hour Response Time</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
