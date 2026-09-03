"use client";

import React, { useState } from "react";
import { FileText, Plus, Search, Calendar, Eye, Edit3, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AdminBlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      slug: "10-digital-marketing-strategies-scaling-hyderabad-businesses-in-2026",
      title: "10 Digital Marketing Strategies Scaling Hyderabad Businesses in 2026",
      author: "Digital Raiz Team",
      category: "Digital Marketing",
      date: "2026-08-28",
      views: "1.4K",
      status: "Published",
    },
    {
      slug: "nextjs-15-server-components-building-fast-web-applications",
      title: "Next.js 16 & Server Components: Building Ultra-Fast Web Applications",
      author: "Tech Engineering Squad",
      category: "Web Development",
      date: "2026-08-15",
      views: "2.8K",
      status: "Published",
    },
    {
      slug: "the-ai-seo-revolution-how-generative-search-optimization-controls-ranking",
      title: "The AI-SEO Revolution: How Generative Search Optimization Controls Ranking",
      author: "SEO Research Lab",
      category: "Artificial Intelligence",
      date: "2026-08-02",
      views: "3.1K",
      status: "Published",
    },
    {
      slug: "mobile-application-security-and-cross-platform-ux-architecture-2026",
      title: "Mobile Application Security & Cross-Platform UX Architecture in 2026",
      author: "Mobile Dev Team",
      category: "Mobile Apps",
      date: "2026-07-20",
      views: "1.9K",
      status: "Published",
    },
  ];

  const filteredPosts = blogPosts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-violet-400" /> Blog Content Management
          </h1>
          <p className="text-slate-400 text-xs font-light">
            Create, edit, and optimize blog articles for search rankings and audience engagement
          </p>
        </div>

        <button className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 border-0 cursor-pointer">
          <Plus className="w-4 h-4" />
          <span>New Article</span>
        </button>
      </div>

      <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center gap-2 bg-slate-950 border-slate-800 max-w-md text-xs">
        <Search className="w-4 h-4 text-slate-500 shrink-0" />
        <input
          type="text"
          placeholder="Filter blog titles or categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 w-full"
        />
      </div>

      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-950/60">
                <th className="py-3.5 px-5">Article Title</th>
                <th className="py-3.5 px-5">Category</th>
                <th className="py-3.5 px-5">Author</th>
                <th className="py-3.5 px-5">Date</th>
                <th className="py-3.5 px-5">Views</th>
                <th className="py-3.5 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filteredPosts.map((post) => (
                <tr key={post.slug} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-5">
                    <div className="font-bold text-white max-w-md">{post.title}</div>
                    <div className="text-[10px] font-mono text-slate-500">/blogs/{post.slug}</div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-[9.5px] font-mono font-bold uppercase">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-slate-300 font-medium">{post.author}</td>
                  <td className="py-4 px-5 font-mono text-[10px] text-slate-400">{post.date}</td>
                  <td className="py-4 px-5 font-mono text-slate-300 font-bold">{post.views}</td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/blogs/${post.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        title="Preview Article"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <button className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border-0">
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
