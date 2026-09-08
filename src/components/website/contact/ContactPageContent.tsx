"use client";

import { useEffect, useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin, Sparkles, AlertCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContactStore } from "@/store";

export default function ContactPageContent() {
  const {
    processSteps,
    officeDetails,
    formData,
    submitting,
    submitted,
    setFormField,
    submitForm,
  } = useContactStore();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlSubject = params.get("subject");
      const urlService = params.get("service");

      if (urlSubject) {
        setFormField("subject", urlSubject);
      } else if (urlService) {
        setFormField("subject", `Inquiry regarding ${urlService}`);
        setFormField("service", urlService);
      }
    }
  }, [setFormField]);

  const validate = (fieldValues = formData) => {
    const tempErrors: { [key: string]: string } = {};

    if ("name" in fieldValues) {
      if (!fieldValues.name.trim()) {
        tempErrors.name = "Full name is required";
      } else if (fieldValues.name.trim().length < 2) {
        tempErrors.name = "Name must be at least 2 characters";
      }
    }

    if ("phone" in fieldValues) {
      const phoneDigits = fieldValues.phone.replace(/[^0-9]/g, "");
      if (!fieldValues.phone.trim()) {
        tempErrors.phone = "Phone number is required";
      } else if (phoneDigits.length !== 10) {
        tempErrors.phone = "Must be a valid 10-digit mobile number";
      } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
        tempErrors.phone = "Please enter a valid 10-digit mobile number";
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

    if ("subject" in fieldValues) {
      if (!fieldValues.subject || !fieldValues.subject.trim()) {
        tempErrors.subject = "Subject is required";
      } else if (fieldValues.subject.trim().length < 3) {
        tempErrors.subject = "Subject must be at least 3 characters";
      }
    }

    if ("message" in fieldValues) {
      if (!fieldValues.message.trim()) {
        tempErrors.message = "Message details are required";
      } else if (fieldValues.message.trim().length < 10) {
        tempErrors.message = "Message must be at least 10 characters";
      }
    }

    return tempErrors;
  };

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    let sanitizedValue = value;
    if (field === "phone") {
      sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    }
    setFormField(field, sanitizedValue);

    if (touched[field]) {
      const updatedData = { ...formData, [field]: sanitizedValue };
      const fieldErrors = validate(updatedData);
      setErrors((prev) => ({
        ...prev,
        [field]: fieldErrors[field] || "",
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field] || "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    submitForm(e);
    setErrors({});
    setTouched({});
  };

  const handlePhoneClick = (e: React.MouseEvent, phone: string) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    window.location.href = `tel:${cleanPhone}`;

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(phone);
      setCopiedPhone(phone);
      setTimeout(() => setCopiedPhone(null), 2200);
    }
  };

  const handleEmailClick = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Inquiry from Digital Raiz Website");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=${subject}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    window.location.href = `mailto:${email}?subject=${subject}`;

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2200);
    }
  };

  return (
    <div className="relative bg-white text-slate-800 overflow-hidden min-h-screen">
      {/* Background ambient accents */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100/40 via-purple-100/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/30 via-pink-100/20 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* Top Hero Section (Edge-to-Edge full width background image with text overlay) */}
      <ScrollReveal direction="up" className="w-full">
        <section className="relative w-full h-[350px] sm:h-[450px] overflow-hidden shadow-sm">
          {/* Background Image */}
          <img
            src="/contact/contact-hero.webp"
            alt="Hyderabad Office Workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-center max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-12 md:px-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[9px] font-mono font-bold text-pink-400 uppercase tracking-widest w-fit">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              Strategic Growth Consultation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
              Let&apos;s Build Your <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Brand Together</span>
            </h1>
            <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
              Have any questions or comments? Drop us a line. We&apos;d love to hear from you! Connect with our digital strategists and systems engineers in Hyderabad to design, build, and optimize your next digital platform.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Main container for lower content */}
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 relative z-10 space-y-12 sm:space-y-16 py-12 sm:py-16">

        {/* Lower Main Layout: Details (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN: Contact Details (Takes 5/12 Width - Matches Form Card Height) */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-5 flex flex-col h-full">

            {/* Contact Info Card */}
            <div className="bg-white border border-slate-200/80 rounded-lg p-8 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.02)] space-y-8 flex flex-col justify-between h-full">

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Address</h3>
              </div>

              {/* Details List */}
              <div className="space-y-6 flex-grow flex flex-col justify-around">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Office Address</h4>
                    <p className="text-slate-800 font-bold text-xs leading-relaxed">
                      {officeDetails.companyName},<br />
                      {officeDetails.addressLines[0]}<br />
                      {officeDetails.addressLines[1]}<br />
                      {officeDetails.addressLines[2]}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Phone Numbers</h4>
                    <div className="flex flex-col text-xs font-bold text-slate-800 gap-1">
                      {officeDetails.phones.map((phone, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => handlePhoneClick(e, phone)}
                          className="hover:text-pink-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                          title="Click to call / copy phone number"
                        >
                          <span>{phone}</span>
                          {copiedPhone === phone && (
                            <span className="text-[9px] font-mono font-bold text-pink-600 bg-pink-50 px-1.5 py-0.5 rounded border border-pink-100 animate-in fade-in">
                              Copied!
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Email Address</h4>
                    <div className="flex flex-col text-xs font-bold text-slate-800 gap-1">
                      {officeDetails.emails.map((email, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => handleEmailClick(e, email)}
                          className="hover:text-pink-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                          title="Click to compose email / copy address"
                        >
                          <span>{email}</span>
                          {copiedEmail === email && (
                            <span className="text-[9px] font-mono font-bold text-pink-600 bg-pink-50 px-1.5 py-0.5 rounded border border-pink-100 animate-in fade-in">
                              Copied!
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </ScrollReveal>

          {/* RIGHT COLUMN: Modern Clean Contact Form (Takes 7/12 Width) */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-white border border-slate-200/80 rounded-lg p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between h-full">
              <div className="space-y-6">

                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">
                    Send Us A Message
                  </h3>
                  <p className="text-slate-500 text-xs font-normal">
                    Fill out the inquiry form below and our team will get back to you within 2 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-8 text-center space-y-3">
                    <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                    <p className="text-slate-600 text-xs max-w-md mx-auto">
                      Thank you for reaching out. A Digital Raiz senior strategist has received your inquiry and will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Full Name */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                            Full Name *
                          </label>
                          {touched.name && errors.name && (
                            <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                              <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                              {errors.name}
                            </span>
                          )}
                        </div>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleFieldChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          className={`w-full bg-slate-50/50 border text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all font-medium placeholder:text-slate-400 focus:outline-none ${touched.name && errors.name
                            ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-200/80 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/10"
                            }`}
                          placeholder="Full Name"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                            Phone Number *
                          </label>
                          {touched.phone && errors.phone && (
                            <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                              <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                              {errors.phone}
                            </span>
                          )}
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          inputMode="numeric"
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => handleFieldChange("phone", e.target.value)}
                          onBlur={() => handleBlur("phone")}
                          className={`w-full bg-slate-50/50 border text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all font-mono placeholder:text-slate-400 focus:outline-none ${touched.phone && errors.phone
                            ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-200/80 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/10"
                            }`}
                          placeholder="10-digit mobile number (e.g. 9494613601)"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Email Address */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                            Email Address *
                          </label>
                          {touched.email && errors.email && (
                            <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                              <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => handleFieldChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          className={`w-full bg-slate-50/50 border text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all font-medium placeholder:text-slate-400 focus:outline-none ${touched.email && errors.email
                            ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-200/80 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/10"
                            }`}
                          placeholder="Email Address"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                            Subject *
                          </label>
                          {touched.subject && errors.subject && (
                            <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                              <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                              {errors.subject}
                            </span>
                          )}
                        </div>
                        <input
                          type="text"
                          id="subject"
                          value={formData.subject || ""}
                          onChange={(e) => handleFieldChange("subject", e.target.value)}
                          onBlur={() => handleBlur("subject")}
                          className={`w-full bg-slate-50/50 border text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all font-medium placeholder:text-slate-400 focus:outline-none ${touched.subject && errors.subject
                            ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-200/80 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/10"
                            }`}
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                          Write A Message... *
                        </label>
                        {touched.message && errors.message && (
                          <span className="text-[10px] text-rose-500 font-medium flex items-center gap-0.5 animate-in fade-in">
                            <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                            {errors.message}
                          </span>
                        )}
                      </div>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleFieldChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        className={`w-full bg-slate-50/50 border text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all resize-none font-medium placeholder:text-slate-400 focus:outline-none ${touched.message && errors.message
                          ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-200/80 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-500/10"
                          }`}
                        placeholder="Write A Message..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 font-bold text-white shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 uppercase tracking-widest text-xs cursor-pointer border-0"
                    >
                      {submitting ? "Sending..." : "Submit Quote"}
                      {!submitting && <Send className="w-3.5 h-3.5" />}
                    </button>
                  </form>
                )}

              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Dynamic 3-Step Process Flow */}
        <ScrollReveal direction="up" delay={200}>
          <div className="bg-white border border-slate-200/80 rounded-lg p-8 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.02)] space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-650 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full">
                What Happens Next?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">
                Our Consultation Process
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="bg-slate-50/60 border border-slate-200/70 rounded-2xl p-6 space-y-3 relative group hover:border-pink-300 hover:bg-white transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 tracking-tight">{step.title}</h4>
                    <p className="text-slate-600 text-xs font-normal leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Full-Width Interactive Google Maps Location Frame */}
        <ScrollReveal direction="up" delay={250}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-650">Find Our Head Office</span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">Hyderabad Location Map</h3>
              </div>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden border border-slate-200/80 shadow-md relative bg-slate-100">
              <iframe
                title="Digital Raiz Google Maps Location"
                src={officeDetails.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

