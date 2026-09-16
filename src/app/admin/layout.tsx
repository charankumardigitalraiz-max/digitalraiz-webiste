"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Briefcase,
  Settings,
  ExternalLink,
  Menu,
  X,
  LogOut,
  ShieldCheck,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  // If we are already on the login page, render children directly
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setAuthenticated(true);
      return;
    }

    // Verify session authentication status
    fetch("/api/admin/login")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
          router.push("/admin/login");
        }
      })
      .catch(() => {
        setAuthenticated(false);
        router.push("/admin/login");
      });
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (e) {
      console.error(e);
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  // Loading state while checking authentication session
  if (authenticated === null) {
    return (
      <div className="h-screen bg-white text-slate-500 flex items-center justify-center font-mono text-xs">
        Verifying Admin Session...
      </div>
    );
  }

  // If unauthenticated, redirect is triggered by useEffect
  if (!authenticated) {
    return null;
  }

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Lead Inquiries", href: "/admin/leads", icon: Users },
    // { name: "Blog Posts", href: "/admin/blogs", icon: FileText },
    // { name: "Portfolio", href: "/admin/portfolio", icon: Briefcase },
    // { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="h-screen max-h-screen overflow-hidden bg-slate-50 text-slate-900 font-sans flex antialiased select-none">
      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-slate-900/30 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Full Height Sidebar */}
      <aside
        className={`${isSidebarOpen
          ? "w-64 translate-x-0"
          : "-translate-x-full w-0 md:w-16 md:translate-x-0"
          } transition-all duration-300 border-r border-slate-200 bg-white flex flex-col justify-between shrink-0 overflow-y-auto h-full z-40 shadow-sm`}
      >
        <div className="p-3 space-y-3">
          {/* Sidebar Top Header with Logo & Toggle Button */}
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <Link
              href="/admin"
              className={`flex items-center ${isSidebarOpen ? "gap-2.5 px-2 py-1" : "justify-center p-1 w-full"
                } group`}
            >
              <img
                src="/logo/logo-without-txt.webp"
                alt="Digital Raiz Logo"
                className="h-9 sm:h-10 w-auto object-contain shrink-0"
              />
              {isSidebarOpen && (
                <div>
                  <div className="text-sm font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                    <span>Digital Raiz</span>
                    {/* <span className="text-[9px] font-mono uppercase bg-pink-100 text-pink-700 border border-pink-200 px-1.5 py-0.5 rounded-full font-bold">
                      Admin
                    </span> */}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">Control Center</div>
                </div>
              )}
            </Link>

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer border-0 shrink-0"
              title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
            >
              {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          <div
            className={`px-3 py-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest ${!isSidebarOpen ? "text-center px-0" : ""
              }`}
          >
            {isSidebarOpen ? "Navigation" : "Nav"}
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.name}
                className={`flex items-center ${isSidebarOpen ? "justify-between px-3.5" : "justify-center px-2"
                  } py-2.5 rounded-xl text-xs font-bold transition-all ${isActive
                    ? "bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 text-white shadow-md shadow-pink-500/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 shrink-0" />
                  {isSidebarOpen && <span>{item.name}</span>}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Sidebar Bottom Footer Widget */}
        <div className="p-3 m-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <Link
            href="/"
            target="_blank"
            className={`w-full flex items-center ${isSidebarOpen ? "justify-between p-2" : "justify-center p-2"
              } rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-colors`}
            title="View Live Site"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              {isSidebarOpen && <span>View Live Site</span>}
            </div>
          </Link>

          <button
            onClick={handleLogout}
            title="Sign Out Session"
            className={`w-full flex items-center ${isSidebarOpen ? "justify-between p-2" : "justify-center p-2"
              } rounded-xl bg-white hover:bg-rose-50 border border-slate-200 text-xs font-bold text-rose-600 transition-colors cursor-pointer`}
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-3.5 h-3.5" />
              {isSidebarOpen && <span>Sign Out Session</span>}
            </div>
          </button>

          {isSidebarOpen && (
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-200">
              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Session Active
              </span>
              <span className="font-bold text-slate-700">v1.0.0</span>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Body (With Floating Toggle Button on Mobile / Collapsed) */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Mobile / Collapsed Header Bar */}
        <div className="flex md:hidden items-center justify-between p-3 bg-white border-b border-slate-200 shadow-xs">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200 cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="text-xs font-bold text-slate-900 font-mono">Digital Raiz Admin</div>
          <Link
            href="/"
            target="_blank"
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 text-xs"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50 text-slate-900 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
