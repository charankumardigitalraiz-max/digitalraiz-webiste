"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Search,
  Share2,
  MousePointerClick,
  FileText,
  CheckCircle2
} from "lucide-react";

export default function DigitalMarketingVerticals() {
  const verticalsData = [
    {
      id: "seo",
      step: "01",
      tag: "SEO & Organic Visibility",
      titlePrefix: "",
      titleGradient: "SEO Services in Hyderabad",
      titleSuffix: " for Long-Term Search Visibility",
      badge: "Organic Search Authority",
      icon: <Search className="w-5 h-5 text-pink-500" />,
      color: "from-pink-500/10 via-pink-500/5 to-transparent",
      accentBorder: "border-pink-200/80",
      accentText: "text-pink-600",
      pillBg: "bg-pink-50 text-pink-600 border-pink-200/60",
      img: "/digital-marketing-service/seo-vertical-3d.webp",
      para1: "Search is often the starting point for customers researching a product, service, or business. Our SEO services in Hyderabad focus on helping your website become more visible for searches that are relevant to your business.",
      para2: "We work across keyword research, on-page optimization, technical SEO, content optimization, internal linking, local SEO, and website structure. As an SEO company in Hyderabad, we focus on search intent rather than simply inserting keywords into content.",
      para3: "",
      features: [
        "Keyword & Intent Research",
        "Technical SEO Audits",
        "On-Page Optimization",
        "Local SEO & Maps Pack"
      ],
      insightTitle: "Search Intent Alignment",
      insightDesc: "We match content with exact customer search queries, positioning your brand as the primary authority when potential buyers search for solutions.",
      metricValue: "#1 Rank",
      metricLabel: "Search Intent Scale"
    },
    {
      id: "social",
      step: "02",
      tag: "Social Brand Positioning",
      titlePrefix: "",
      titleGradient: "Social Media Marketing Services in Hyderabad",
      titleSuffix: " That Build Your Brand",
      badge: "Creative Social Presence",
      icon: <Share2 className="w-5 h-5 text-violet-500" />,
      color: "from-violet-500/10 via-violet-500/5 to-transparent",
      accentBorder: "border-violet-200/80",
      accentText: "text-violet-600",
      pillBg: "bg-violet-50 text-violet-600 border-violet-200/60",
      img: "/digital-marketing-service/social-vertical-3d.webp",
      para1: "Social media has become an important part of how customers discover and evaluate businesses. Our social media marketing services in Hyderabad help brands create a consistent presence while communicating their products, services, and personality clearly.",
      para2: "Digital Raiz develops social media strategies based on your target audience and brand positioning. Our capabilities include content planning, creative development, social media management, campaign planning, paid social advertising, and performance analysis.",
      para3: "",
      features: [
        "Content Strategy & Planning",
        "Creative Graphic Development",
        "Social Media Management",
        "Paid Social & Performance Analysis"
      ],
      insightTitle: "Multi-Platform Strategy",
      insightDesc: "From Instagram reels and LinkedIn thought leadership to Facebook campaigns and video promotions, we tailor creatives specifically for each social network.",
      metricValue: "10x Reach",
      metricLabel: "Audience Engagement"
    },
    {
      id: "ppc",
      step: "03",
      tag: "Google Ads & PPC",
      titlePrefix: "",
      titleGradient: "Google Ads & Performance Marketing",
      titleSuffix: " in Hyderabad",
      badge: "High-Intent Paid Acquisition",
      icon: <MousePointerClick className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-500/10 via-indigo-500/5 to-transparent",
      accentBorder: "border-indigo-200/80",
      accentText: "text-indigo-600",
      pillBg: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
      img: "/digital-marketing-service/ppc-vertical-3d.webp",
      para1: "When businesses need targeted visibility and faster opportunities, paid advertising can complement organic marketing. Our Google Ads services in Hyderabad are designed around relevant audiences, search intent, and campaign objectives.",
      para2: "We help businesses plan and manage paid campaigns across appropriate digital advertising channels, with attention to keyword selection, audience targeting, ad messaging, landing pages, and campaign performance. Performance marketing is not simply about generating clicks — the focus is on attracting the right traffic and creating meaningful actions such as inquiries, calls, registrations, or purchases.",
      para3: "",
      features: [
        "Keyword Selection & Audience Targeting",
        "Ad Messaging & Creative Assets",
        "Optimized Landing Page Conversion",
        "Performance Campaign Management"
      ],
      insightTitle: "Action-Focused PPC Metrics",
      insightDesc: "We tune bidding algorithms and ad creative headlines to drive maximum quality score and lower cost per conversion.",
      metricValue: "4.8x ROAS",
      metricLabel: "Targeted Paid Return"
    },
    {
      id: "content",
      step: "04",
      tag: "Content & Lead Funnels",
      titlePrefix: "",
      titleGradient: "Content Marketing & Lead Generation",
      titleSuffix: " for Growing Businesses",
      badge: "Qualified Inquiry Pipeline",
      icon: <FileText className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      accentBorder: "border-emerald-200/80",
      accentText: "text-emerald-600",
      pillBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
      img: "/digital-marketing-service/content-vertical-3d.webp",
      para1: "Good digital marketing needs good content. From website pages and search-focused articles to social media creatives and campaign messaging, content plays a vital role in how customers understand your business.",
      para2: "Our content marketing services in Hyderabad help businesses communicate their expertise, answer customer questions, and create content that supports their broader marketing strategy.",
      para3: "We develop lead generation strategies in Hyderabad that connect digital campaigns with business opportunities. Depending on your objectives, this includes search campaigns, social media campaigns, landing pages, website optimization, and targeted digital promotions.",
      features: [
        "Search-Focused Article Writing",
        "Lead Generation Funnel Strategy",
        "Website Copy & Page Messaging",
        "Conversion Landing Page Optimization"
      ],
      insightTitle: "Frictionless Inquiry Pipeline",
      insightDesc: "To move beyond mere traffic and visibility, creating a clear, frictionless path from audience attention to genuine business inquiries.",
      metricValue: "100% Intent",
      metricLabel: "Qualified Inquiries"
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-white relative">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-16">

        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1e1b4b]">
              Specialized{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Marketing Verticals
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto">
              Explore how our specialized marketing disciplines deliver measurable growth across organic search, social channels, paid acquisition, and lead funnels.
            </p>
          </div>
        </ScrollReveal>

        {/* Alternating Light & Airy Vertical Rows */}
        <div className="space-y-8 sm:space-y-12">
          {verticalsData.map((vert, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={vert.id} className="pb-8 sm:pb-10 last:border-0 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-6 items-center">

                  {/* Visual Graphic Column */}
                  <ScrollReveal
                    direction={isEven ? "left" : "right"}
                    className={`lg:col-span-6 order-first ${isEven ? "lg:order-first" : "lg:order-last"} flex items-center justify-center`}
                  >
                    <div className="w-full h-64 sm:h-80 md:h-[420px] flex items-center justify-center p-1 sm:p-2">
                      <img
                        src={vert.img}
                        alt={vert.titleGradient}
                        className="w-full h-full object-contain pointer-events-none select-none hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </ScrollReveal>

                  {/* Content Column */}
                  <ScrollReveal
                    direction={isEven ? "right" : "left"}
                    delay={100}
                    className={`lg:col-span-6 order-last ${isEven ? "lg:order-last" : "lg:order-first"} space-y-3 sm:space-y-5`}
                  >
                    <div className="space-y-2 sm:space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-pink-50 text-pink-600 text-[8.5px] sm:text-[9px] font-mono font-bold uppercase tracking-widest border border-pink-200/60">
                        {vert.icon}
                        <span>{vert.tag}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1e1b4b] leading-tight tracking-tight">
                        {vert.titlePrefix}
                        <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                          {vert.titleGradient}
                        </span>
                        {vert.titleSuffix}
                      </h3>
                    </div>

                    <div className="space-y-2 sm:space-y-3.5 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      <p>{vert.para1}</p>
                      <p>{vert.para2}</p>
                      {vert.para3 && <p>{vert.para3}</p>}
                    </div>

                    {/* Clean Bullet Feature Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 pt-1 sm:pt-2">
                      {vert.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${vert.accentText}`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
