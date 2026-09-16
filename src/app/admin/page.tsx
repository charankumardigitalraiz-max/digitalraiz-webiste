"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AdminTable from "@/components/admin/AdminTable";
import {
  Users,
  Clock,
  CheckCircle2,
  Send,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  RefreshCw,
} from "lucide-react";

export default function AdminOverviewDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = () => {
    setLoading(true);
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLeads(data.data || []);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const totalLeads = leads.length;
  const newInquiriesCount = leads.filter((l) => l.status === "New Inquiry").length;
  const inProgressCount = leads.filter(
    (l) => l.status === "Contacted" || l.status === "Proposal Sent"
  ).length;
  const closedWonCount = leads.filter((l) => l.status === "Closed Won").length;

  const metrics = [
    {
      title: "Total Lead Inquiries",
      value: loading ? "..." : String(totalLeads),
      subtext: "Connected to MongoDB",
      color: "from-pink-50 to-white",
      border: "border-pink-200",
      textColor: "text-pink-600",
      iconBg: "bg-pink-50 border-pink-200",
      icon: Users,
    },
    {
      title: "New Inquiries Pending",
      value: loading ? "..." : String(newInquiriesCount),
      subtext: "Requires SLA response",
      color: "from-amber-50 to-white",
      border: "border-amber-200",
      textColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-200",
      icon: Clock,
    },
    {
      title: "In Progress / Contacted",
      value: loading ? "..." : String(inProgressCount),
      subtext: "Active sales pipeline",
      color: "from-indigo-50 to-white",
      border: "border-indigo-200",
      textColor: "text-indigo-600",
      iconBg: "bg-indigo-50 border-indigo-200",
      icon: Send,
    },
    {
      title: "Closed / Converted",
      value: loading ? "..." : String(closedWonCount),
      subtext: "Successful deals",
      color: "from-emerald-50 to-white",
      border: "border-emerald-200",
      textColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-200",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden">
        {/* Ambient tint accent */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-pink-100/50 to-indigo-100/30 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-1.5 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-[9px] font-mono font-bold text-pink-700 uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-pink-600" />
            Digital Raiz Control Center
          </div>
          <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            Admin Overview Dashboard
          </h1>
          <p className="text-slate-500 text-xs font-medium max-w-lg leading-normal">
            Real-time administrative control center for managing inbound customer inquiries, client leads, and system notification status.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 shrink-0">
          <button
            onClick={fetchLeads}
            className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-slate-500 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
          <Link
            href="/admin/leads"
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <span>Manage Leads</span>
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
              className={`p-6 rounded-2xl bg-gradient-to-br ${m.color} border ${m.border} shadow-sm space-y-4 hover:shadow-md transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{m.title}</span>
                <div className={`p-2.5 rounded-xl border ${m.iconBg} ${m.textColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">{m.value}</div>
                <div className={`text-[10px] font-mono font-bold ${m.textColor}`}>
                  {m.subtext}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {/* Recent Inquiries Table */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-600" /> Recent Inbound Lead Submissions
              </h2>
              <p className="text-slate-500 text-xs font-light">Latest customer inquiries submitted via website contact form</p>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center gap-1 transition-colors"
            >
              View All Leads <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <AdminTable
            columns={[
              { header: "Lead ID", className: "py-3.5 px-4" },
              { header: "Customer Contact", className: "py-3.5 px-4" },
              { header: "Service Category", className: "py-3.5 px-4" },
              { header: "Submitted Date", className: "py-3.5 px-4" },
              { header: "Status", className: "py-3.5 px-4 text-right" },
            ]}
            loading={loading}
            empty={leads.length === 0}
            emptyMessage="No lead submissions found yet."
          >
            {leads.slice(0, 5).map((lead: any) => (
              <tr key={lead._id || lead.leadId}>
                <td className="py-3.5 px-4 font-mono font-bold text-pink-600">{lead.leadId}</td>
                <td className="py-3.5 px-4">
                  <div className="font-bold text-slate-900">{lead.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{lead.email}</div>
                </td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">{lead.service || "General Inquiry"}</td>
                <td className="py-3.5 px-4 text-[10px] font-mono text-slate-500">
                  {lead.createdAt
                    ? new Date(lead.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                    : "Recently"}
                </td>
                <td className="py-3.5 px-4 text-right">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase border ${lead.status === "New Inquiry"
                    ? "bg-pink-50 text-pink-700 border-pink-200"
                    : lead.status === "Contacted"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : lead.status === "Proposal Sent"
                        ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                        : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }`}>
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </AdminTable>
        </div>

        {/* Quick Admin Actions & System Health */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Management Panel */}
          {/* <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-violet-600" /> Quick Actions
            </h3>

            <div className="space-y-2.5">
              <Link
                href="/admin/leads"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-pink-300 hover:bg-slate-100 transition-all text-xs font-bold text-slate-800 group"
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-pink-600" />
                  <span>View All Inbound Leads</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-900 transition-transform" />
              </Link>

              <Link
                href="/admin/settings"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-slate-100 transition-all text-xs font-bold text-slate-800 group"
              >
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-indigo-600" />
                  <span>Admin &amp; Security Settings</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-900 transition-transform" />
              </Link>
            </div>
          </div> */}

          {/* Infrastructure Health */}
          {/* <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center justify-between">
              <span>System &amp; Email Dispatch</span>
              <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                Active
              </span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-slate-500">Database Engine</span>
                <span className="font-mono text-slate-800 font-bold">MongoDB</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-slate-500">Email Transport</span>
                <span className="font-mono text-slate-800 font-bold">Nodemailer (SMTP)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Email Recipients</span>
                <span className="font-mono text-pink-600 font-bold">4 Verified Addresses</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
