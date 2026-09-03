import {
  Target,
  Video,
  Users,
  Award,
  TrendingUp,
  Share2,
} from "lucide-react";
import {
  InfluencerStat,
  InfluencerService,
  CreatorTier,
  WorkflowStep,
} from "@/interfaces/influencerMarketing";

export const influencerStats: InfluencerStat[] = [
  { value: "500+", label: "Verified Creators", color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-200/60" },
  { value: "50M+", label: "Total Impressions", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200/60" },
  { value: "4.2x", label: "Average Campaign ROAS", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200/60" },
  { value: "98%", label: "Brand Retention Rate", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200/60" },
];

export const influencerServices: InfluencerService[] = [
  {
    title: "Creator Discovery & Matchmaking",
    desc: "Data-driven influencer selection matching your target demographics, niche audience interest, engagement rates, and authentic brand voice.",
    tag: "Audience Target",
    icon: Target,
    color: "from-pink-50 to-pink-100/30",
    accent: "border-pink-200/60 text-pink-700",
  },
  {
    title: "UGC & Short-Video Reels",
    desc: "High-converting User Generated Content (UGC), Instagram Reels, YouTube Shorts, and unboxing videos crafted to drive instant user action.",
    tag: "Content Engine",
    icon: Video,
    color: "from-violet-50 to-violet-100/30",
    accent: "border-violet-200/60 text-violet-700",
  },
  {
    title: "End-to-End Campaign Management",
    desc: "We handle creator contracts, script briefs, product seeding, compliance, posting timelines, and approval workflows seamlessly.",
    tag: "Full Execution",
    icon: Users,
    color: "from-emerald-50 to-emerald-100/30",
    accent: "border-emerald-200/60 text-emerald-700",
  },
  {
    title: "Real Estate & Niche Influencers",
    desc: "Specialized regional creator networks tailored for real estate properties, healthcare, tech products, e-commerce, and B2B services.",
    tag: "Industry Niche",
    icon: Award,
    color: "from-amber-50 to-amber-100/30",
    accent: "border-amber-200/60 text-amber-700",
  },
  {
    title: "Performance Tracking & ROAS",
    desc: "Transparent dashboard analytics tracking real-time click-through rates, custom promo code conversions, reach velocity, and true ROI.",
    tag: "Analytics",
    icon: TrendingUp,
    color: "from-indigo-50 to-indigo-100/30",
    accent: "border-indigo-200/60 text-indigo-700",
  },
  {
    title: "Brand Ambassador Programs",
    desc: "Building long-term, multi-month brand ambassador partnerships that establish continuous credibility and long-term customer trust.",
    tag: "Long-Term Affinity",
    icon: Share2,
    color: "from-rose-50 to-rose-100/30",
    accent: "border-rose-200/60 text-rose-700",
  },
];

export const creatorTiers: CreatorTier[] = [
  {
    tier: "Nano & Micro Creators",
    followers: "10K - 100K Followers",
    perk: "Highest Engagement & Local Trust",
    bestFor: "Hyper-local campaigns, app installs & niche products",
    badge: "High Conversion",
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    tier: "Macro Influencers",
    followers: "100K - 1M Followers",
    perk: "Massive Organic Reach & Authority",
    bestFor: "Brand awareness, product launches & regional reach",
    badge: "High Impact",
    badgeBg: "bg-pink-50 text-pink-600 border-pink-200",
  },
  {
    tier: "Celebrity & Mega Talent",
    followers: "1M+ Followers",
    perk: "Industry Stardom & National Prestige",
    bestFor: "National brand building & major real estate showcases",
    badge: "Maximum Visibility",
    badgeBg: "bg-violet-50 text-violet-600 border-violet-200",
  },
];

export const workflowSteps: WorkflowStep[] = [
  { step: "01", title: "Strategy & Niche Mapping", desc: "Define campaign KPIs, target demographics, creator style, and offer funnels." },
  { step: "02", title: "Creator Shortlisting", desc: "Match vetted influencers with high audience engagement and authentic brand alignment." },
  { step: "03", title: "Creative Brief & Seeding", desc: "Provide detailed content briefs, product samples, and key brand messaging guidelines." },
  { step: "04", title: "Live Multi-Channel Launch", desc: "Synchronized posting across Instagram, YouTube, and LinkedIn for peak impact." },
  { step: "05", title: "Analytics & ROI Reporting", desc: "Detailed breakdown of reach, conversions, engagement rate, and attribution metrics." },
];
