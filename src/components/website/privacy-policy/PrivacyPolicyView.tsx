"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Mail,
  FileText,
  ArrowRight,
  Eye,
  UserCheck,
  AlertCircle,
  Search,
  Share2,
  Printer,
  Copy,
  Check,
  Clock,
  Sparkles,
  ChevronRight,
  BookOpen,
  HelpCircle,
} from "lucide-react";

const SECTIONS = [
  { id: "overview", number: "01", title: "Overview", icon: FileText, color: "from-pink-500 to-rose-500" },
  { id: "consent", number: "02", title: "Consent", icon: CheckCircle2, color: "from-violet-500 to-purple-600" },
  { id: "information-we-collect", number: "03", title: "Information We Collect", icon: Eye, color: "from-indigo-500 to-blue-600" },
  { id: "how-we-use", number: "04", title: "How We Use Your Information", icon: Lock, color: "from-cyan-500 to-teal-600" },
  { id: "log-files", number: "05", title: "Log Files", icon: FileText, color: "from-amber-500 to-orange-600" },
  { id: "advertising-partners", number: "06", title: "Advertising Partners & Third Parties", icon: ShieldCheck, color: "from-purple-500 to-indigo-600" },
  { id: "ccpa-privacy-rights", number: "07", title: "CCPA Privacy Rights", icon: UserCheck, color: "from-pink-500 to-violet-600" },
  { id: "gdpr-rights", number: "08", title: "GDPR Data Protection Rights", icon: ShieldCheck, color: "from-blue-500 to-indigo-600" },
  { id: "childrens-info", number: "09", title: "Children's Information", icon: AlertCircle, color: "from-rose-500 to-pink-600" },
];

