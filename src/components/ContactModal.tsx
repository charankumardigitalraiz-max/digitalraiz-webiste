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
  Mail,
  AlertCircle
} from "lucide-react";

export function resolveServiceAndSubject(serviceInput?: string, subjectInput?: string): {
  service: string;
  subject: string;
} {
  const baseServiceOptions = [
    "Web Development",
    "Mobile App Development",
    "AI & Generative AI Solutions",
    "Data Analytics & BI",
    "Cybersecurity Services",
    "SAP Cloud Services",
    "Cloud & DevOps Engineering",
    "Testing & Quality Assurance",
    "Digital Marketing & SEO",
    "Influencer Marketing",
    "Other Services"
  ];

  if (!serviceInput) {
    return {
      service: "Web Development",
      subject: subjectInput || "General Service Proposal",
    };
  }

  // Check exact match first
  const exactMatch = baseServiceOptions.find(
    (s) => s.toLowerCase() === serviceInput.trim().toLowerCase()
  );
  if (exactMatch) {
    return {
      service: exactMatch,
      subject: subjectInput || `Inquiry regarding ${exactMatch}`,
    };
  }

  // If serviceInput doesn't match base options directly, infer main service and treat serviceInput as subject
  const inputLower = serviceInput.toLowerCase();
  let resolvedService = "Other Services";

  if (inputLower.includes("data") || inputLower.includes("bi") || inputLower.includes("analytics")) {
    resolvedService = "Data Analytics & BI";
  } else if (inputLower.includes("cyber") || inputLower.includes("security") || inputLower.includes("pentest") || inputLower.includes("vapt") || inputLower.includes("hacker")) {
    resolvedService = "Cybersecurity Services";
  } else if (inputLower.includes("qa") || inputLower.includes("testing") || inputLower.includes("quality")) {
    resolvedService = "Testing & Quality Assurance";
  } else if (inputLower.includes("web") || inputLower.includes("frontend") || inputLower.includes("backend")) {
    resolvedService = "Web Development";
  } else if (inputLower.includes("mobile") || inputLower.includes("app") || inputLower.includes("ios") || inputLower.includes("android")) {
    resolvedService = "Mobile App Development";
  } else if (inputLower.includes("ai") || inputLower.includes("ml") || inputLower.includes("intelligence") || inputLower.includes("machine learning")) {
    resolvedService = "AI & Generative AI Solutions";
  } else if (inputLower.includes("sap")) {
    resolvedService = "SAP Cloud Services";
  } else if (inputLower.includes("cloud") || inputLower.includes("devops") || inputLower.includes("aws") || inputLower.includes("azure")) {
    resolvedService = "Cloud & DevOps Engineering";
  } else if (inputLower.includes("seo") || inputLower.includes("digital marketing") || inputLower.includes("ppc")) {
    resolvedService = "Digital Marketing & SEO";
  } else if (inputLower.includes("influencer")) {
    resolvedService = "Influencer Marketing";
  }

  return {
    service: resolvedService,
    subject: subjectInput || serviceInput,
  };
}

