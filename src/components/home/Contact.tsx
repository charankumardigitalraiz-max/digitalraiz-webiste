"use client";

import React, { useState } from "react";
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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    { label: "Web Development", icon: Laptop },
    { label: "Mobile Apps", icon: Smartphone },
    { label: "SEO & Growth", icon: TrendingUp },
    { label: "Custom SaaS", icon: Code2 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Web Development",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-10 sm:py-10 relative bg-white text-slate-800 font-sans overflow-hidden select-none">
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-6 relative z-10 space-y-6">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-100">
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
          <div className="relative rounded-2xl overflow-hidden bg-white min-h-[440px] flex items-center ">

            {/* Direct Background Image (Full Width Banner - Crisp & Normal) */}
            <img
              src="/home/digital-raiz-contact-section-forward-facing.webp"
              alt="Digital Raiz Contact Background"
              className="absolute inset-0 w-full h-full object-cover object-left md:object-center pointer-events-none opacity-100"
            />

            {/* Grid Overlay: Left side open for artwork, Right side form card */}
            <div className="relative z-10 w-full p-4 sm:p-7 lg:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* LEFT SPACE: Leaves image artwork visible (lg:col-span-6) */}
              <div className="hidden lg:block lg:col-span-6 min-h-[300px]" />

              {/* RIGHT COLUMN: Ultra-Clean Minimalist Form Card (lg:col-span-6) */}
              <div className="lg:col-span-6 w-full lg:ml-auto max-w-lg">
                <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-4">

                  {/* Card Title Header */}
                  <div className="space-y-1 border-b border-slate-100 pb-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100 text-[9px] font-mono font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-pink-500" />
                      Direct Consultation
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Get in <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
                    </h3>
                    <p className="text-slate-500 text-[11px]">Fill out the form below and our team will respond within 4 hours.</p>
                  </div>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-8 space-y-3">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-emerald-600 animate-bounce" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-slate-900">Request Received!</h3>
                        <p className="text-slate-600 text-xs max-w-xs font-normal">
                          Our technical team is reviewing your message and will reply within 4 business hours.
                        </p>
                      </div>
                      <div className="pt-2 flex items-center gap-2">
                        <a
                          href="https://wa.me/919494613601"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Chat on WhatsApp</span>
                        </a>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold cursor-pointer hover:bg-slate-50"
                        >
                          Submit Another
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">

                      {/* Service Choice Switcher */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 tracking-tight block">Select Service *</label>
                        <div className="flex flex-wrap gap-2">
                          {serviceOptions.map((svc) => {
                            const isSelected = form.service === svc.label;
                            const Icon = svc.icon;
                            return (
                              <button
                                type="button"
                                key={svc.label}
                                onClick={() => setForm({ ...form, service: svc.label })}
                                className={`flex items-center gap-1.5 py-2 px-3 rounded-xl text-xs transition-all duration-200 cursor-pointer border shrink-0 ${isSelected
                                    ? "bg-pink-50 border-pink-300 text-pink-600 font-bold shadow-2xs"
                                    : "bg-slate-50/80 border-slate-200/80 text-slate-600 font-medium hover:bg-white hover:text-slate-900 hover:border-slate-300"
                                  }`}
                              >
                                <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-pink-500" : "text-slate-400"}`} />
                                <span className="whitespace-nowrap">{svc.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Inputs Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-800 tracking-tight block">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/15 transition-all shadow-2xs"
                            placeholder="e.g. Rahul Sharma"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-800 tracking-tight block">Work Email *</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/15 transition-all shadow-2xs"
                            placeholder="rahul@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800 tracking-tight block">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/15 transition-all shadow-2xs"
                          placeholder="+91-9494613601"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800 tracking-tight block">Project Details &amp; Requirements *</label>
                        <textarea
                          required
                          rows={3}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/15 transition-all shadow-2xs resize-none"
                          placeholder="Briefly describe your project goals, scope, target launch date, or questions..."
                        />
                      </div>

                      {/* Submit CTA */}
                      <div className="pt-1 space-y-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full h-10 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 font-extrabold text-white text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 cursor-pointer border-0 flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <span>Processing...</span>
                          ) : (
                            <>
                              <span>Request Executive Consultation</span>
                              <ArrowRight className="w-3.5 h-3.5 text-white" />
                            </>
                          )}
                        </button>

                        <div className="flex items-center justify-between text-[9.5px] text-slate-400 font-mono pt-0.5">
                          <span className="flex items-center gap-1 font-semibold text-slate-500">
                            <Lock className="w-3 h-3 text-emerald-500" />
                            100% Confidential &amp; NDA Assured
                          </span>
                          <span>4-Hour SLA Guarantee</span>
                        </div>
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
