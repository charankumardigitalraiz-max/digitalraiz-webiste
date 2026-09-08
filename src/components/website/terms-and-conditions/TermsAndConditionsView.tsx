"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Lock,
  ExternalLink,
  RefreshCw,
  AlertTriangle,
  ChevronRight,
  BookOpen,
  HelpCircle,
} from "lucide-react";

const SECTIONS = [
  { id: "welcome-agreement", number: "01", title: "Welcome & Agreement", icon: FileText },
  { id: "cookies", number: "02", title: "Cookies", icon: Lock },
  { id: "license", number: "03", title: "License & IP", icon: ShieldCheck },
  { id: "user-comments", number: "04", title: "User Comments & Content", icon: FileText },
  { id: "refund-policy", number: "05", title: "Refund Policy", icon: RefreshCw },
  { id: "hyperlinking-content", number: "06", title: "Hyperlinking to Content", icon: ExternalLink },
  { id: "iframes-content-liability", number: "07", title: "iFrames & Content Liability", icon: FileText },
  { id: "reservation-rights", number: "08", title: "Reservation of Rights", icon: ShieldCheck },
  { id: "disclaimer", number: "09", title: "Disclaimer", icon: AlertTriangle },
];

export default function TermsAndConditionsView() {
  const [activeSection, setActiveSection] = useState<string>("welcome-agreement");

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

  return (
    <div className="flex-grow bg-slate-50/40 relative">
      {/* HERO SECTION */}
      <section className="relative z-10 py-10 sm:py-14 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-mono font-bold uppercase tracking-widest">
            <FileText className="w-4 h-4 text-pink-500" />
            <span>Terms of Service</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
            Terms &amp; Conditions for{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              DigitalRaiz
            </span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Welcome to DigitalRaiz Creative Solutions PVT LTD! These terms and conditions outline the rules and regulations for the use of DigitalRaiz's Website, located at{" "}
            <a
              href="https://www.digitalraiz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-semibold underline decoration-pink-300 underline-offset-4 hover:text-pink-700 transition-colors"
            >
              https://www.digitalraiz.com/
            </a>
            .
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
                  {SECTIONS.map((sec) => {
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
                              }`}
                          >
                            {sec.number}
                          </span>
                          <span className="truncate">{sec.title}</span>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive
                            ? "text-white translate-x-0.5"
                            : "text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5"
                            }`}
                        />
                      </a>
                    );
                  })}
                </nav>

                {/* Quick Assistance Box inside Sidebar */}
                <div className="pt-3 border-t border-slate-100 shrink-0 space-y-2">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-pink-400">
                      <HelpCircle className="w-4 h-4" />
                      <span>Need Terms Guidance?</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      Our legal team is available to assist with any clarification.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-pink-400 hover:text-pink-300 transition-colors pt-1"
                    >
                      <span>Contact Legal Team</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN POLICY CONTENT CARDS */}
            <div className="lg:col-span-9 space-y-4">

              {/* 01. Welcome & Agreement */}
              <div
                id="welcome-agreement"
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
                        1. Welcome &amp; Agreement
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p className="font-semibold text-slate-800">
                    Welcome to DigitalRaiz Creative Solutions PVT LTD!
                  </p>
                  <p>
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use DigitalRaiz if you do not agree to take all of the terms and conditions stated on this page.
                  </p>
                  <p>
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                  </p>
                </div>
              </div>

              {/* 02. Cookies */}
              <div
                id="cookies"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-sm shadow-purple-500/20 group-hover:scale-105 transition-transform">
                      <Lock className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-violet-600 uppercase tracking-widest">
                        SECTION 02
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        2. Cookies
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    We employ the use of cookies. By accessing DigitalRaiz, you agreed to use cookies in agreement with the DigitalRaiz Privacy Policy.
                  </p>
                  <p>
                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                  </p>
                </div>
              </div>

              {/* 03. License */}
              <div
                id="license"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">
                        SECTION 03
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        3. License
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Unless otherwise stated, DigitalRaiz and/or its licensors own the intellectual property rights for all material on DigitalRaiz. All intellectual property rights are reserved. You may access this from DigitalRaiz for your own personal use subjected to restrictions set in these terms and conditions.
                </p>

                <p className="text-slate-800 font-bold text-xs sm:text-sm pt-1">You must not:</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    "Republish material from DigitalRaiz",
                    "Sell, rent or sub-license material from DigitalRaiz",
                    "Reproduce, duplicate or copy material from DigitalRaiz",
                    "Redistribute content from DigitalRaiz",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-pink-300 hover:bg-pink-50/30 transition-all duration-200 group/li"
                    >
                      <AlertCircle className="w-4 h-4 text-pink-500 shrink-0 mt-0.5 group-hover/li:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 04. User Comments & Content */}
              <div
                id="user-comments"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center font-bold shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                      <FileText className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase tracking-widest">
                        SECTION 04
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        4. User Comments &amp; Content
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    This Agreement shall begin on the date hereof.
                  </p>
                  <p>
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. DigitalRaiz does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of DigitalRaiz, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, DigitalRaiz shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                  </p>
                  <p>
                    DigitalRaiz reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                  </p>

                  <p className="font-semibold text-slate-800 pt-1">You warrant and represent that:</p>

                  <ul className="space-y-3 pt-1">
                    {[
                      "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
                      "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
                      "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;",
                      "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
                    ].map((warrant, wIdx) => (
                      <li
                        key={wIdx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-pink-50/30 border border-slate-200/80 hover:border-pink-300 transition-all duration-200 group/li"
                      >
                        <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5 group-hover/li:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {warrant}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="pt-2 border-t border-slate-100">
                    You hereby grant DigitalRaiz a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                  </p>
                </div>
              </div>

              {/* 05. Refund Policy */}
              <div
                id="refund-policy"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-pink-50/70 border border-pink-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-pink-200/60 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center font-bold shadow-sm shadow-pink-500/20 group-hover:scale-105 transition-transform">
                      <RefreshCw className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                        SECTION 05
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        5. Refund Policy
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-pink-200 text-pink-700 font-bold text-sm sm:text-base shadow-2xs">
                  Digitalraiz dont have any refund policy
                </div>
              </div>

              {/* 06. Hyperlinking to our Content */}
              <div
                id="hyperlinking-content"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-sm shadow-purple-500/20 group-hover:scale-105 transition-transform">
                      <ExternalLink className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-purple-600 uppercase tracking-widest">
                        SECTION 06
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        6. Hyperlinking to our Content
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    The following organizations may link to our Website without prior written approval:
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {[
                      "Government agencies",
                      "Search engines",
                      "News organizations",
                      "Online directory distributors",
                      "System wide Accredited Businesses",
                    ].map((org, oIdx) => (
                      <li
                        key={oIdx}
                        className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>{org}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="pt-2">
                    These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
                  </p>
                  <p>
                    We may consider and approve other link requests from commonly-known consumer/business information sources, dot.com community sites, charity groups, online directory distributors, internet portals, accounting/law/consulting firms, and educational institutions.
                  </p>
                  <p>
                    If you are interested in linking to our website, you must inform us by sending an e-mail to DigitalRaiz. Please include your name, your organization name, contact information, the URL of your site, and a list of URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                  </p>
                  <p>
                    No use of DigitalRaiz's logo or other artwork will be allowed for linking absent a trademark license agreement.
                  </p>
                </div>
              </div>

              {/* 07. iFrames & Content Liability */}
              <div
                id="iframes-content-liability"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                      <FileText className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">
                        SECTION 07
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        7. iFrames &amp; Content Liability
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p className="font-semibold text-slate-800">iFrames:</p>
                  <p>
                    Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                  </p>
                  <p className="font-semibold text-slate-800 pt-2">Content Liability:</p>
                  <p>
                    We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                  </p>
                  <p className="font-semibold text-slate-800 pt-2">Your Privacy:</p>
                  <p>
                    Please read our{" "}
                    <Link href="/privacy-policy" className="text-pink-600 font-semibold underline decoration-pink-300 underline-offset-4 hover:text-pink-700 transition-colors">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>

              {/* 08. Reservation of Rights & Removal of Links */}
              <div
                id="reservation-rights"
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
                        8. Reservation of Rights &amp; Removal of Links
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                  </p>
                  <p className="font-semibold text-slate-800 pt-2">Removal of links from our website:</p>
                  <p>
                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                  </p>
                  <p>
                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                  </p>
                </div>
              </div>

              {/* 09. Disclaimer */}
              <div
                id="disclaimer"
                className="scroll-mt-28 p-6 sm:p-8 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
                      <AlertTriangle className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest">
                        SECTION 09
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        9. Disclaimer
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                  </p>

                  <ul className="space-y-3 pt-1">
                    {[
                      "limit or exclude our or your liability for death or personal injury;",
                      "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
                      "limit any of our or your liabilities in any way that is not permitted under applicable law; or",
                      "exclude any of our or your liabilities that may not be excluded under applicable law.",
                    ].map((disc, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-amber-300 transition-all duration-200 group/li"
                      >
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/li:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {disc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="pt-2 border-t border-slate-100">
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                  </p>
                  <p>
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                  </p>
                </div>
              </div>

              {/* 10. Contact Us Banner */}
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border border-pink-200/80 text-center space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Need Clarification on Our Terms?
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
                  If you have questions regarding DigitalRaiz Creative Solutions PVT LTD terms and conditions, feel free to connect with our legal team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-md hover:scale-105 transition-all"
                >
                  <span>Contact Our Team</span>
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
