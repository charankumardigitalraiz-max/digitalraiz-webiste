"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  FileText,
  Briefcase,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ExternalLink,
  Shield,
  Layers,
  Search,
  Filter
} from "lucide-react";

export default function AdminOverviewDashboard() {
  const metrics = [
    {
      title: "Total Lead Inquiries",
      value: "148",
      change: "+18.4% this week",
      trend: "up",
      color: "from-pink-500/20 to-pink-600/5",
      border: "border-pink-500/30",
      textColor: "text-pink-400",
      icon: Users,
    },
    {
      title: "Published Blog Articles",
      value: "24",
      change: "4 Drafts Pending",
      trend: "neutral",
      color: "from-violet-500/20 to-violet-600/5",
      border: "border-violet-500/30",
      textColor: "text-violet-400",
      icon: FileText,
    },
    {
      title: "Portfolio Showcase",
      value: "36",
      change: "+3 Added this month",
      trend: "up",
      color: "from-indigo-500/20 to-indigo-600/5",
      border: "border-indigo-500/30",
      textColor: "text-indigo-400",
      icon: Briefcase,
    },
    {
      title: "Avg. SLA Response",
      value: "< 15 Mins",
      change: "99.9% Uptime",
      trend: "up",
      color: "from-emerald-500/20 to-emerald-600/5",
      border: "border-emerald-500/30",
      textColor: "text-emerald-400",
      icon: TrendingUp,
    },
  ];

  const recentLeads = [
    {
      id: "LD-8902",
      name: "Sandeep Varma",
      email: "sandeep@technovate.io",
      service: "Custom SaaS / Cloud DevSecOps",
      date: "Just now",
      status: "New Inquiry",
      statusStyle: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    },
    {
      id: "LD-8901",
      name: "Ananya Reddy",
      email: "ananya.r@apexhealth.in",
      service: "Mobile App Development",
      date: "25 mins ago",
      status: "Contacted",
      statusStyle: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    },
    {
      id: "LD-8900",
      name: "Karan Mehta",
      email: "karan@urbanlogistics.com",
      service: "SEO & Digital Marketing",
      date: "2 hours ago",
      status: "Proposal Sent",
      statusStyle: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    },
    {
      id: "LD-8899",
      name: "Pooja Sharma",
      email: "pooja@finverse.tech",
      service: "Testing & Quality Assurance",
      date: "Yesterday",
      status: "Closed Won",
      statusStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-[10px] font-mono font-bold text-pink-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Digital Raiz Administrative Portal
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Welcome Back, Admin Console
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-xl">
            Monitor real-time inbound customer inquiries, oversee content publishing workflows, and control site parameters.
          </p>
        </div>

        <div className="flex gap-3 relative z-10 shrink-0">
          <Link
            href="/admin/leads"
            className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <span>Review Leads</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Metric Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-br ${m.color} border ${m.border} bg-slate-900/60 shadow-lg space-y-4 hover:border-pink-500/50 transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">{m.title}</span>
                <div className={`p-2.5 rounded-xl bg-slate-900 border ${m.border} ${m.textColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-white">{m.value}</div>
                <div className={`text-[10px] font-mono font-bold ${m.textColor}`}>
                  {m.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Inquiries Table */}
        <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-400" /> Recent Inbound Lead Submissions
              </h2>
              <p className="text-slate-400 text-xs font-light">Latest inquiries generated via online contact forms</p>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1 transition-colors"
            >
              View All Leads <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  <th className="py-3 px-4">Lead ID</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Requested Service</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-300">{lead.id}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{lead.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{lead.email}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium">{lead.service}</td>
                    <td className="py-3.5 px-4 text-[10px] font-mono text-slate-400">{lead.date}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase border ${lead.statusStyle}`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Admin Actions & System Health */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Management Panel */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-violet-400" /> Quick Management
            </h3>

            <div className="space-y-2.5">
              <Link
                href="/admin/blogs"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-violet-500/50 transition-all text-xs font-bold text-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span>Create Blog Post</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 group-hover:text-white transition-transform" />
              </Link>

              <Link
                href="/admin/portfolio"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 transition-all text-xs font-bold text-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                  <span>Add Portfolio Case Study</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 group-hover:text-white transition-transform" />
              </Link>

              <Link
                href="/admin/settings"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-pink-500/50 transition-all text-xs font-bold text-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-pink-400" />
                  <span>SEO &amp; General Settings</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 group-hover:text-white transition-transform" />
              </Link>
            </div>
          </div>

          {/* Infrastructure Health */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <h3 className="text-sm font-extrabold text-white flex items-center justify-between">
              <span>Next.js App Server Health</span>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                100% OK
              </span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                <span className="text-slate-400">Environment</span>
                <span className="font-mono text-slate-200 font-bold">Next.js 16 (Turbopack)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                <span className="text-slate-400">Active Static Routes</span>
                <span className="font-mono text-slate-200 font-bold">26 Pre-rendered</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Route Grouping</span>
                <span className="font-mono text-pink-400 font-bold">(website) &amp; admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