export default function PrivacyPolicyView() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const filteredSections = SECTIONS.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-grow bg-slate-50/40 relative">
      {/* HERO SECTION */}
      <section className="relative z-10 py-10 sm:py-14 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-pink-500" />
            <span>Legal &amp; Transparency</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
            Privacy Policy for{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              DigitalRaiz
            </span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            At DigitalRaiz, accessible from{" "}
            <a
              href="https://www.digitalraiz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-semibold underline decoration-pink-300 underline-offset-4 hover:text-pink-700 transition-colors"
            >
              https://www.digitalraiz.com/
            </a>
            , one of our main priorities is the privacy of our visitors.
          </p>
        </div>
      </section>

      {/* MOBILE QUICK NAV SCROLLER */}
      <div className="lg:hidden sticky top-[64px] z-30 bg-white backdrop-blur-md border-b border-slate-200/80 px-4 py-2.5 overflow-x-auto no-scrollbar shadow-2xs">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pr-1">Jump to:</span>
          {SECTIONS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => setActiveSection(sec.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeSection === sec.id
                ? "bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-2xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {sec.title}
            </a>
          ))}
        </div>
      </div>

      {/* MAIN DOCUMENTATION CONTENT WITH STICKY TOC SIDEBAR */}
      <section className="relative z-10 py-10 sm:py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* DESKTOP STICKY SIDEBAR TABLE OF CONTENTS */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-6 self-start">
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg border border-slate-200/80 shadow-sm flex flex-col max-h-[calc(100vh-3rem)] space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-pink-500" />
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Table of Contents
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                    9 Sections
                  </span>
                </div>

                <nav className="space-y-1 overflow-y-auto min-h-0 flex-1 pr-1 no-scrollbar">
                  {filteredSections.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveSection(sec.id)}
                        className={`group flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${isActive
                          ? "bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 border-transparent text-white shadow-xl shadow-pink-500/25 translate-x-1"
                          : "bg-white border-slate-200/90 text-slate-800 hover:border-pink-300 hover:bg-pink-50/40"
                          }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <span
                            className={`w-5 h-5 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive
                              ? "bg-white/20 text-white backdrop-blur-sm"
                              : "bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white"
                              }`}>

                            {sec.number}
                          </span>
                          <span className="truncate">{sec.title}</span>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive
                            ? "text-pink-500 translate-x-0.5"
                            : "text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5"
                            }`}
                        />
                      </a>
                    );
                  })}
                  {filteredSections.length === 0 && (
                    <p className="text-xs text-slate-400 py-3 text-center">
                      No matching sections found.
                    </p>
                  )}
                </nav>

                {/* Quick Assistance Box inside Sidebar */}
                <div className="pt-3 border-t border-slate-100 shrink-0 space-y-2">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-pink-400">
                      <HelpCircle className="w-4 h-4" />
                      <span>Have Privacy Questions?</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      Our legal team is here to assist with any data inquiry.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-pink-400 hover:text-pink-300 transition-colors pt-1"
                    >
                      <span>Reach out to us</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN POLICY CONTENT CARDS */}
            <div className="lg:col-span-9 space-y-4">

              {/* 01. Overview */}
              <div
                id="overview"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center font-bold shadow-sm shadow-pink-500/20 group-hover:scale-105 transition-transform">
                      <FileText className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                        SECTION 01
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Overview
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
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
              <div
                id="consent"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-sm shadow-purple-500/20 group-hover:scale-105 transition-transform">
                      <CheckCircle2 className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-violet-600 uppercase tracking-widest">
                        SECTION 02
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Consent
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
              </div>

              {/* 03. Information We Collect */}
              <div
                id="information-we-collect"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                      <Eye className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">
                        SECTION 03
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Information We Collect
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
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
              <div
                id="how-we-use"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center font-bold shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                      <Lock className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase tracking-widest">
                        SECTION 04
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        How We Use Your Information
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  We use the information we collect in various ways, including to:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    "Provide, operate, and maintain our website",
                    "Improve, personalize, and expand our website",
                    "Understand and analyze how you use our website",
                    "Develop new products, services, features, and functionality",
                    "Communicate with you for customer service and updates",
                    "Send you emails relating to marketing & promotions",
                    "Find and prevent fraud",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-pink-300 hover:bg-pink-50/30 transition-all duration-200 group/li"
                    >
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5 group-hover/li:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 05. Log Files */}
              <div
                id="log-files"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
                      <FileText className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest">
                        SECTION 05
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Log Files
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  DigitalRaiz follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                </p>
              </div>

              {/* 06. Advertising Partners & Third Party Privacy Policies */}
              <div
                id="advertising-partners"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-sm shadow-purple-500/20 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-purple-600 uppercase tracking-widest">
                        SECTION 06
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Advertising Partners &amp; Third-Party Privacy Policies
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
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
              <div
                id="ccpa-privacy-rights"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-white flex items-center justify-center font-bold shadow-sm shadow-pink-500/20 group-hover:scale-105 transition-transform">
                      <UserCheck className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                        SECTION 07
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        CCPA Privacy Rights (Do Not Sell My Personal Information)
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Under the CCPA, among other rights, California consumers have the right to:
                </p>

                <ul className="space-y-3 pt-1">
                  {[
                    "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
                    "Request that a business delete any personal data about the consumer that a business has collected.",
                    "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
                  ].map((req, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-pink-50/30 border border-slate-200/80 hover:border-pink-300 transition-all duration-200 group/li"
                    >
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5 group-hover/li:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-2 border-t border-slate-100">
                  If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>
              </div>

              {/* 08. GDPR Data Protection Rights */}
              <div
                id="gdpr-rights"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">
                        SECTION 08
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        GDPR Data Protection Rights
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {[
                    {
                      title: "The right to access",
                      desc: "You have the right to request copies of your personal data. We may charge you a small fee for this service.",
                    },
                    {
                      title: "The right to rectification",
                      desc: "You have the right to request that we correct any information you believe is inaccurate or incomplete.",
                    },
                    {
                      title: "The right to erasure",
                      desc: "You have the right to request that we erase your personal data, under certain conditions.",
                    },
                    {
                      title: "The right to restrict processing",
                      desc: "You have the right to request that we restrict the processing of your personal data, under certain conditions.",
                    },
                    {
                      title: "The right to object to processing",
                      desc: "You have the right to object to our processing of your personal data, under certain conditions.",
                    },
                    {
                      title: "The right to data portability",
                      desc: "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
                    },
                  ].map((gdpr, gIdx) => (
                    <div
                      key={gIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-indigo-50/20 border border-slate-200/80 hover:border-indigo-300 hover:shadow-sm transition-all duration-200 space-y-2 group/card"
                    >
                      <h3 className="text-xs font-bold text-indigo-900 uppercase tracking-wide flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/card:scale-125 transition-transform" />
                        {gdpr.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed font-normal">
                        {gdpr.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-2 border-t border-slate-100">
                  If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>
              </div>

              {/* 09. Children's Information */}
              <div
                id="childrens-info"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold shadow-sm shadow-rose-500/20 group-hover:scale-105 transition-transform">
                      <AlertCircle className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-widest">
                        SECTION 09
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Children's Information
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                  </p>
                  <p>
                    DigitalRaiz does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                  </p>
                </div>
              </div>

              {/* 10. Contact Us Banner */}
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border border-pink-200/80 text-center space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Questions or Information Requests?
                </h2>
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
          </div>
        </div>
      </section>
    </div>
  );
}
