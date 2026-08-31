"use client";

import { Send, CheckCircle, Mail, Phone, MapPin, Sparkles } from "lucide-react";
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
                    <div className="flex flex-col text-xs font-bold text-slate-800 gap-0.5">
                      {officeDetails.phones.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="hover:text-pink-600 transition-colors">
                          {phone}
                        </a>
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
                    <div className="flex flex-col text-xs font-bold text-slate-800 gap-0.5">
                      {officeDetails.emails.map((email, idx) => (
                        <a key={idx} href={`mailto:${email}`} className="hover:text-pink-600 transition-colors">
                          {email}
                        </a>
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
                  <form onSubmit={submitForm} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-[#1e1b4b]/80">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormField("name", e.target.value)}
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
                          value={formData.phone}
                          onChange={(e) => setFormField("phone", e.target.value)}
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
                          value={formData.email}
                          onChange={(e) => setFormField("email", e.target.value)}
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
                          value={formData.subject || ""}
                          onChange={(e) => setFormField("subject", e.target.value)}
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
                        value={formData.message}
                        onChange={(e) => setFormField("message", e.target.value)}
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
