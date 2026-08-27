import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Smartphone, SmartphoneNfc, AppWindow, Cpu, ShieldCheck, Sparkles, Star, ExternalLink, Box, Grid, Award, CheckCircle2, Milestone } from "lucide-react";
import PlatformExplorer from "@/components/PlatformExplorer";
import ProcessConsole from "@/components/ProcessConsole";

export const metadata = {
  title: "Custom Mobile App Development Services in Hyderabad | DigitalRaiz",
  description: "Hyderabad's leading mobile app development company. We build high-performance Android, iOS, Flutter, Native, and Hybrid mobile applications.",
};

export default function MobileApplicationPage() {
  const stats = [
    { value: "500K+", label: "App Downloads", desc: "Across iOS and Play Store", icon: <Award className="w-5 h-5 text-pink-500" /> },
    { value: "4.8★", label: "Average Rating", desc: "Highly rated by users", icon: <Star className="w-5 h-5 text-indigo-500" /> },
    { value: "5M+", label: "Monthly Sessions", desc: "Seamless backend scale", icon: <Cpu className="w-5 h-5 text-pink-500" /> },
    { value: "99.9%", label: "Crash-Free Sessions", desc: "Robust bug monitoring", icon: <ShieldCheck className="w-5 h-5 text-indigo-500" /> },
  ];

  const processSteps = [
    { step: "01", name: "Discovery & Arch", desc: "We map functional requirements, create data models, and outline third-party API integration structures." },
    { step: "02", name: "UI/UX Wireframing", desc: "Designing pixel-perfect mockups, interactive screen flows, and ergonomic user journeys." },
    { step: "03", name: "Agile Development", desc: "Sprinting code in native Swift/Kotlin or Flutter/React Native with regular version-control reviews." },
    { step: "04", name: "Quality Assurance", desc: "Rigorous automated testing, local sandbox debugging, and performance load checks." },
    { step: "05", name: "App Store Launch", desc: "Handling metadata assets, setting cryptographic keys, and navigating review cycles for deployment." }
  ];

  const comparisonData = [
    { type: "Native Apps (Swift / Kotlin)", performance: "Ultra High", cost: "Premium", speed: "Normal", hardware: "Full Direct Access" },
    { type: "Cross-Platform (Flutter / React Native)", performance: "Near-Native", cost: "Cost-Effective", speed: "Fast", hardware: "Excellent Bridge Access" },
    { type: "Hybrid Web Apps (PWAs / Cordova)", performance: "Standard", cost: "Budget-Friendly", speed: "Very Fast", hardware: "Limited Browser Access" }
  ];

  const portfolioApps = [
    {
      name: "Shri Manik Prabhu Samsthan",
      tag: "Devotional & Community",
      desc: "Official mobile application for managing organization schedules, calendar updates, and daily resources.",
      features: ["Custom calendar systems", "Push alerts & notifications", "Offline asset loading"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.maniksamstahnapp&hl=en",
      img: "/images/tall_mobile_app_ui.png"
    },
    {
      name: "Waypartner",
      tag: "Logistics & Transport",
      desc: "High-performance logistics coordination app designed for driver tracking, dispatch logging, and route reports.",
      features: ["Real-time GPS tracking", "In-app routing & map updates", "Automated trip log files"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.waypartner.waypartner&hl=en",
      img: "/images/android_app.png"
    },
    {
      name: "JBFMS India",
      tag: "Enterprise Workflow",
      desc: "Corporate resource dashboard system configured for tracking field team tasks, attendance, and instant audits.",
      features: ["Field staff check-ins", "Offline report syncing", "Live dashboard syncs"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.jbfms.jbfmsindia&hl=en",
      img: "/images/ios_app.png"
    },
    {
      name: "Eaglemart",
      tag: "E-Commerce",
      desc: "Full-scale consumer shopping application featuring secure payment checkout gateways, catalogs, and tracking.",
      features: ["Instant secure checkout", "Multi-payment support", "Real-time order tracking"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.eaglemartuser&hl=en",
      img: "/images/tall_mobile_app_ui.png"
    },
    {
      name: "Helomate",
      tag: "Social Connection",
      desc: "Interactive social networking client enabling location matches, real-time chats, and media uploads.",
      features: ["Real-time socket chats", "Location matching engine", "Media sharing streams"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.helomate.meetpeoplevirtual&hl=en",
      img: "/images/tall_mobile_app_ui.png"
    },
    {
      name: "Gocut",
      tag: "On-Demand Services",
      desc: "Booking and service scheduling interface with integrated maps, local search filters, and chats.",
      features: ["Appointment scheduling", "Local provider searches", "In-app customer chats"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.digitalraiz.gouser&hl=en",
      img: "/images/android_app.png"
    },
    {
      name: "Actin",
      tag: "Activity Tracker",
      desc: "Fitness and workflow check-in client logging user progress, session counts, and targets dynamically.",
      features: ["User metrics tracking", "Goal setting widgets", "Detailed historical logs"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.actin.user&hl=en",
      img: "/images/ios_app.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans select-none text-slate-800 lg:pr-[80px]">
      <Header />
      <main className="flex-grow">
        {/* Supported Platforms Grid */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/5 to-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 w-full space-y-14 relative z-10">
            {/* Centered Minimalist Modern Tech Header */}
            <div className="flex flex-col items-center text-center space-y-4 pb-1">
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-150 shadow-3xs">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-[8.5px] font-mono font-black text-slate-700 uppercase tracking-widest">Platform coverage matrix</span>
              </div> */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black uppercase tracking-tight leading-tight lg:leading-none text-[#1e1b4b]">
                Multi-Platform Ecosystems
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mt-2" />
            </div>

            <PlatformExplorer />
          </div>
        </section>

        {/* Detailed Comparison Matrix */}
        {/* <section className="py-20 bg-white border-t border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.25em] block">Technical Comparison</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Architectural Decision Matrix</h2>
              <p className="text-slate-400 text-xs font-light">Choose the development model that fits your timelines, requirements, and budget constraints.</p>
            </div>

            <div className="w-full overflow-x-auto rounded-2xl border border-slate-100 shadow-3xs bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-55 border-b border-slate-100 text-slate-500 uppercase tracking-wider text-[9px] font-bold">
                    <th className="py-4 px-6">App Architecture Type</th>
                    <th className="py-4 px-6">Performance</th>
                    <th className="py-4 px-6">Development Cost</th>
                    <th className="py-4 px-6">Time to Market</th>
                    <th className="py-4 px-6">Hardware Integration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">{row.type}</td>
                      <td className="py-4 px-6 text-emerald-600 font-semibold">{row.performance}</td>
                      <td className="py-4 px-6 text-slate-500">{row.cost}</td>
                      <td className="py-4 px-6 text-slate-500">{row.speed}</td>
                      <td className="py-4 px-6 text-slate-700">{row.hardware}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section> */}

        {/* Engineering Process Section */}
        <section className="py-5 bg-white">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">Execution Pipeline</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Mobile Engineering Process</h2>
            </div>

            {/* Interactive Process Console Component */}
            <ProcessConsole />
          </div>
        </section>

        {/* Real-World Client App Portfolio Showcase */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 w-full space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-[0.25em] block">App Showcase</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e1b4b]">Our Mobile App Projects</h2>
              <p className="text-slate-400 text-xs font-light">Explore real-world applications engineered by DigitalRaiz currently active on the Google Play Store.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioApps.map((app, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-slate-100 p-5 flex gap-5 bg-white hover:border-pink-500/35 hover:shadow-md transition-all duration-300 items-start"
                >
                  {/* Smartphone scrolling mockup chassis */}
                  <div className="w-[110px] h-[200px] rounded-[18px] border-[3px] border-slate-900 bg-slate-950 shadow-md overflow-hidden relative shrink-0">
                    {/* Speaker notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-900 rounded-full z-20 animate-pulse" />
                    
                    {/* Screen Image that scrolls vertically on card hover */}
                    <div className="absolute inset-0 transition-transform duration-[3500ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-194px)] z-10">
                      <img
                        src={app.img}
                        alt={app.name}
                        className="w-full h-auto object-cover object-top select-none pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* App Text details */}
                  <div className="flex-grow flex flex-col justify-between h-[200px]">
                    <div className="space-y-2">
                      <span className="text-[8px] font-bold text-indigo-650 uppercase tracking-widest bg-indigo-50 border border-indigo-100 rounded px-1.5 py-0.5 w-fit block leading-none">
                        {app.tag}
                      </span>
                      <h4 className="text-xs font-black uppercase tracking-tight text-slate-800 leading-tight">{app.name}</h4>
                      <p className="text-slate-500 text-[9.5px] leading-snug font-light text-justify">{app.desc}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex justify-end">
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[8.5px] font-bold uppercase tracking-wider text-slate-655 hover:text-pink-600 transition-colors"
                      >
                        <span>Play Store</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