export function openContactModal(service?: string, subject?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-contact-modal", { detail: { service, subject } }));
  }
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultSubject?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultService = "Web Development",
  defaultSubject
}: ContactModalProps) {
  const initialResolved = resolveServiceAndSubject(defaultService, defaultSubject);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialResolved.service,
    subject: initialResolved.subject,
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const email = "info@digitalraiz.com";
    const subject = encodeURIComponent(form.subject || `Inquiry regarding ${form.service}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=${subject}`;

    // Open Gmail compose tab in new window
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    // Also trigger mailto: as protocol fallback
    window.location.href = `mailto:${email}?subject=${subject}`;

    // Copy email to clipboard
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const phone = "+919494613601";

    // Trigger mobile tel: protocol
    window.location.href = `tel:${phone}`;

    // Copy phone number to clipboard
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("+91 94946 13601");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  useEffect(() => {
    const resolved = resolveServiceAndSubject(defaultService, defaultSubject);
    setForm((prev) => ({
      ...prev,
      service: resolved.service,
      subject: resolved.subject,
    }));
  }, [defaultService, defaultSubject]);

  // Reset errors and touched state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setErrors({});
      setTouched({});
      setSubmitted(false);
    }
  }, [isOpen]);

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
    "AI & Generative AI Solutions",
    "Data Analytics & BI",
    "Cybersecurity Services",
    "SAP Cloud Services",
    "Cloud & DevOps Engineering",
    "Testing & Quality Assurance",
    "Digital Marketing & SEO",
    "Influencer Marketing",
    "Other Services"
  ];

  // Ensure the dynamically passed service is in the dropdown list
  const serviceOptions = Array.from(new Set([...baseServiceOptions, form.service]));

  const validate = (fieldValues = form) => {
    const tempErrors: { [key: string]: string } = {};

    if ("name" in fieldValues) {
      if (!fieldValues.name.trim()) {
        tempErrors.name = "Full name is required";
      } else if (fieldValues.name.trim().length < 2) {
        tempErrors.name = "Name must be at least 2 characters";
      }
    }

    if ("email" in fieldValues) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValues.email.trim()) {
        tempErrors.email = "Work email is required";
      } else if (!emailRegex.test(fieldValues.email.trim())) {
        tempErrors.email = "Please enter a valid work email address";
      }
    }

    if ("phone" in fieldValues) {
      const phoneDigits = fieldValues.phone.replace(/[^0-9]/g, "");
      if (!fieldValues.phone.trim()) {
        tempErrors.phone = "Phone or WhatsApp number is required";
      } else if (phoneDigits.length !== 10) {
        tempErrors.phone = "Must be a valid 10-digit mobile number";
      } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
        tempErrors.phone = "Please enter a valid 10-digit mobile number";
      }
    }

    if ("message" in fieldValues) {
      if (!fieldValues.message.trim()) {
        tempErrors.message = "Message or requirement details required";
      } else if (fieldValues.message.trim().length < 10) {
        tempErrors.message = "Message must be at least 10 characters";
      }
    }

    return tempErrors;
  };

  const handleChange = (field: string, value: string) => {
    let sanitizedValue = value;
    if (field === "phone") {
      // Allow numeric digits only and enforce max 10 digits
      sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    const updatedForm = { ...form, [field]: sanitizedValue };
    setForm(updatedForm);

    if (touched[field]) {
      const fieldErrors = validate(updatedForm);
      setErrors((prev) => ({
        ...prev,
        [field]: fieldErrors[field] || "",
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field] || "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: defaultService,
        subject: defaultSubject || `Inquiry regarding ${defaultService}`,
        message: "",
      });
      setErrors({});
      setTouched({});
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

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Step 1: Select Service */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Select Main Service
                  </label>
                </div>
                <div className="relative">
                  <select
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-3 text-slate-900 focus:outline-none focus:border-pink-500 transition-all text-xs appearance-none cursor-pointer font-semibold shadow-2xs"
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

                {/* Dynamic Purpose / Focus Badge */}
                {form.subject && form.subject !== `Inquiry regarding ${form.service}` && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-50/90 border border-pink-100 text-xs font-semibold text-slate-800 shadow-2xs animate-in fade-in">
                    <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 text-white font-mono text-[9px] font-extrabold uppercase tracking-wider shadow-2xs shrink-0">
                      Inquiry Focus
                    </span>
                    <span className="text-pink-700 font-bold truncate">{form.subject}</span>
                  </div>
                )}
              </div>

              {/* Step 2: Form Inputs */}
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium text-slate-500">Your Full Name *</span>
                      {touched.name && errors.name && (
                        <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none transition-all text-xs ${touched.name && errors.name
                        ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        : "border-slate-200 focus:border-pink-500"
                        }`}
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium text-slate-500">Work Email *</span>
                      {touched.email && errors.email && (
                        <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none transition-all text-xs ${touched.email && errors.email
                        ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        : "border-slate-200 focus:border-pink-500"
                        }`}
                      placeholder="rahul@company.com"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-slate-500">Phone / WhatsApp Number *</span>
                    {touched.phone && errors.phone && (
                      <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                        <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none transition-all text-xs font-mono ${touched.phone && errors.phone
                        ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        : "border-slate-200 focus:border-pink-500"
                      }`}
                    placeholder="Enter 10-digit mobile number (e.g. 9494613601)"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-slate-500">Brief Message or Requirements *</span>
                    {touched.message && errors.message && (
                      <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                        <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none transition-all text-xs resize-none ${touched.message && errors.message
                      ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                      : "border-slate-200 focus:border-pink-500"
                      }`}
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

                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10.5px]">
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>100% Privacy &amp; NDA Assured</span>
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handlePhoneClick}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200/80 hover:border-pink-200 font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
                      title="Click to Call or Copy Phone Number"
                    >
                      <Phone className="w-3 h-3 text-pink-500" />
                      <span>{copiedPhone ? "Number Copied!" : "Call Us"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailClick}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200/80 hover:border-pink-200 font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
                      title="Click to Compose Email or Copy Address"
                    >
                      <Mail className="w-3 h-3 text-pink-500" />
                      <span>{copiedEmail ? "Email Copied!" : "Email Us"}</span>
                    </button>
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

