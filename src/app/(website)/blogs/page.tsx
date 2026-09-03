"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPostsData, BlogPost } from "@/data/blogsData";
import { Sparkles, ArrowRight, Search as SearchIcon, Clock, Calendar, User, Tag, CheckCircle2, ChevronRight } from "lucide-react";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Insights");

  const categories = [
    "All Insights",
    "Digital Marketing",
    "Web Development",
    "SEO & Search",
    "Mobile & AI"
  ];

  const featuredPost = blogPostsData.find((p) => p.isFeatured) || blogPostsData[0];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === "All Insights" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">
        {/* HERO HEADER */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 sm:py-24">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 w-full relative z-10 space-y-8 text-center">
            <ScrollReveal direction="up">
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[8.5px] font-mono font-black text-pink-600 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  Digital Raiz Engineering & Growth Journal
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#1e1b4b] leading-[1.05]">
                  Articles, Insights & Growth Playbooks
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
                  Technical guides, search engine optimization tactics, conversion rate frameworks, and enterprise software insights directly from our Hyderabad studio.
                </p>
              </div>
            </ScrollReveal>

            {/* SEARCH BAR & CATEGORY FILTERS */}
            <ScrollReveal direction="up" delay={100}>
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles by keyword, topic, or tag (e.g. Next.js, SEO, Funnels)..."
                    className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:bg-white transition-all shadow-2xs"
                  />
                </div>

                <div className="flex flex-wrap justify-center items-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-md shadow-pink-500/20 scale-105"
                          : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/90"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* FEATURED POST BANNER */}
        {!searchQuery && selectedCategory === "All Insights" && (
          <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6">
              <ScrollReveal direction="up">
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="group block bg-gradient-to-br from-slate-50/80 to-pink-50/20 border border-slate-200/90 hover:border-pink-300 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl cursor-pointer relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 rounded-2xl overflow-hidden relative h-64 sm:h-80 bg-slate-100">
                      <img
                        src={featuredPost.img}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                        Featured Publication
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3 text-xs font-mono font-bold text-pink-600">
                        <span className="bg-pink-50 border border-pink-100 px-3 py-1 rounded-full uppercase">{featuredPost.category}</span>
                        <span className="text-slate-400">{featuredPost.date}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b] group-hover:text-pink-600 transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>

                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="pt-2 flex items-center justify-between">
                        <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-pink-500" />
                          {featuredPost.author.name} ({featuredPost.author.role})
                        </div>

                        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-pink-600 group-hover:translate-x-1 transition-transform">
                          <span>Read Full Story</span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* ALL POSTS GRID */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-10">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-[#1e1b4b]">
                {selectedCategory} ({filteredPosts.length})
              </h2>
              {searchQuery && (
                <span className="text-xs text-slate-500 font-medium">
                  Showing results for &ldquo;<span className="font-bold text-slate-800">{searchQuery}</span>&rdquo;
                </span>
              )}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <p className="text-slate-500 text-sm font-medium">No articles matched your filter or search criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Insights");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-pink-50 text-pink-600 border border-pink-100 text-xs font-bold uppercase tracking-wider hover:bg-pink-100 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, idx) => (
                  <ScrollReveal key={post.id} delay={(idx % 3) * 60} direction="up" className="h-full">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="group block bg-white border border-slate-200/90 hover:border-pink-300 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 h-full flex flex-col justify-between cursor-pointer relative overflow-hidden"
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

                        {/* Title & Excerpt Content — Padded */}
                        <div className="p-5 sm:p-6 space-y-2">
                          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 font-bold">
                            <Calendar className="w-3.5 h-3.5" />
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
            )}
          </div>
        </section>

        {/* CTA FOOTER BANNER */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full inline-block">
                Digital Transformation
              </span>

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1e1b4b]">
                Ready to Implement These Growth Strategies?
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
                Connect with Digital Raiz engineers and digital strategists to design a tailored website, mobile application, or digital marketing framework.
              </p>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 shadow-lg transition-all cursor-pointer"
                >
                  <span>Start Your Project Consultation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
