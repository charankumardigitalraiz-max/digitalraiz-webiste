"use client";

import React, { useState } from "react";
import { Users, Search, Filter, Mail, Phone, Calendar, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function AdminLeadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const leads = [
    {
      id: "LD-8902",
      name: "Sandeep Varma",
      email: "sandeep@technovate.io",
      phone: "+91 98765 43210",
      service: "Custom SaaS / Cloud DevSecOps",
      budget: "$5,000 - $10,000",
      date: "2026-09-02 21:05",
      message: "Looking for an automated DevSecOps CI/CD pipeline setup and vulnerability testing for our AWS environment.",
      status: "new",
    },
    {
      id: "LD-8901",
      name: "Ananya Reddy",
      email: "ananya.r@apexhealth.in",
      phone: "+91 91234 56789",
      service: "Mobile App Development",
      budget: "$10,000+",
      date: "2026-09-02 20:40",
      message: "We need a Flutter/React Native healthcare booking application built with HIPAA/GDPR compliance.",
      status: "contacted",
    },
    {
      id: "LD-8900",
      name: "Karan Mehta",
      email: "karan@urbanlogistics.com",
      phone: "+91 99887 76655",
      service: "SEO & Digital Marketing",
      budget: "$2,500 - $5,000",
      date: "2026-09-02 18:30",
      message: "Want to scale our organic search rankings in Hyderabad and run high-converting Google Ads campaigns.",
      status: "proposal",
    },
    {
      id: "LD-8899",
      name: "Pooja Sharma",
      email: "pooja@finverse.tech",
      phone: "+91 94455 66778",
      service: "Testing & Quality Assurance",
      budget: "$5,000+",
      date: "2026-09-01 14:15",
      message: "Required automated Playwright regression suite and security VAPT audit for our fintech web application.",
      status: "closed",
    },
    {
      id: "LD-8898",
      name: "Vikram Malhotra",
      email: "vikram@omnichannel.co",
      phone: "+91 97711 22334",
      service: "Website Development",
      budget: "$3,000 - $6,000",
      date: "2026-09-01 10:00",
      message: "Need a modern Next.js 16 ecommerce platform integrated with Razorpay and SAP ERP inventory.",
      status: "contacted",
    },
  ];

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || l.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
            <Users className="w-6 h-6 text-pink-400" /> Inbound Lead Management
          </h1>
          <p className="text-slate-400 text-xs font-light">
            Review customer contact submissions, lead budgets, and communication statuses
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
            Total Leads: <strong className="text-pink-400">{leads.length}</strong>
          </span>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 w-full sm:w-80 text-xs">
          <Search className="w-4 h-4 text-slate-500 shrink-0" />
          <input
            type="text"
            placeholder="Search lead name, email, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 w-full"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          <Filter className="w-4 h-4 text-slate-500 shrink-0" />
          {["all", "new", "contacted", "proposal", "closed"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                filterStatus === st
                  ? "bg-pink-500 text-white border-pink-500 shadow-md"
                  : "bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table View */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-950/60">
                <th className="py-3.5 px-5">Lead ID</th>
                <th className="py-3.5 px-5">Customer Info</th>
                <th className="py-3.5 px-5">Requested Service</th>
                <th className="py-3.5 px-5">Est. Budget</th>
                <th className="py-3.5 px-5">Submitted Date</th>
                <th className="py-3.5 px-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-5 font-mono font-bold text-slate-300">{lead.id}</td>
                  <td className="py-4 px-5 space-y-0.5">
                    <div className="font-bold text-white text-sm">{lead.name}</div>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-pink-400" /> {lead.email}</span>
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-emerald-400" /> {lead.phone}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="font-bold text-slate-200 block">{lead.service}</span>
                    <span className="text-[10px] text-slate-400 max-w-xs block truncate font-light" title={lead.message}>
                      {lead.message}
                    </span>
                  </td>
                  <td className="py-4 px-5 font-mono text-slate-300 font-semibold">{lead.budget}</td>
                  <td className="py-4 px-5 font-mono text-[10px] text-slate-400">{lead.date}</td>
                  <td className="py-4 px-5 text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[9.5px] font-mono font-bold uppercase border ${
                        lead.status === "new"
                          ? "bg-pink-500/20 text-pink-400 border-pink-500/30"
                          : lead.status === "contacted"
                          ? "bg-violet-500/20 text-violet-400 border-violet-500/30"
                          : lead.status === "proposal"
                          ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      }`}
                    >
                      {lead.status}
                    </span>
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
