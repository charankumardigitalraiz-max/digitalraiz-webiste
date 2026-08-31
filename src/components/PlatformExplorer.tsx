"use client";

import { useState } from "react";

interface Tech {
  name: string;
  logo: React.ReactNode;
}

interface Platform {
  name: string;
  desc: string;
  logo: React.ReactNode;
  tag: string;
  features: string[];
  techs: Tech[];
  specs: { label: string; value: string }[];
  img: string;
  accentColor: string;
  glowColor: string;
}

export default function PlatformExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);

  // SVG technology logo definitions
  const kotlinLogo = (
    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none">
      <path d="M24 24H0V0h24L12 12L24 24z" fill="url(#kotlin-grad)" />
      <defs>
        <linearGradient id="kotlin-grad" x1="24" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E44857" />
          <stop offset="0.5" stopColor="#C711E1" />
          <stop offset="1" stopColor="#7F52FF" />
        </linearGradient>
      </defs>
    </svg>
  );

  const swiftLogo = (
    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="#F05138">
      <path d="M21.5 17c-1.5 2-4.5 3.5-7.5 3.5-5.5 0-9.5-4-9.5-9.5S8.5 1.5 14 1.5c3 0 5.5 1.5 7 3.5-1.5-1.5-4-2.5-6.5-2.5-4.5 0-7.5 3-7.5 7.5s3.5 7.5 8 7.5c2.5 0 5-1 6.5-2.5z" />
    </svg>
  );

  const flutterLogo = (
    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none">
      <path d="M14.3 2.3L5 11.6l9.3 9.3h5.4L10.4 11.6l9.3-9.3z" fill="#02569B" />
      <path d="M14.3 11.6l-4.7 4.7 4.7 4.7h5.4l-4.7-4.7 4.7-4.7z" fill="#0175C2" />
      <path d="M14.3 2.3L9.6 7l4.7 4.6h5.4l-4.7-4.6 4.7-4.7z" fill="#13B9FD" />
    </svg>
  );

  const reactNativeLogo = (
    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );

  const javaLogo = (
    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="#E76F00" strokeWidth="2">
      <path d="M18 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <path d="M6 1v3M10 1v3M14 1v3" />
    </svg>
  );

  const csharpLogo = (
    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#35007F" />
      <text x="5" y="15" fill="white" fontSize="9" fontWeight="bold" fontFamily="monospace">C#</text>
    </svg>
  );

  const androidOSLogo = (
    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
      <path d="M17.523 15.3l1.816 3.146a.5.5 0 0 1-.866.5l-1.838-3.185a11.238 11.238 0 0 1-9.27 0l-1.838 3.185a.5.5 0 0 1-.866-.5L6.477 15.3A10 10 0 0 1 2 7.5a.5.5 0 0 1 1 0 9 9 0 0 0 18 0 .5.5 0 0 1 1 0 10 10 0 0 1-4.477 7.8zM7.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );

  const appleOSLogo = (
    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.1.08.21.12.32.12.87 0 1.99-.54 2.49-1.45z" />
    </svg>
  );

  const windowsOSLogo = (
    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
      <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.101zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95v-9.6z" />
    </svg>
  );

  const platforms: Platform[] = [
    {
      name: "Android Application",
      desc: "We engineer native Android ecosystems using Kotlin and Jetpack Compose. Our systems incorporate secure local Room database caching, modular architectures, and thread-safe background sync managers to ensure continuous operation.",
      logo: androidOSLogo,
      tag: "Google Ecosystem",
      features: [
        "Native Kotlin Jetpack Compose layout engines",
        "Secure local Room database caching models",
        "Google Play Console deployment pipelines",
        "Low-overhead background sync telemetry managers"
      ],
      techs: [
        { name: "Kotlin", logo: kotlinLogo },
        { name: "Flutter", logo: flutterLogo },
        { name: "React Native", logo: reactNativeLogo }
      ],
      specs: [
        { label: "Compiler", value: "Kotlin / R8" },
        { label: "UI System", value: "Compose 1.7" },
        { label: "Target API", value: "API 35 (15.0)" }
      ],
      img: "/platforms/android_banner.webp",
      accentColor: "#ec4899",
      glowColor: "rgba(236,72,153,0.12)"
    },
    {
      name: "iOS Application",
      desc: "We build native iOS solutions utilizing SwiftUI and Xcode. By integrating local Keychain encryption, biometric authentication (FaceID/TouchID), and Apple CoreData local store caching, we maintain top-tier performance.",
      logo: appleOSLogo,
      tag: "Apple Ecosystem",
      features: [
        "Native SwiftUI layout architectures",
        "Apple CoreData local storage sync engines",
        "FaceID / TouchID biometric secure hardware integration",
        "App Store Connect submission & telemetry setups"
      ],
      techs: [
        { name: "Swift", logo: swiftLogo },
        { name: "Flutter", logo: flutterLogo },
        { name: "React Native", logo: reactNativeLogo }
      ],
      specs: [
        { label: "Compiler", value: "Swift / LLVM" },
        { label: "UI System", value: "SwiftUI 6.0" },
        { label: "Target iOS", value: "iOS 18.0+" }
      ],
      img: "/platforms/ios_banner.webp",
      accentColor: "#6366f1",
      glowColor: "rgba(99,102,241,0.12)"
    },
    {
      name: "macOS Application",
      desc: "We develop desktop macOS systems optimized for Apple Silicon (M1/M2/M3). By incorporating native sandboxed directories, Cocoa layouts, and background worker threads, we deliver low-latency professional utilities.",
      logo: appleOSLogo,
      tag: "Apple Desktop",
      features: [
        "Native Apple Silicon M1/M2/M3 execution optimization",
        "Sleek Cocoa layout design structures & menus",
        "Sandboxed local database folders for data isolation",
        "Multi-window layout dashboard configurations"
      ],
      techs: [
        { name: "Swift", logo: swiftLogo },
        { name: "Flutter", logo: flutterLogo },
        { name: "React Native", logo: reactNativeLogo }
      ],
      specs: [
        { label: "Language", value: "Swift / Obj-C" },
        { label: "Framework", value: "AppKit / Catalyst" },
        { label: "Min OS", value: "macOS Sonoma (14)" }
      ],
      img: "/platforms/macos_white_modern_banner.webp",
      accentColor: "#ec4899",
      glowColor: "rgba(236,72,153,0.12)"
    },
    {
      name: "Windows Application",
      desc: "We compile enterprise Windows software using C# .NET and WinUI 3. Our implementations utilize hardware-accelerated render trees, native Win32 bridges, secure MSIX packaging, and local SQL Server database syncs.",
      logo: windowsOSLogo,
      tag: "Microsoft Desktop",
      features: [
        "Modern WinUI 3 fluent design responsive panels",
        "Secure Windows MSIX packaging profiles for deployment",
        "Low-level DLL connector hardware adapters",
        "Integrated SQL Server database backend connections"
      ],
      techs: [
        { name: "Java", logo: javaLogo },
        { name: "Flutter", logo: flutterLogo },
        { name: "C# / .NET", logo: csharpLogo }
      ],
      specs: [
        { label: "Framework", value: "WinUI 3 / WASDK" },
        { label: "Runtime", value: ".NET 8.5 CLR" },
        { label: "Min Version", value: "Windows 11 (22H2)" }
      ],
      img: "/platforms/windows_white_modern_banner.webp",
      accentColor: "#6366f1",
      glowColor: "rgba(99,102,241,0.12)"
    }
  ];

  const activePlatform = platforms[activeIndex];

  return (
    <div className="w-full max-w-6xl 2xl:max-w-7xl relative rounded-xl overflow-hidden mx-auto bg-white shadow-sm border border-slate-100/60 flex flex-col lg:block lg:aspect-[2.3/1] group p-5 lg:p-0">
      {/* Background platform image (positioned on the right/bottom dynamically) */}
      <img
        src={activePlatform.img}
        alt={activePlatform.name}
        className="w-full lg:absolute lg:inset-0 lg:w-full lg:h-full object-cover rounded-2xl lg:rounded-none select-none pointer-events-none order-2 lg:order-none aspect-[1.8/1] lg:aspect-auto mt-6 lg:mt-0"
      />

      {/* Frosted Glass left-side overlay console (stacked on mobile, absolute overlay on desktop) */}
      <div className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-[47%] lg:bg-white/45 lg:backdrop-blur-md lg:border-r lg:border-white/20 z-10 flex flex-col justify-center lg:pl-8 lg:pr-6 py-2 lg:py-6 space-y-4 order-1 lg:order-none">

        {/* Integrated Miniature Navigation Switcher Dock */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/10 backdrop-blur-xs rounded-2xl w-fit border border-white/40">
          {platforms.map((platform, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-355 outline-none cursor-pointer border ${isActive
                  ? "bg-white text-slate-900 border-white/80 shadow-sm scale-[1.05]"
                  : "bg-transparent text-slate-550 border-transparent hover:bg-white/25 hover:text-slate-800"
                  }`}
                title={platform.name}
              >
                <div style={{ color: isActive ? platform.accentColor : "inherit" }}>
                  {platform.logo}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Details Header */}
        <div className="space-y-1 pt-1">
          <span className="text-[8.5px] sm:text-[9px] font-mono font-bold text-slate-450 uppercase tracking-widest block leading-none">
            {activePlatform.tag}
          </span>
          <h3 className="text-base sm:text-lg lg:text-xl font-black uppercase tracking-tight text-[#1e1b4b] pt-0.5 leading-none">
            {activePlatform.name}
          </h3>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-light text-justify border-t border-slate-200/50 pt-3">
          {activePlatform.desc}
        </p>

        {/* Core Architectural Capabilities List */}
        <div className="space-y-1.5 border-t border-slate-200/50 pt-3">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Key Capabilities:</span>
          <ul className="space-y-1">
            {activePlatform.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-600 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Elevated coding technology stack pills */}
        <div className="space-y-1.5 border-t border-slate-200/50 pt-3">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Development Stack:</span>
          <div className="flex flex-wrap gap-1.5">
            {activePlatform.techs.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-white border border-slate-200/80 shadow-md hover:scale-[1.05] hover:shadow-lg transition-all duration-300"
              >
                <div className="shrink-0 flex items-center justify-center">
                  {tech.logo}
                </div>
                <span className="text-[8px] sm:text-[9px] font-black text-slate-750 font-sans tracking-wide leading-none">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
