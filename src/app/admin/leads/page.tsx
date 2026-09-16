"use client";

import React, { useEffect, useState } from "react";
import AdminTable from "@/components/admin/AdminTable";
import {
  Users,
  Search,
  Filter,
  Mail,
  Phone,
  Trash2,
  RefreshCw,
  Eye,
  X,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface LeadItem {
  _id: string;
  leadId: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  service?: string;
  message: string;
  status: "New Inquiry" | "Contacted" | "Proposal Sent" | "Closed Won";
  createdAt: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);

  // Pagination state driven by backend
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  // Real-time backend aggregated counts
  const [counts, setCounts] = useState({
    total: 0,
    newInquiry: 0,
    contacted: 0,
    proposalSent: 0,
    closedWon: 0,
  });

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: String(currentPage),
        limit: String(itemsPerPage),
        status: filterStatus,
        search: searchTerm,
      });
      const res = await fetch(`/api/leads?${params.toString()}`);
      const json = await res.json();
      if (json.success) {
        setLeads(json.data || []);
        if (json.pagination) {
          setTotalItems(json.pagination.total);
          setTotalPages(json.pagination.totalPages);
        }
        if (json.counts) {
          setCounts(json.counts);
        }
      } else {
        setError(json.error || "Failed to load leads");
      }
    } catch (err: any) {
      setError("Network error loading leads from MongoDB");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [currentPage, filterStatus, searchTerm]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const json = await res.json();
      if (json.success) {
        fetchLeads();
        if (selectedLead && selectedLead._id === id) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus as any } : null));
        }
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead inquiry from MongoDB?")) return;
    try {
      const res = await fetch(`/api/leads?id=${id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.success) {
        fetchLeads();
        if (selectedLead && selectedLead._id === id) {
          setSelectedLead(null);
        }
      }
    } catch (err) {
      console.error("Delete lead error:", err);
    }
  };

  const handleFilterChange = (status: string) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Subtle accent tint */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-pink-100/40 to-indigo-100/20 rounded-full blur-xl pointer-events-none" />

        <div className="space-y-1 relative z-10">
          <h1 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2 tracking-tight">
            <Users className="w-5 h-5 text-pink-600" /> Inbound Lead Submissions
          </h1>
          <p className="text-slate-500 text-xs font-medium">
            View, track, and update live contact form inquiries received across Digital Raiz web properties
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <button
            onClick={fetchLeads}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer shadow-xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-pink-600 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh Leads</span>
          </button>
        </div>
      </div>

      {/* Unified Single Metric Counter Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 sm:p-3 shadow-sm grid grid-cols-2 sm:grid-cols-5 gap-2">
        <div
          onClick={() => handleFilterChange("all")}
          className={`p-3.5 rounded-xl cursor-pointer transition-all ${
            filterStatus === "all"
              ? "bg-slate-100/90 border border-slate-300 shadow-xs"
              : "hover:bg-slate-50 border border-transparent"
          }`}
        >
          <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">Total Submissions</div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">{counts.total}</div>
        </div>

        <div
          onClick={() => handleFilterChange("newinquiry")}
          className={`p-3.5 rounded-xl cursor-pointer transition-all ${
            filterStatus === "newinquiry"
              ? "bg-pink-50/90 border border-pink-200 shadow-xs"
              : "hover:bg-slate-50 border border-transparent"
          }`}
        >
          <div className="text-[10px] font-mono font-bold text-pink-600 uppercase">New Inquiries</div>
          <div className="text-xl sm:text-2xl font-black text-pink-600 mt-0.5">{counts.newInquiry}</div>
        </div>

        <div
          onClick={() => handleFilterChange("contacted")}
          className={`p-3.5 rounded-xl cursor-pointer transition-all ${
            filterStatus === "contacted"
              ? "bg-violet-50/90 border border-violet-200 shadow-xs"
              : "hover:bg-slate-50 border border-transparent"
          }`}
        >
          <div className="text-[10px] font-mono font-bold text-violet-600 uppercase">Contacted</div>
          <div className="text-xl sm:text-2xl font-black text-violet-600 mt-0.5">{counts.contacted}</div>
        </div>

        <div
          onClick={() => handleFilterChange("proposalsent")}
          className={`p-3.5 rounded-xl cursor-pointer transition-all ${
            filterStatus === "proposalsent"
              ? "bg-indigo-50/90 border border-indigo-200 shadow-xs"
              : "hover:bg-slate-50 border border-transparent"
          }`}
        >
          <div className="text-[10px] font-mono font-bold text-indigo-600 uppercase">Proposal Sent</div>
          <div className="text-xl sm:text-2xl font-black text-indigo-600 mt-0.5">{counts.proposalSent}</div>
        </div>

        <div
          onClick={() => handleFilterChange("closedwon")}
          className={`p-3.5 rounded-xl cursor-pointer transition-all ${
            filterStatus === "closedwon"
              ? "bg-emerald-50/90 border border-emerald-200 shadow-xs"
              : "hover:bg-slate-50 border border-transparent"
          }`}
        >
          <div className="text-[10px] font-mono font-bold text-emerald-600 uppercase">Closed Won</div>
          <div className="text-xl sm:text-2xl font-black text-emerald-600 mt-0.5">{counts.closedWon}</div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-80 text-xs">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search name, email, lead ID, or service..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 w-full"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {[
            { id: "all", label: "All" },
            { id: "newinquiry", label: "New" },
            { id: "contacted", label: "Contacted" },
            { id: "proposalsent", label: "Proposal" },
            { id: "closedwon", label: "Closed" },
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => handleFilterChange(st.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${filterStatus === st.id
                  ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white border-transparent shadow-md"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      <AdminTable
        columns={[
          { header: "Lead ID", className: "py-3.5 px-5" },
          { header: "Customer Info", className: "py-3.5 px-5" },
          { header: "Service Category", className: "py-3.5 px-5" },
          { header: "Message Preview", className: "py-3.5 px-5" },
          { header: "Submission Date", className: "py-3.5 px-5" },
          { header: "Status", className: "py-3.5 px-5" },
          { header: "Actions", className: "py-3.5 px-5 text-right" },
        ]}
        loading={loading}
        empty={leads.length === 0}
        emptyMessage={error || "No matching lead submissions found in database."}
        pagination={{
          currentPage,
          totalPages,
          totalItems,
          itemsPerPage,
          onPageChange: setCurrentPage,
        }}
      >
        {leads.map((lead) => (
          <tr
            key={lead._id}
            className="cursor-pointer group"
            onClick={() => setSelectedLead(lead)}
          >
            <td className="py-4 px-5 font-mono font-bold text-pink-600">{lead.leadId}</td>
            <td className="py-4 px-5 space-y-0.5">
              <div className="font-bold text-slate-900 text-sm group-hover:text-pink-600 transition-colors">
                {lead.name}
              </div>
              <div className="flex flex-col text-[11px] font-mono text-slate-500 space-y-0.5">
                <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-slate-400" /> {lead.email}</span>
                {lead.phone && (
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-emerald-600" /> {lead.phone}</span>
                )}
              </div>
            </td>
            <td className="py-4 px-5">
              <span className="font-bold text-slate-800 block">{lead.service || "General Inquiry"}</span>
              {lead.subject && (
                <span className="text-[10px] text-slate-500 font-mono block truncate max-w-[150px]">{lead.subject}</span>
              )}
            </td>
            <td className="py-4 px-5 max-w-xs">
              <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed" title={lead.message}>
                {lead.message}
              </p>
            </td>
            <td className="py-4 px-5 font-mono text-[10px] text-slate-500">
              {new Date(lead.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td className="py-4 px-5" onClick={(e) => e.stopPropagation()}>
              <select
                value={lead.status}
                onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                className={`px-2.5 py-1 rounded-full text-[9.5px] font-mono font-bold uppercase border bg-white cursor-pointer outline-none ${lead.status === "New Inquiry"
                    ? "text-pink-700 border-pink-200 bg-pink-50"
                    : lead.status === "Contacted"
                      ? "text-violet-700 border-violet-200 bg-violet-50"
                      : lead.status === "Proposal Sent"
                        ? "text-indigo-700 border-indigo-200 bg-indigo-50"
                        : "text-emerald-700 border-emerald-200 bg-emerald-50"
                  }`}
              >
                <option value="New Inquiry">New Inquiry</option>
                <option value="Contacted">Contacted</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed Won">Closed Won</option>
              </select>
            </td>
            <td className="py-4 px-5 text-right" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => setSelectedLead(lead)}
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer border-0"
                  title="View full lead details"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(lead._id)}
                  className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors cursor-pointer border-0"
                  title="Delete inquiry"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>

      {/* Detailed Lead Modal */}
      {selectedLead && (
        <div
          className="fixed inset-0 z-[120] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl p-6 sm:p-8 space-y-6 text-slate-900 relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-pink-700 bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full">
                    {selectedLead.leadId}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {new Date(selectedLead.createdAt).toLocaleString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{selectedLead.name}</h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Client Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Email Address</span>
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <a href={`mailto:${selectedLead.email}`} className="hover:underline">{selectedLead.email}</a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Phone / Mobile</span>
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <a href={`tel:${selectedLead.phone}`} className="hover:underline">{selectedLead.phone || "N/A"}</a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Requested Service</span>
                <div className="font-bold text-violet-700">{selectedLead.service || "General Inquiry"}</div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Lead Status</span>
                <div>
                  <select
                    value={selectedLead.status}
                    onChange={(e) => handleStatusChange(selectedLead._id, e.target.value)}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase border bg-white text-slate-900 cursor-pointer outline-none"
                  >
                    <option value="New Inquiry">New Inquiry</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Closed Won">Closed Won</option>
                  </select>
                </div>
              </div>

              {selectedLead.subject && (
                <div className="sm:col-span-2 space-y-1 border-t border-slate-200 pt-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Subject Line</span>
                  <div className="font-semibold text-slate-800">{selectedLead.subject}</div>
                </div>
              )}
            </div>

            {/* Inquiry Message Box */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                Full Inquiry Message:
              </span>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs leading-relaxed text-slate-800 whitespace-pre-wrap font-sans">
                {selectedLead.message}
              </div>
            </div>

            {/* Action Buttons Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedLead.email}?subject=RE:%20Digital%20Raiz%20Inquiry%20[${selectedLead.leadId}]`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold transition-all shadow-md"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Client</span>
                </a>

                {selectedLead.phone && (
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => handleDelete(selectedLead._id)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold transition-all cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Entry</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
