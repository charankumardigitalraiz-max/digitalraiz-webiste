"use client";

import React, { useState } from "react";
import { Settings, Save, Shield, Globe } from "lucide-react";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Settings className="w-6 h-6 text-pink-600" /> Admin &amp; Site Settings
          </h1>
          <p className="text-slate-600 text-xs font-normal">
            Configure global website parameters, SEO defaults, and security notification hooks
          </p>
        </div>

        {saved && (
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
            ✓ Settings Saved Successfully
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Site Details Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Globe className="w-4 h-4 text-violet-600" /> Global Website Parameters
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-slate-600 font-bold block">Company Legal Name</label>
              <input
                type="text"
                defaultValue="Digital Raiz Technologies Pvt. Ltd."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:border-pink-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-600 font-bold block">HQ Location</label>
              <input
                type="text"
                defaultValue="HITEC City, Hyderabad, Telangana, India"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:border-pink-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-600 font-bold block">Contact Email</label>
              <input
                type="email"
                defaultValue="contact@digitalraiz.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:border-pink-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-600 font-bold block">Support Phone Number</label>
              <input
                type="text"
                defaultValue="+91 98765 43210"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:border-pink-500 focus:bg-white outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Security & Access Controls */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Shield className="w-4 h-4 text-emerald-600" /> Security &amp; Access Controls
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="font-bold text-slate-900">2-Factor Authentication (2FA)</div>
                <div className="text-[10px] text-slate-500">Enforce OTP verification for admin logins</div>
              </div>
              <input type="checkbox" defaultChecked className="accent-pink-600 w-4 h-4 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="font-bold text-slate-900">Real-time Lead Email Notifications</div>
                <div className="text-[10px] text-slate-500">Send immediate email alert when a contact form is submitted</div>
              </div>
              <input type="checkbox" defaultChecked className="accent-pink-600 w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 py-3.5 px-7 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer border-0"
          >
            <Save className="w-4 h-4" />
            <span>Save Admin Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
}
