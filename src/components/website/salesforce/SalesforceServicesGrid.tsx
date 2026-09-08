"use client";

import React from "react";
import {
  Compass,
  Rocket,
  Code2,
  TrendingUp,
  Headphones,
  Megaphone,
  Users,
  DollarSign,
  Cpu,
  Database,
  LifeBuoy,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { openContactModal } from "@/components/ContactModal";

export default function SalesforceServicesGrid() {
  const services = [
    {
      id: "consulting",
      title: "Salesforce Consulting",
      subtitle: "Tailored Strategy & Product Selection",
      desc: "Our experts analyze your business processes and create a tailored Salesforce strategy that aligns with your goals. We help you choose the right Salesforce products and maximize your return on investment.",
      icon: Compass,
      badge: "Strategy & Advisory",
      features: [
        "Business process assessment & gap analysis",
        "Salesforce license & product selection advisory",
        "Custom roadmap for maximum ROI",
        "Digital transformation planning",
      ],
    },
    {
      id: "implementation",
      title: "Salesforce Implementation",
      subtitle: "Smooth End-to-End Deployment",
      desc: "From planning to deployment, we ensure a smooth and successful Salesforce implementation. Our team configures the platform according to your business requirements, enabling faster adoption and improved productivity.",
      icon: Rocket,
      badge: "End-to-End Setup",
      features: [
        "System configuration & architecture design",
        "Role-based access & security model setup",
        "Workflow & validation rule creation",
        "User onboarding & initial launch support",
      ],
    },
    {
      id: "customization",
      title: "Salesforce Customization & Development",
      subtitle: "Lightning Web Components (LWC) & Apex",
      desc: "Every business is unique. We build custom Salesforce applications, Lightning Web Components (LWC), Apex solutions, workflows, and automation tools that enhance functionality and improve efficiency.",
      icon: Code2,
      badge: "Custom LWC & Apex",
      features: [
        "Custom Lightning Web Components (LWC)",
        "Apex classes, triggers & batch processing",
        "Flow Builder & Process Builder automation",
        "Tailored custom objects & user interfaces",
      ],
    },
    {
      id: "sales-cloud",
      title: "Sales Cloud Solutions",
      subtitle: "Lead Management & Revenue Acceleration",
      desc: "Boost sales performance with intelligent lead management, opportunity tracking, forecasting, and sales automation. Empower your sales teams with real-time insights and data-driven decision-making.",
      icon: TrendingUp,
      badge: "Sales Performance",
      features: [
        "Automated lead assignment & scoring",
        "Pipeline management & sales forecasting",
        "Opportunity tracking & contract management",
        "Mobile Sales App configuration",
      ],
    },
    {
      id: "service-cloud",
      title: "Service Cloud Solutions",
      subtitle: "Omnichannel Support & Case Automation",
      desc: "Deliver exceptional customer support with case management, knowledge bases, omnichannel communication, and automated service processes that improve customer satisfaction.",
      icon: Headphones,
      badge: "Customer Support",
      features: [
        "Omnichannel case routing (Email, Phone, Chat)",
        "Knowledge Base & self-service portals",
        "SLA & entitlement management",
        "Service Console & CTI telephony sync",
      ],
    },
    {
      id: "marketing-cloud",
      title: "Marketing Cloud Solutions",
      subtitle: "Personalized Customer Journeys",
      desc: "Create personalized customer journeys, automate marketing campaigns, manage email marketing, and gain deeper customer insights to increase engagement and conversions.",
      icon: Megaphone,
      badge: "Automated Marketing",
      features: [
        "Journey Builder & campaign automation",
        "Email Studio & personalized templates",
        "Audience segmentation & AI insights",
        "Cross-channel engagement tracking",
      ],
    },
    {
      id: "experience-cloud",
      title: "Experience Cloud",
      subtitle: "Customer & Partner Portals",
      desc: "Build secure customer, partner, and employee portals that enhance collaboration and provide seamless digital experiences.",
      icon: Users,
      badge: "Digital Portals",
      features: [
        "Branded partner & vendor portals",
        "Self-service customer support communities",
        "Employee engagement intranets",
        "Role-based secure portal access",
      ],
    },
    {
      id: "revenue-cloud",
      title: "Revenue Cloud & CPQ",
      subtitle: "Quoting, Subscriptions & Billing",
      desc: "Streamline quoting, pricing, contract management, subscriptions, and billing processes to improve revenue operations and reduce manual effort.",
      icon: DollarSign,
      badge: "CPQ & Revenue Ops",
      features: [
        "Configure, Price, Quote (CPQ) automation",
        "Subscription & complex deal structures",
        "Automated contract generation & renewals",
        "Revenue recognition & ERP sync",
      ],
    },
    {
      id: "integration",
      title: "Salesforce Integration",
      subtitle: "ERP, Payment & API Middleware",
      desc: "Connect Salesforce with ERP systems, payment gateways, third-party applications, and business tools using secure API integrations for seamless data flow.",
      icon: Cpu,
      badge: "API & Middleware",
      features: [
        "REST & SOAP API enterprise integrations",
        "ERP sync (SAP, Oracle, NetSuite, QuickBooks)",
        "Payment gateway & e-commerce connectivity",
        "MuleSoft & custom middleware setup",
      ],
    },
    {
      id: "data-migration",
      title: "Data Migration & Management",
      subtitle: "Secure Extraction & Data Cleansing",
      desc: "Safely migrate data from legacy systems to Salesforce while ensuring accuracy, consistency, and security.",
      icon: Database,
      badge: "Legacy Migration",
      features: [
        "Legacy system data extraction & mapping",
        "Data deduplication & validation checks",
        "High-volume data loader automation",
        "Data governance & GDPR/HIPAA compliance",
      ],
    },
    {
      id: "support-maintenance",
      title: "Salesforce Support & Maintenance",
      subtitle: "24/7 Monitoring & System Enhancements",
      desc: "Our dedicated support team provides continuous monitoring, optimization, troubleshooting, and enhancements to keep your Salesforce environment running efficiently.",
      icon: LifeBuoy,
      badge: "24/7 SLA Support",
      features: [
        "24/7 continuous platform monitoring",
        "Seasonal release update evaluations",
        "User administration & privilege audits",
        "Bug fixes & performance optimization",
      ],
    },
  ];

  return (
    <section id="salesforce-services-grid" className="py-10 sm:py-10 bg-white relative">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 space-y-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-pink-500" />
              Tailored Salesforce Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Salesforce Services &amp; Enterprise CRM Solutions{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Engineered for Growth
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
              Every business has unique workflows, customer touchpoints, and operational goals. Our Salesforce services are tailored around your specific CRM architecture rather than forcing your operations into standard templates.
            </p>
          </div>
        </ScrollReveal>

        {/* 11 Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const indexStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
            return (
              <ScrollReveal key={svc.id} delay={(idx % 3) * 60} direction="up" className="h-full">
                <div
                  onClick={() => openContactModal("Salesforce Consulting", `Salesforce: ${svc.title}`)}
                  className="group relative bg-white border border-slate-200/80 hover:border-pink-300/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1.5 h-full flex flex-col justify-between space-y-5 cursor-pointer overflow-hidden"
                >
                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Subtle Ambient Background Glow on Hover */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-pink-400/10 via-violet-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    {/* Header: Icon Badge & Index Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-pink-50/80 border border-pink-100/80 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-violet-600 group-hover:border-transparent group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-md group-hover:shadow-pink-500/25 shrink-0">
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-pink-50/80 border border-pink-100/80 text-[9px] font-mono font-bold text-pink-600 uppercase tracking-wider group-hover:bg-pink-100/80 group-hover:border-pink-200 group-hover:text-pink-700 transition-all duration-300">
                          {svc.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-pink-500 transition-colors">
                          {indexStr}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors tracking-tight leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-slate-500">
                        {svc.subtitle}
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed pt-1">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Feature list */}
                    <div className="pt-2 space-y-1.5 border-t border-slate-100">
                      <p className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Highlights
                      </p>
                      <ul className="space-y-1 text-xs text-slate-700 font-medium">
                        {svc.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                            <span className="leading-snug text-slate-600 text-[11px]">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Action CTA */}
                  {/* <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-pink-600 transition-colors">
                      Request Capability
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 group-hover:bg-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div> */}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}