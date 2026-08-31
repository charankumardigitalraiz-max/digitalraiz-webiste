"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin, Sparkles, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPageContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const steps = [
    {
      icon: MessageSquare,
      title: "1. Strategy Call",
      desc: "Discuss objectives, outline scope, and identify high-growth channels.",
      color: "from-pink-500 to-rose-450",
    },
    {
      icon: Clock,
      title: "2. Execution Proposal",
      desc: "Receive a transparent roadmap with deliverables, tech stacks, and metrics.",
      color: "from-violet-650 to-indigo-500",
    },
    {
      icon: ShieldCheck,
      title: "3. Direct Implementation",
      desc: "Launch campaigns, optimize platforms, and track weekly KPIs.",
      color: "from-indigo-600 to-blue-500",
    },
  ];

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
              Let's Build Your <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Brand Together</span>
            </h1>
            <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
              Have any questions or comments? Drop us a line. We'd love to hear from you! Connect with our digital strategists and systems engineers in Hyderabad to design, build, and optimize your next digital platform.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Main container for lower content */}
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 relative z-10 space-y-12 sm:space-y-16 py-12 sm:py-16">

        {/* Lower Main Layout: Details & Collaboration Image (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: Contact Details & Collaboration Image (Takes 5/12 Width) */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-5 flex flex-col gap-2">

            {/* Contact Info Card */}
            <div className="bg-white border border-slate-200/80 rounded-lg p-8 shadow-[0_15px_45px_rgba(0,0,0,0.02)] space-y-6">

              <div className="space-y-2">
                {/* <span className="text-[10px] font-bold text-pink-600 uppercase tracking-widest block">Come Visit Us At</span> */}
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Address</h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-650 shrink-0 shadow-3xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Office Address</h4>
                  <p className="text-slate-800 font-bold text-xs leading-relaxed">
                    DigitalRaiz Creative Solutions PVT LTD,<br />
                    #616, Manjeera Majestic Commercial,<br />
                    KPHB-JNTU road, Hyderabad 500085,<br />
                    Telangana, India.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-650 shrink-0 shadow-3xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Our Phone Number</h4>
                  <p className="text-slate-800 font-bold text-xs">
                    <a href="tel:+91-9494613601" className="hover:text-pink-600 transition-colors block">+91-9494613601</a>
                    <a href="tel:+91-8179163601" className="hover:text-pink-600 transition-colors block">+91-8179163601</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-650 shrink-0 shadow-3xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Our Email</h4>
                  <p className="text-slate-850 font-bold text-xs">
                    <a href="mailto:info@digitalraiz.com" className="hover:text-pink-600 transition-colors block break-all">info@digitalraiz.com</a>
                    <a href="mailto:digitalraizinst@gmail.com" className="hover:text-pink-600 transition-colors block break-all">digitalraizinst@gmail.com</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Image 2: Strategy Discussion (Framed beneath Details) */}
            {/* <div className="relative rounded-lg overflow-hidden border border-slate-200/80 bg-white shadow-xs w-full aspect-[16/5] group">
              <img
                src="/contact/contact-collaboration.webp"
                alt="Strategy & Engineering Discussion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-100 shadow-sm text-[10px] font-bold text-[#1e1b4b]">
                Digital Marketing & Engineering Strategy
              </div>
            </div> */}

          </ScrollReveal>

          {/* RIGHT COLUMN: Send Message Form (Takes 7/12 Width) */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-7 h-full">
            <div className="bg-white border border-slate-200/80 rounded-lg p-5 sm:p-6 shadow-[0_15px_45px_rgba(0,0,0,0.02)] hover:border-pink-300 transition-all duration-300 relative h-full flex flex-col justify-center">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-pink-50 rounded-full border border-pink-100 flex items-center justify-center mb-4 shadow-xs">
                    <CheckCircle className="w-8 h-8 text-pink-500 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1b4b] mb-1.5 uppercase tracking-tight">Successfully Sent!</h3>
                  <p className="text-slate-650 text-xs sm:text-sm max-w-xs font-normal leading-relaxed">
                    Thank you. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 rounded-xl bg-slate-900 hover:bg-pink-650 text-white text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-pink-600 uppercase tracking-widest block">Send Message</span>
                    <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#1e1b4b]">
                      Drop Us A Line
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-50/50 border border-slate-200/80 focus:border-pink-500 focus:bg-white text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all focus:ring-2 focus:ring-pink-500/10 font-medium placeholder:text-slate-400"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        pattern="[0-9]{10}"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-slate-50/50 border border-slate-200/80 focus:border-pink-500 focus:bg-white text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all focus:ring-2 focus:ring-pink-500/10 font-medium placeholder:text-slate-400"
                        placeholder="Phone Number (10 digits)"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-slate-50/50 border border-slate-200/80 focus:border-pink-500 focus:bg-white text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all focus:ring-2 focus:ring-pink-500/10 font-medium placeholder:text-slate-400"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-slate-50/50 border border-slate-200/80 focus:border-pink-500 focus:bg-white text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all focus:ring-2 focus:ring-pink-500/10 font-medium placeholder:text-slate-400"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                      Write A Message... *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200/80 focus:border-pink-500 focus:bg-white text-slate-800 rounded-xl px-3.5 py-2.5 text-xs transition-all focus:ring-2 focus:ring-pink-500/10 resize-none font-medium placeholder:text-slate-400"
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
          </ScrollReveal>

        </div>

        {/* Map Section */}
        <ScrollReveal direction="up" delay={200}>
          <div className="w-full rounded-lg overflow-hidden border border-slate-200/80 shadow-xs bg-white p-2">
            <div className="w-full h-96 sm:h-[400px] md:h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.326392496344!2d78.39146131435463!3d17.49192600438689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c70d3f2329%3A0xe69263b460c8fae6!2sDigital%20Raiz%20Creative%20Solutions%20%7C%20Digital%20Raiz!5e0!3m2!1sen!2sin!4v1615387349786!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Digital Raiz Google Maps Location"
              ></iframe>
            </div>
          </div>
        </ScrollReveal>

        {/* Process Timeline Card Layout */}
        <section className="pt-4 sm:pt-5">
          <div className="space-y-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-center text-[#1e1b4b]">
              Consultation & Launch Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <ScrollReveal key={idx} delay={idx * 100} direction="up">
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-2xs hover:border-pink-300 transition-all duration-300 flex items-start gap-4 h-full">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${s.color} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#1e1b4b]">
                          {s.title}
                        </h4>
                        <p className="text-slate-500 text-[11px] leading-relaxed font-normal">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
