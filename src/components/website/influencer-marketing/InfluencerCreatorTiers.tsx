"use client";

import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { openContactModal } from "@/components/ContactModal";

export default function InfluencerCreatorTiers() {
  const creatorTiers = [
    {
      tier: "Nano & Micro Creators",
      followers: "10K - 100K Followers",
      perk: "Highest Engagement & Local Trust",
      bestFor: "Hyper-local campaigns, app installs & niche products",
      badge: "High Conversion",
      badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      tier: "Macro Influencers",
      followers: "100K - 1M Followers",
      perk: "Massive Organic Reach & Authority",
      bestFor: "Brand awareness, product launches & regional reach",
      badge: "High Impact",
      badgeBg: "bg-pink-50 text-pink-600 border-pink-200"
    },
    {
      tier: "Celebrity & Mega Talent",
      followers: "1M+ Followers",
      perk: "Industry Stardom & National Prestige",
      bestFor: "National brand building & major real estate showcases",
      badge: "Maximum Visibility",
      badgeBg: "bg-violet-50 text-violet-600 border-violet-200"
    }
  ];

  return (
    <section className="py-10 bg-slate-50/60 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full space-y-12 relative z-10">

        {/* Refined Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-pink-500" />
            Tiered Talent Matrix
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e1b4b] tracking-tight leading-tight">
            Creator Tiers{" "}
            <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Tailored to Your Goals
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
            Whether you need high-conversion micro-creators or national celebrity endorsements, we match your brand with verified creator talent pools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
          {creatorTiers.map((tier, idx) => {
            const isFeatured = idx === 1;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 ${isFeatured
                  ? "bg-white border-2 border-pink-500 shadow-xl shadow-pink-500/10 scale-100 md:scale-[1.03] z-10"
                  : "bg-white border border-slate-200/80 shadow-2xs hover:shadow-lg hover:border-pink-300"
                  }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                    ★ Most Popular Tier
                  </div>
                )}

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${tier.badgeBg}`}>
                      {tier.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#1e1b4b] tracking-tight">{tier.tier}</h3>
                    <div className="text-xs font-bold text-pink-600 font-mono">{tier.followers}</div>
                  </div>

                  <div className="space-y-3 text-xs text-slate-600 font-normal pt-2 border-t border-slate-100">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong className="text-slate-800 font-bold">Key Advantage:</strong> {tier.perk}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span><strong className="text-slate-800 font-bold">Best For:</strong> {tier.bestFor}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openContactModal("Influencer Marketing", `Creator Tier: ${tier.tier}`)}
                  className={`w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-center block transition-all duration-300 shadow-xs cursor-pointer border-0 ${isFeatured
                    ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white shadow-pink-500/20 hover:scale-[1.02] active:scale-95"
                    : "bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-200 text-[#1e1b4b] hover:text-pink-600"
                    }`}
                >
                  Select Creator Tier
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
