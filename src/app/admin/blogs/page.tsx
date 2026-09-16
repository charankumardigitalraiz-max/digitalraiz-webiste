"use client";

import React, { useState } from "react";
import AdminTable from "@/components/admin/AdminTable";
import { FileText, Plus, Search, Edit3, ExternalLink } from "lucide-react";
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
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-violet-600" /> Blog Content Management
          </h1>
          <p className="text-slate-600 text-xs font-normal">
            Create, edit, and optimize blog articles for search rankings and audience engagement
          </p>
        </div>

        <button className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 border-0 cursor-pointer">
          <Plus className="w-4 h-4" />
          <span>New Article</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-2 max-w-md text-xs shadow-sm">
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Filter blog titles or categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 w-full"
        />
      </div>

      <AdminTable
        columns={[
          { header: "Article Title", className: "py-3.5 px-5" },
          { header: "Category", className: "py-3.5 px-5" },
          { header: "Author", className: "py-3.5 px-5" },
          { header: "Date", className: "py-3.5 px-5" },
          { header: "Views", className: "py-3.5 px-5" },
          { header: "Actions", className: "py-3.5 px-5 text-right" },
        ]}
        empty={filteredPosts.length === 0}
        emptyMessage="No blog posts found matching search."
      >
        {filteredPosts.map((post) => (
          <tr key={post.slug}>
            <td className="py-4 px-5">
              <div className="font-bold text-slate-900 max-w-md">{post.title}</div>
              <div className="text-[10px] font-mono text-slate-400">/insights/blog/{post.slug}</div>
            </td>
            <td className="py-4 px-5">
              <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200 text-[9.5px] font-mono font-bold uppercase">
                {post.category}
              </span>
            </td>
            <td className="py-4 px-5 text-slate-700 font-medium">{post.author}</td>
            <td className="py-4 px-5 font-mono text-[10px] text-slate-500">{post.date}</td>
            <td className="py-4 px-5 font-mono text-slate-900 font-bold">{post.views}</td>
            <td className="py-4 px-5 text-right">
              <div className="flex items-center justify-end gap-2">
                <Link
                  href={`/insights/blog/${post.slug}`}
                  target="_blank"
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                  title="Preview Article"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <button className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border-0">
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>
    </div>
  );
}
