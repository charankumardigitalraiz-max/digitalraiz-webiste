"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  CheckCircle,
  Sparkles,
  Laptop,
  Smartphone,
  TrendingUp,
  Code2,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";

export function openContactModal(service?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-contact-modal", { detail: { service } }));
  }
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultService = "Web Development"
}: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setForm((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  // Lock scroll & handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const baseServiceOptions = [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing & SEO",
    "Influencer Marketing",
    "AI & Generative AI Solutions",
    "Machine Learning Studio",
    "SAP Cloud Services",
    "Cloud & DevOps Engineering",
    "Testing & Quality Assurance",
    "Data Analytics & BI",
    "Cybersecurity Services",
    "Other Services"
  ];
  
  // Ensure the dynamically passed service is in the dropdown list
  const serviceOptions = Array.from(new Set([...baseServiceOptions, form.service]));

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
        service: defaultService,
        message: "",
      });
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-[110] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="bg-white border border-slate-200/90 rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-800 my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 rounded-t-3xl -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 mb-6" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="Close contact modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 my-auto">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center shadow-sm">
              <CheckCircle className="w-8 h-8 text-emerald-600 animate-bounce" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Consultation Request Received!</h3>
              <p className="text-slate-600 text-xs max-w-sm font-normal leading-relaxed">
                Thank you for contacting Digital Raiz. Our engineering and strategy team will connect with you within 4 business hours.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/919494613601"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Instantly</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Fast Response SLA • Under 4 Hours
              </div>
              <h2 id="contact-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Let&apos;s Build Your{" "}
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Brand Together
                </span>
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed font-normal">
                Fill out the quick inquiry deck below to connect directly with our engineering &amp; growth leads.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Step 1: Select Service */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  Select Service
                </label>
                <div className="relative">
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-3 text-slate-900 focus:outline-none focus:border-pink-500 transition-all text-xs appearance-none cursor-pointer font-medium"
                  >
                    {serviceOptions.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2: Form Inputs */}
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-medium text-slate-500">Your Full Name *</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-pink-500 transition-all text-xs"
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
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-pink-500 transition-all text-xs"
                      placeholder="rahul@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-medium text-slate-500">Phone / WhatsApp Number *</span>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-pink-500 transition-all text-xs"
                    placeholder="+91-9494613601"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-medium text-slate-500">Brief Message or Requirements *</span>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-pink-500 transition-all text-xs resize-none"
                    placeholder="Tell us about your target goals, timeline, or current challenges..."
                  />
                </div>
              </div>

              {/* Submit Button & Trust Footnote */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 font-bold text-white shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 text-xs uppercase tracking-wider cursor-pointer"
                >
                  {submitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <span>Send Strategy Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[9.5px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    100% Privacy &amp; NDA Assured
                  </span>
                  <div className="flex items-center gap-3">
                    <a href="tel:+919494613601" className="hover:text-pink-600 flex items-center gap-1">
                      <Phone className="w-2.5 h-2.5" /> Call
                    </a>
                    <a href="mailto:info@digitalraiz.com" className="hover:text-pink-600 flex items-center gap-1">
                      <Mail className="w-2.5 h-2.5" /> Email
                    </a>
                  </div>
                </div>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
