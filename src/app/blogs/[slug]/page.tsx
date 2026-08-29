import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPostsData, getBlogPostBySlug } from "@/data/blogsData";
import {
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  ChevronLeft,
  Tag,
  ArrowUpRight,
  Share2,
  BookOpen,
  List,
  MessageSquare,
  TrendingUp,
  Bookmark
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Blog Post Not Found | Digital Raiz",
    };
  }

  return {
    title: `${post.title} | Digital Raiz Journal`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://digitalraiz.com/blogs/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://digitalraiz.com/blogs/${post.slug}/`,
      siteName: "Digital Raiz",
      images: [
        {
          url: post.img,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SingleBlogPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 lg:pr-[80px]">
      <Header />

      <main className="flex-grow">

        {/* ========================================================================= */}
        {/* 1. HERO HEADER SECTION — Elegant Editorial Title & Publication Metadata   */}
        {/* ========================================================================= */}
        <section className="pt-12 pb-12 bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-8">

            {/* Top Navigation Row */}
            <div className="flex items-center justify-between">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-pink-50 text-slate-600 hover:text-pink-600 text-xs font-semibold transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Article Main Headline */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1b4b] tracking-tight leading-[1.15]">
                {post.title}
              </h1>

              {post.subtitle && (
                <p className="text-slate-600 text-base sm:text-xl font-medium leading-relaxed max-w-3xl">
                  {post.subtitle}
                </p>
              )}
            </div>

            {/* Publication Metadata & Author Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  CK
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{post.author.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-pink-500" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-pink-500" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                  <BookOpen className="w-3.5 h-3.5 text-pink-600" />
                  <span>Engineering Journal</span>
                </span>
              </div>
            </div>

            {/* Full-Width Featured Cover Image */}
            <div className="w-full h-72 sm:h-96 lg:h-[460px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-lg relative">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. 2-COLUMN PUBLICATION LAYOUT (8 Cols Content / 4 Cols Sticky Sidebar)   */}
        {/* ========================================================================= */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* =================================================================== */}
              {/* LEFT COLUMN: Main Article Body Content (lg:col-span-8)              */}
              {/* =================================================================== */}
              <div className="lg:col-span-8 space-y-10">

                {/* KEY STRATEGIC TAKEAWAYS BOX */}
                <div className="bg-gradient-to-r from-pink-50/60 via-white to-violet-50/40 border border-pink-100 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xs">
                  <div className="flex items-center gap-2 text-pink-700 font-mono font-bold text-xs uppercase tracking-widest">
                    <Sparkles className="w-4 h-4 text-pink-600" />
                    Key Executive Takeaways
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {post.takeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-pink-100/60 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FORMATTED ARTICLE SECTIONS */}
                <div className="space-y-10 text-slate-700">
                  {post.content.map((sec, i) => (
                    <div key={i} className="space-y-4">
                      {sec.heading && (
                        <div className="space-y-1 pt-2">
                          <div className="text-[10px] font-mono font-bold text-pink-600 uppercase tracking-widest">
                            Section {String(i + 1).padStart(2, "0")}
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] tracking-tight">
                            {sec.heading}
                          </h2>
                        </div>
                      )}

                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                          {p}
                        </p>
                      ))}

                      {sec.bulletPoints && (
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 my-4">
                          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                            Core Action Items:
                          </div>
                          <div className="space-y-2.5">
                            {sec.bulletPoints.map((bp, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                                <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                                  {bIdx + 1}
                                </span>
                                <span className="leading-relaxed">{bp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* TAGS & AUTHOR BIO SHOWCASE */}
                <div className="pt-8 border-t border-slate-100 space-y-8">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 mr-1">
                      <Tag className="w-3.5 h-3.5" /> Tags:
                    </span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold hover:bg-pink-50 hover:text-pink-600 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author Bio Box */}
                  <div className="bg-gradient-to-r from-slate-50 to-pink-50/30 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                      CK
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-base font-bold text-[#1e1b4b]">{post.author.name}</div>
                      <div className="text-xs font-mono text-pink-600 font-bold">{post.author.role}</div>
                      <p className="text-xs sm:text-sm text-slate-600 pt-1 leading-relaxed">{post.author.bio}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* =================================================================== */}
              {/* RIGHT SIDEBAR: Sticky Table of Contents & Quick Contact Widget       */}
              {/* =================================================================== */}
              <div className="lg:col-span-4 space-y-8">
                <div className="sticky top-28 space-y-6">

                  {/* Table of Contents Widget */}
                  <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-4 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">
                      <List className="w-4 h-4 text-pink-600" />
                      <span>Article Sections</span>
                    </div>

                    <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
                      {post.content.map((sec, idx) => (
                        sec.heading && (
                          <li key={idx}>
                            <a
                              href={`#sec-${idx}`}
                              className="hover:text-pink-600 transition-colors flex items-center gap-2 py-1"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                              <span className="line-clamp-1">{sec.heading}</span>
                            </a>
                          </li>
                        )
                      ))}
                    </ul>
                  </div>

                  {/* Sidebar Strategy Consultation Card */}
                  <div className="bg-gradient-to-br from-slate-900 via-[#1e1b4b] to-slate-900 text-white rounded-3xl p-6 space-y-4 shadow-xl">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-[9px] font-mono font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" /> Growth Advisory
                    </div>

                    <h3 className="text-lg font-black uppercase tracking-tight text-white leading-snug">
                      Need Help Executing This Strategy?
                    </h3>

                    <p className="text-slate-300 text-xs font-normal leading-relaxed">
                      Schedule a 1-on-1 strategy call with Digital Raiz engineers in Hyderabad.
                    </p>

                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
                    >
                      <span>Book Strategy Session</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Bookmark & Share Bar */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Bookmark className="w-4 h-4 text-pink-500" />
                      <span>Bookmark Article</span>
                    </span>
                    <Link
                      href="/blogs"
                      className="text-pink-600 hover:underline flex items-center gap-1"
                    >
                      <span>Share</span>
                      <Share2 className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. RECOMMENDED ARTICLES GRID                                              */}
        {/* ========================================================================= */}
        <section className="py-5 bg-slate-50/60 border-t border-slate-100">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-10">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1e1b4b]">
                More Industry Insights
              </h2>
              <Link href="/blogs" className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1">
                <span>View All Articles</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost, idx) => (
                <ScrollReveal key={rPost.id} delay={idx * 60} direction="up" className="h-full">
                  <Link
                    href={`/blogs/${rPost.slug}`}
                    className="group block bg-white border border-slate-200/90 hover:border-pink-300 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-between cursor-pointer relative overflow-hidden"
                  >
                    <div>
                      {/* Thumbnail — Flush Edge-to-Edge at Top */}
                      <div className="w-full h-44 overflow-hidden bg-slate-50 relative">
                        <img src={rPost.img} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>

                      <div className="p-5 space-y-2">
                        <div className="text-[9px] font-mono font-bold text-pink-600 uppercase">{rPost.category}</div>
                        <h3 className="text-base font-bold text-[#1e1b4b] group-hover:text-pink-600 transition-colors leading-snug">
                          {rPost.title}
                        </h3>
                        <p className="text-slate-600 text-xs line-clamp-2">{rPost.excerpt}</p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>{rPost.readTime}</span>
                      <ArrowRight className="w-4 h-4 text-pink-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
