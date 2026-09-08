"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPostsData } from "@/data/blogsData";
import { Sparkles, ArrowRight, Clock, Calendar, User, CheckCircle2 } from "lucide-react";

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Insights");

  const categories = [
    "All Insights",
    "Digital Marketing",
    "Web Development",
    "SEO & Search",
    "Mobile & AI"
  ];

  const featuredPost = blogPostsData.find((p) => p.isFeatured) || blogPostsData[0];
  const secondaryPosts = blogPostsData.filter((p) => !p.isFeatured);

  const filteredPosts = selectedCategory === "All Insights"
    ? secondaryPosts
    : secondaryPosts.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-10 sm:py-10 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-5 relative z-10">

        {/* SECTION HEADER */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-100">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-pink-500" />
                Digital Insights & Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Latest Insights, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Strategies & Tech Trends</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Explore expert analysis, tactical growth playbooks, and technical deep-dives authored by Digital Raiz engineering and marketing teams.
              </p>
            </div>

            {/* CATEGORY TABS & VIEW ALL BUTTON */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 border border-slate-200/80 p-1.5 rounded-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-md shadow-pink-500/20 scale-105"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div> */}

              {/* <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-pink-600 text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
              >
                <span>View All Blogs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link> */}
            </div>
          </div>
        </ScrollReveal>

        {/* DESKTOP FEATURED HERO ARTICLE CARD (Hidden on Mobile) */}
        <ScrollReveal direction="up" delay={50} className="hidden md:block">
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group block bg-white border border-slate-200/90 hover:border-pink-300 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Image (6 Cols) */}
              <div className="lg:col-span-6 overflow-hidden rounded-2xl relative h-64 sm:h-80 lg:h-96 bg-slate-50">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3 h-3 text-pink-400" />
                  Featured Article
                </div>
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-mono font-bold shadow-md">
                  <Clock className="w-3 h-3 text-pink-600" />
                  {featuredPost.readTime}
                </div>
              </div>

              {/* Right Content (6 Cols) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-2xl font-black uppercase tracking-tight text-[#1e1b4b] transition-colors leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Key Takeaways Pills */}
                <div className="space-y-2 pt-1">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Key Insights:</span>
                  <div className="space-y-1.5">
                    {featuredPost.takeaways.slice(0, 3).map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">
                      CK
                    </div>
                    <div className="text-[11px] font-bold text-slate-700">{featuredPost.author.name}</div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-pink-600 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

              </div>

            </div>
          </Link>
        </ScrollReveal>

        {/* MOBILE UNIFIED HORIZONTAL TOUCH-SWIPE CAROUSEL (Renders ALL Blog Posts in 1 Row on Mobile) */}
        <div className="flex md:hidden items-stretch overflow-x-auto pb-4 gap-3.5 snap-x snap-mandatory no-scrollbar -mx-6 px-6 scroll-smooth">
          {blogPostsData.map((post, idx) => (
            <ScrollReveal key={post.id} delay={(idx % 3) * 60} direction="up" className="h-full flex flex-col w-[78vw] max-w-[300px] shrink-0 snap-center">
              <Link
                href={`/blogs/${post.slug}`}
                className="group block bg-white border border-slate-200/90 hover:border-pink-300 rounded-xl transition-all duration-300 shadow-xs h-full flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                <div>
                  <div className="w-full h-40 overflow-hidden bg-slate-50 relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold text-pink-600 border border-pink-100 uppercase tracking-wider">
                      {post.category}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold text-white flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-pink-400" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-slate-400 font-bold">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-sm font-bold text-[#1e1b4b] group-hover:text-pink-600 transition-colors tracking-tight leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-[11px] font-normal leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-pink-500" />
                    {post.author.name}
                  </span>

                  <span className="w-6 h-6 rounded-full bg-pink-50 text-pink-600 border border-pink-100 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* DESKTOP SECONDARY BLOG POSTS GRID — 3 Columns (Desktop Only) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={(idx % 3) * 60} direction="up" className="h-full">
              <Link
                href={`/blogs/${post.slug}`}
                className="group block bg-white border border-slate-200/90 hover:border-pink-300 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 h-full flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                <div>
                  {/* Card Thumbnail — Flush Edge-to-Edge at Top */}
                  <div className="w-full h-52 overflow-hidden bg-slate-50 relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold text-pink-600 border border-pink-100 uppercase tracking-wider">
                      {post.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold text-white flex items-center gap-1">
                      <Clock className="w-3 h-3 text-pink-400" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title & Date Content — Padded */}
                  <div className="p-5 sm:p-6 space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 font-bold">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1e1b4b] group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-xs font-normal leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom Author & CTA — Padded */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-pink-500" />
                    {post.author.name}
                  </span>

                  <span className="w-7 h-7 rounded-full bg-pink-50 text-pink-600 border border-pink-100 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* SECTION FOOTER CTA BANNER */}
        <ScrollReveal direction="up" delay={100}>
          <div className="bg-slate-50/80 border border-slate-200/90 rounded-lg p-4 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold  tracking-tight text-[#1e1b4b]">
                Looking for All Industry Insights & Playbooks?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal">
                Explore our full library of digital marketing, web engineering, and AI growth articles.
              </p>
            </div>

            <Link
              href="/blogs"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
