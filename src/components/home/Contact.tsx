"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Clock,
  ShieldCheck,
  ArrowRight,
  Laptop,
  Smartphone,
  TrendingUp,
  MessageCircle,
  Code2,
  ExternalLink
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
    { label: "SEO & Growth Marketing", icon: TrendingUp },
    { label: "Custom SaaS / Cloud", icon: Code2 },
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
    <section id="contact" className="py-16 sm:py-10 relative bg-white text-slate-800 font-sans overflow-hidden border-t border-slate-100 select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/5 via-violet-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-indigo-500/5 via-pink-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 relative z-10 space-y-8">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Direct Executive Consultation
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let&apos;s Build Your{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Brand Together
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Engineers &amp; Strategists Available Now</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT SIDE: Value Propositions & Direct Communication Console (lg:col-span-5) */}
          <ScrollReveal direction="left" className="lg:col-span-5 flex flex-col">
            <div className="rounded-lg bg-gradient-to-br from-slate-50/90 via-white to-pink-50/20 p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col justify-between h-full space-y-6">

              <div className="space-y-5">
                {/* <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Whether you need to dominate Google search rankings, launch high-conversion advertising, build a fast corporate web platform, or engineer scalable iOS/Android applications, our Hyderabad team provides direct strategy and execution.
                </p> */}

                {/* 3 Value Pillars */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3 shadow-2xs hover:border-pink-300 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">Guaranteed 4-Hour Response</h4>
                      <p className="text-[11px] text-slate-500">Direct connection with senior engineering &amp; marketing leads.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3 shadow-2xs hover:border-pink-300 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">Complimentary Strategy Audit</h4>
                      <p className="text-[11px] text-slate-500">Free technical architecture, Core Web Vitals &amp; SEO roadmap.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3 shadow-2xs hover:border-pink-300 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">100% IP &amp; Code Ownership</h4>
                      <p className="text-[11px] text-slate-500">Full source code, repositories, and asset handover upon delivery.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Direct Channels
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="tel:+919494613601"
                    className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-pink-300 hover:shadow-xs transition-all flex items-center gap-2.5 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-mono text-slate-400 uppercase">Call / WhatsApp</div>
                      <div className="text-[11px] font-bold text-slate-900 group-hover:text-pink-600 truncate transition-colors">+91-9494613601</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@digitalraiz.com"
                    className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-xs transition-all flex items-center gap-2.5 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-mono text-slate-400 uppercase">Direct Email</div>
                      <div className="text-[11px] font-bold text-slate-900 group-hover:text-indigo-600 truncate transition-colors">info@digitalraiz.com</div>
                    </div>
                  </a>
                </div>

                <a
                  href="https://maps.google.com/?q=Manjeera+Majestic+Commercial+KPHB+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-pink-300 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-mono text-slate-400 uppercase">Hyderabad Headquarters</div>
                      <div className="text-[11px] font-bold text-slate-800 truncate">#616, Manjeera Majestic, KPHB-JNTU Road</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-600 shrink-0 transition-colors" />
                </a>
              </div>

            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: Interactive Inquiry Console (lg:col-span-7) */}
          <ScrollReveal direction="right" delay={100} className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-lg p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between relative overflow-hidden">
              {/* Top Accent Strip */}
              <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 rounded-t-3xl -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 mb-6" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-4 my-auto">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center shadow-sm">
                    <CheckCircle className="w-8 h-8 text-emerald-600 animate-bounce" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Strategy Request Received!</h3>
                    <p className="text-slate-600 text-xs max-w-sm font-normal leading-relaxed">
                      Thank you for contacting Digital Raiz. Our technical and growth teams are reviewing your details and will connect within 4 business hours.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://wa.me/919494613601"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp Instantly</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Project
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Step 1: Select Service Chips */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      Step 1: Choose Interested Capability
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {serviceOptions.map((svc) => {
                        const Icon = svc.icon;
                        const isSelected = form.service === svc.label;
                        return (
                          <button
                            type="button"
                            key={svc.label}
                            onClick={() => setForm({ ...form, service: svc.label })}
                            className={`flex flex-col items-center text-center p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${isSelected
                              ? "bg-pink-50/80 border-pink-400 text-pink-700 shadow-xs scale-[1.02]"
                              : "bg-slate-50/80 border-slate-200/80 text-slate-600 hover:border-slate-300 hover:bg-white"
                              }`}
                          >
                            <Icon className={`w-4 h-4 mb-1 ${isSelected ? "text-pink-600" : "text-slate-400"}`} />
                            <span className="text-[11px] font-bold leading-tight">{svc.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Contact Details */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      Step 2: Your Contact &amp; Project Info
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <span className="text-[10px] font-medium text-slate-500">Your Full Name *</span>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all text-xs"
                          placeholder="e.g. Rahul Sharma"
                        />
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-medium text-slate-500">Work Email *</span>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all text-xs"
                          placeholder="rahul@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-medium text-slate-500">Phone / WhatsApp Number *</span>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all text-xs"
                        placeholder="+91-9494613601"
                      />
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-medium text-slate-500">Brief Message or Requirements *</span>
                      <textarea
                        required
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all text-xs resize-none"
                        placeholder="Tell us about your target goals, timeline, or current challenges..."
                      />
                    </div>
                  </div>

                  {/* Submit Button & Trust Note */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 font-bold text-white shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 text-xs uppercase tracking-wider cursor-pointer"
                    >
                      {submitting ? (
                        <span>Processing Strategy Request...</span>
                      ) : (
                        <>
                          <span>Request Consultation &amp; Audit</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <div className="flex flex-wrap items-center justify-between text-[9.5px] text-slate-400 font-mono gap-2">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-500" />
                        100% Privacy &amp; NDA Assured
                      </span>
                      <span>No Spam • Direct Engineering Team Reply</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
