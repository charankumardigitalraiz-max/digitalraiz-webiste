"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Briefcase,
  Settings,
  Bell,
  Search,
  ShieldCheck,
  ExternalLink,
  Menu,
  X
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Lead Inquiries", href: "/admin/leads", icon: Users, badge: "12 New" },
    { name: "Blog Posts", href: "/admin/blogs", icon: FileText, badge: "4 Articles" },
    { name: "Portfolio", href: "/admin/portfolio", icon: Briefcase },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col antialiased select-none">
      {/* Top Navbar */}
      <header className="h-16 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer border-0"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link href="/admin" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-violet-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xs shadow-md shadow-pink-500/20">
              DR
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                <span>Digital Raiz</span>
                <span className="text-[9px] font-mono uppercase bg-pink-500/20 text-pink-400 border border-pink-500/30 px-2 py-0.5 rounded-full font-bold">
                  Admin
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">Control Center</div>
            </div>
          </Link>
        </div>

        {/* Global Search & User Bar */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-1.5 w-64 text-xs text-slate-400">
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search leads, posts, projects..."
              className="bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 text-xs w-full"
            />
          </div>

          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-[11px] font-bold text-slate-300 hover:text-white transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>

          <button className="relative p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 cursor-pointer">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping" />
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-800">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-xs">
              AD
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-xs font-bold text-slate-200">Admin Manager</div>
              <div className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Active Session
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "w-64" : "w-0 -translate-x-full md:w-16 md:translate-x-0"
          } transition-all duration-300 border-r border-slate-800/80 bg-slate-900/60 flex flex-col justify-between shrink-0 overflow-hidden z-40`}
        >
          <div className="p-3 space-y-1">
            <div className="px-3 py-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              {isSidebarOpen ? "Navigation Portal" : "Nav"}
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-md shadow-pink-500/10"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    {isSidebarOpen && <span>{item.name}</span>}
                  </div>
                  {isSidebarOpen && item.badge && (
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* System Status Footer Widget */}
          {isSidebarOpen && (
            <div className="p-4 m-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> Next.js 16
                </span>
                <span className="font-bold">v1.0.0</span>
              </div>
              <div className="text-[10px] font-mono text-slate-500 leading-tight">
                Server Environment Healthy • 100% Operational
              </div>
            </div>
          )}
        </aside>

        {/* Main Content Body */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100">
          {children}
        </main>
      </div>
    </div>
  );
}
