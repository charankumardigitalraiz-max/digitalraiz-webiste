"use client";

import React from "react";
import {
  CheckCircle,
  Sparkles,
  MessageCircle,
  Lock,
  Laptop,
  User,
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  Clock,
  Send,
  MapPin,
  ChevronDown
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContactStore } from "@/store";
import { useContactDetails } from "@/hooks/useContactDetails";

export default function Contact() {
  const {
    formData,
    submitting,
    submitted,
    setFormField,
    submitForm,
  } = useContactStore();

  const { data: contactData } = useContactDetails();
  const storeOfficeDetails = useContactStore((state) => state.officeDetails);
  const officeDetails = contactData?.officeDetails || storeOfficeDetails;

  const headerServices = [
    "App Development",
    "Web Development",
    "Testing & Quality Assurance",
    "Data Analytics & Business Intelligence",
    "Cloud & DevOps",
    "API & Integration",
    "Cybersecurity",
    "SAP",
    "AI/ML & Generative AI",
    "Salesforce",
    "ServiceNow",
    "Performance Optimization"
  ];

  return (
    <section id="contact" className="py-6 sm:py-10 relative bg-slate-50/50 text-slate-800 font-sans overflow-hidden select-none">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-5">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-100 text-[9.5px] font-mono font-bold text-pink-600 uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3 h-3 text-pink-500" />
              Direct Executive Consultation
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Let&apos;s Build Your{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Platform
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Connect directly with our principal software architects and growth experts for a free technical strategy audit and roadmap.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Glassmorphism Contact Card */}
        <ScrollReveal direction="up" delay={50}>
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.05)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT COLUMN: Executive Perks & Info Panel with Generated Background Banner (lg:col-span-5) */}
            <div className="lg:col-span-5 relative text-white p-5 sm:p-7 flex flex-col justify-between overflow-hidden">
              {/* Background Generated Banner Image */}
              <img
                src="/home/contact-executive-banner.png"
                alt="Digital Raiz Executive Engineering Hub"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Dark Gradient Overlay for Ultra-High Contrast Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-900/50 pointer-events-none" />

              {/* Subtle Ambient Glow inside panel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                {/* Hub Badge & Heading */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[9px] font-mono font-bold uppercase tracking-wider text-pink-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Hyderabad Engineering Hub
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                    Schedule Your Free 30-Min Tech Audit
                  </h3>
                  <p className="text-slate-200 text-xs leading-relaxed drop-shadow-xs">
                    Have an ambitious web, app, or AI project? Speak directly with our lead solution engineers.
                  </p>
                </div>

                {/* Feature Value Highlights */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/20 backdrop-blur-md border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0 mt-0.5 shadow-sm">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white drop-shadow-xs">2-Hour Rapid Response</h4>
                      <p className="text-slate-300 text-[11px] mt-0.5">Our senior team reviews inquiries and responds within 2 business hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white drop-shadow-xs">Strict NDA Protection</h4>
                      <p className="text-slate-300 text-[11px] mt-0.5">Your project details and IP remain 100% confidential.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5 shadow-sm">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white drop-shadow-xs">Zero Cost Architecture Audit</h4>
                      <p className="text-slate-300 text-[11px] mt-0.5">Receive actionable feedback on tech stack and timeline estimates.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Details at bottom of dark panel */}
              <div className="relative z-10 border-t border-white/15 pt-4 mt-5 space-y-2">
                <div className="flex items-center gap-2.5 text-[11px] text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <a href={`mailto:${officeDetails.emails[0]}`} className="hover:text-pink-300 transition-colors font-medium">
                    {officeDetails.emails[0]}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-[11px] text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href={`tel:${officeDetails.phones[0].replace(/[^0-9+]/g, "")}`} className="hover:text-emerald-300 transition-colors font-medium">
                    {officeDetails.phones[0]}
                  </a>
                </div>
                <div className="flex items-start gap-2.5 text-[11px] text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-200 leading-tight">
                    {officeDetails.addressLines[0]} {officeDetails.addressLines[1]}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Form Panel (lg:col-span-7) */}
            <div className="lg:col-span-7 p-5 sm:p-7 bg-white flex flex-col justify-between">
              {submitted ? (
                <div className="my-auto py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 max-w-md mx-auto">
                    <h3 className="text-xl font-black text-slate-900">Consultation Scheduled!</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Thank you for reaching out. A Digital Raiz solution architect will review your inquiry and respond within 2 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={submitForm} className="space-y-3.5">
                  {/* Service Selector Dropdown */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Select Primary Service *
                    </label>
                    <div className="relative">
                      <Laptop className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
                      <select
                        value={formData.service || ""}
                        onChange={(e) => setFormField("service", e.target.value)}
                        className="w-full bg-slate-50/80 border border-slate-200 rounded-lg pl-9 pr-8 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select Services
                        </option>
                        {headerServices.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormField("name", e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormField("email", e.target.value)}
                          placeholder="john@company.com"
                          className="w-full bg-slate-50/80 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone Number Input */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormField("phone", e.target.value)}
                        placeholder="+91 (10-digit mobile number)"
                        className="w-full bg-slate-50/80 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Project Brief & Requirements *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <textarea
                        rows={2}
                        required
                        value={formData.message}
                        onChange={(e) => setFormField("message", e.target.value)}
                        placeholder="Briefly describe your goals, required features, timeline..."
                        className="w-full bg-slate-50/80 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md hover:scale-[1.005] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border-0"
                  >
                    {submitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  {/* Security Guarantee Footer */}
                  {/* <div className="flex items-center justify-center gap-1.5 text-[9.5px] font-mono text-slate-400 pt-0.5">
                    <Lock className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                    <span>Strict NDA Guarantee • Zero Spam • 2-Hour Response Time</span>
                  </div> */}
                </form>
              )}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
