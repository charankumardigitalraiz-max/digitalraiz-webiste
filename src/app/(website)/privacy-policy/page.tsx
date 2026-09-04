import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Lock, CheckCircle2, Mail, FileText, ArrowRight, Eye, UserCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Digital Raiz",
  description: "Read the official Privacy Policy of DigitalRaiz to understand how we collect, use, and protect your personal information and visitor data rights.",
  alternates: {
    canonical: "https://digitalraiz.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative py-12 sm:py-16 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
          <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-pink-500" />
              <span>Legal & Transparency</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Privacy Policy for <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">DigitalRaiz</span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              At DigitalRaiz, accessible from{" "}
              <a href="https://www.digitalraiz.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-semibold underline">
                https://www.digitalraiz.com/
              </a>
              , one of our main priorities is the privacy of our visitors.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT DOCUMENTATION SECTION */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 w-full space-y-12">
            
            {/* 01. Overview */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Overview</h2>
              </div>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  At DigitalRaiz, accessible from https://www.digitalraiz.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by DigitalRaiz and how we use it.
                </p>
                <p>
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
                <p>
                  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in DigitalRaiz. This policy is not applicable to any information collected offline or via channels other than this website.
                </p>
              </div>
            </div>

            {/* 02. Consent */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Consent</h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </div>

            {/* 03. Information We Collect */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Information We Collect</h2>
              </div>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                </p>
                <p>
                  If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                </p>
                <p>
                  When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                </p>
              </div>
            </div>

            {/* 04. How We Use Your Information */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">How We Use Your Information</h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Provide, operate, and maintain our website",
                  "Improve, personalize, and expand our website",
                  "Understand and analyze how you use our website",
                  "Develop new products, services, features, and functionality",
                  "Communicate with you for customer service and updates",
                  "Send you emails relating to marketing & promotions",
                  "Find and prevent fraud"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 05. Log Files */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Log Files</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                DigitalRaiz follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
              </p>
            </div>

            {/* 06. Advertising Partners & Third Party Privacy Policies */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Advertising Partners &amp; Third-Party Privacy Policies</h2>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  You may consult this list to find the Privacy Policy for each of the advertising partners of DigitalRaiz.
                </p>
                <p>
                  Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on DigitalRaiz, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                </p>
                <p>
                  Note that DigitalRaiz has no access to or control over these cookies that are used by third-party advertisers.
                </p>
                <p>
                  DigitalRaiz Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>
                <p>
                  You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                </p>
              </div>
            </div>

            {/* 07. CCPA Privacy Rights */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Under the CCPA, among other rights, California consumers have the right to:
              </p>
              <ul className="space-y-2.5 pt-1">
                {[
                  "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
                  "Request that a business delete any personal data about the consumer that a business has collected.",
                  "Request that a business that sells a consumer's personal data, not sell the consumer's personal data."
                ].map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium p-3 rounded-xl bg-white border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-2">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
              </p>
            </div>

            {/* 08. GDPR Data Protection Rights */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">GDPR Data Protection Rights</h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {[
                  { title: "The right to access", desc: "You have the right to request copies of your personal data. We may charge you a small fee for this service." },
                  { title: "The right to rectification", desc: "You have the right to request that we correct any information you believe is inaccurate or incomplete." },
                  { title: "The right to erasure", desc: "You have the right to request that we erase your personal data, under certain conditions." },
                  { title: "The right to restrict processing", desc: "You have the right to request that we restrict the processing of your personal data, under certain conditions." },
                  { title: "The right to object to processing", desc: "You have the right to object to our processing of your personal data, under certain conditions." },
                  { title: "The right to data portability", desc: "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions." }
                ].map((gdpr, gIdx) => (
                  <div key={gIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">{gdpr.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{gdpr.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-2">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
              </p>
            </div>

            {/* 09. Children's Information */}
            <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Children's Information</h2>
              </div>
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p>
                  DigitalRaiz does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>
              </div>
            </div>

            {/* 10. Contact Us Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border border-pink-200/80 text-center space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Questions or Information Requests?</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to reach out to our team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-md hover:scale-105 transition-all"
              >
                <span>Contact DigitalRaiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
