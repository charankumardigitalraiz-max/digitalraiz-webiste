"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "SEO & Digital Marketing",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        service: "SEO & Digital Marketing",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-white text-slate-800 font-sans overflow-hidden border-t border-slate-100 select-none">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/5 to-primary-hover/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Info Side */}
          <ScrollReveal direction="left" className="lg:col-span-5 flex flex-col">
            <div className="flex flex-col justify-between space-y-8 h-full">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                    Contact Us
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] uppercase tracking-tight leading-[0.95]">
                  Let&apos;s Build Your <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Brand Together</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed pt-1">
                  Ready to turn your requirements into practical digital solutions? Get in touch with our team of digital marketing and development experts in Hyderabad.
                </p>
              </div>

              <div className="space-y-5 my-8">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-pink-50/50 border border-pink-100 flex items-center justify-center text-primary-hover shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Email Us</h4>
                    <p className="text-slate-800 font-bold text-xs sm:text-sm">info@digitalraiz.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Call Us</h4>
                    <p className="text-slate-800 font-bold text-xs sm:text-sm">+91-9494613601</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-pink-50/30 border border-pink-100/50 flex items-center justify-center text-primary shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Office Location</h4>
                    <p className="text-slate-800 font-bold text-xs sm:text-sm leading-tight">
                      #616, Manjeera Majestic Commercial, <br />
                      KPHB-JNTU Road, Hyderabad
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[9px] text-slate-450 leading-relaxed font-light">
                * By submitting this form you agree to receive follow-up emails and messages regarding your project requirement.
              </p>
            </div>
          </ScrollReveal>

          {/* Form Side */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:border-pink-300 transition-all duration-300 relative h-full">

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <div className="w-14 h-14 bg-pink-50/50 rounded-full border border-pink-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-7 h-7 text-pink-500 animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase tracking-tight">Message Sent Successfully!</h3>
                  <p className="text-slate-600 text-xs max-w-xs font-light leading-relaxed">
                    Thank you for reaching out to Digital Raiz. One of our experts will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[10px] font-bold text-primary hover:text-primary-hover transition-colors uppercase tracking-wider"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-[9px] font-bold uppercase tracking-wider text-slate-450">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-primary-hover focus:ring-1 focus:ring-primary-hover transition-all text-xs"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-[9px] font-bold uppercase tracking-wider text-slate-450">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-primary-hover focus:ring-1 focus:ring-primary-hover transition-all text-xs"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-[9px] font-bold uppercase tracking-wider text-slate-450">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-primary-hover focus:ring-1 focus:ring-primary-hover transition-all text-xs"
                        placeholder="+91-9494613601"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="block text-[9px] font-bold uppercase tracking-wider text-slate-450">
                        Interested Service
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-primary-hover focus:ring-1 focus:ring-primary-hover transition-all text-xs cursor-pointer"
                      >
                        <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Custom Web App">Custom Web App</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-[9px] font-bold uppercase tracking-wider text-slate-450">
                      Brief Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-primary-hover focus:ring-1 focus:ring-primary-hover transition-all text-xs resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-to-r from-primary via-primary-hover to-pink-600 font-bold text-white shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 uppercase tracking-widest text-[10px]"
                  >
                    {submitting ? "Sending..." : "Send Inquiry"}
                    {!submitting && <Send className="w-3.5 h-3.5" />}
                  </button>
                </form>
              )}

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
