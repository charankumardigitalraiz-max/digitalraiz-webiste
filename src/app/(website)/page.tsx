"use client";

import Header from "@/components/Header";
import Hero from "@/components/website/home/Hero";
import Services from "@/components/website/home/Services";
import GrowthSection from "@/components/website/home/GrowthSection";
import CapabilitiesSection from "@/components/website/home/CapabilitiesSection";
import SolutionsSection from "@/components/website/home/SolutionsSection";
import BlogSection from "@/components/website/home/BlogSection";
import Contact from "@/components/website/home/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans overflow-x-hidden lg:pr-[80px]">
      {/* Navigation Header */}
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Digital Raiz Creative Solutions",
            "url": "https://www.digitalraiz.co.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.digitalraiz.co.in/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "About Us",
                "item": "https://digitalraiz.co.in/about-us",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Our Portfolio",
                "item": "https://digitalraiz.co.in/portfolio",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Services",
                "item": "https://www.digitalraiz.co.in/services",
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Mobile App Development Services",
                "item": "https://digitalraiz.co.in/mobile-app-development-company-in-hyderabad",
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Website Development Services",
                "item": "https://digitalraiz.co.in/website-development-company-in-hyderabad",
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "AI & ML Generative AI Services",
                "item": "https://digitalraiz.co.in/ai-ml-generative-ai-services",
              },
              {
                "@type": "ListItem",
                "position": 7,
                "name": "Data Analytics & Business Intelligence Services",
                "item": "https://digitalraiz.co.in/data-analytics-business-intelligence",
              },
              {
                "@type": "ListItem",
                "position": 8,
                "name": "Cybersecurity Services",
                "item": "https://digitalraiz.co.in/cybersecurity-services",
              },
              {
                "@type": "ListItem",
                "position": 9,
                "name": "SAP Cloud Services",
                "item": "https://digitalraiz.co.in/sap-cloud-services",
              },
              {
                "@type": "ListItem",
                "position": 10,
                "name": "Salesforce Services",
                "item": "https://digitalraiz.co.in/salesforce-services",
              },
              {
                "@type": "ListItem",
                "position": 11,
                "name": "Cloud & DevOps Services",
                "item": "https://digitalraiz.co.in/cloud-devops-services",
              },
              {
                "@type": "ListItem",
                "position": 12,
                "name": "Software Testing & Quality Assurance",
                "item": "https://digitalraiz.co.in/software-testing-quality-assurance",
              },
              {
                "@type": "ListItem",
                "position": 13,
                "name": "Contact Us",
                "item": "https://digitalraiz.co.in/contact",
              },
              {
                "@type": "ListItem",
                "position": 14,
                "name": "Blogs",
                "item": "https://www.digitalraiz.co.in/insights/blog",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What software development services does Digital Raiz offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital Raiz offers Website Development, Mobile App Development, Custom Software Development, AI Solutions, Salesforce Services, SAP Cloud Services, Cloud & DevOps, Cybersecurity, Data Analytics, and Software Testing services.",
                },
              },
              {
                "@type": "Question",
                "name": "How much does it cost to develop a website or mobile app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost depends on the project's features, design, functionality, and complexity. We provide customized solutions based on your business requirements and budget.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you develop both Android and iOS mobile applications?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we develop Android, iOS, and cross-platform mobile applications that are secure, scalable, and user-friendly.",
                },
              },
              {
                "@type": "Question",
                "name": "Can Digital Raiz build custom software solutions for businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we develop custom software solutions tailored to business processes, helping organizations improve efficiency, productivity, and growth.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you provide cloud, cybersecurity, and AI solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer Cloud & DevOps Services, Cybersecurity Solutions, AI & Generative AI Services, Data Analytics, and Business Intelligence solutions for modern businesses.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you provide maintenance and support after project completion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide ongoing maintenance, technical support, performance monitoring, security updates, and feature enhancements for websites, applications, and software solutions.",
                },
              },
            ],
          }),
        }}
      />

      {/* Main Content Layout with Content PDF integration */}
      <main>
        {/* Hero Section (Contains H1 tag & intro copy) */}
        <ScrollReveal direction="up">
          <Hero />
        </ScrollReveal>

        {/* Interactive Services / Solutions Section */}
        <ScrollReveal direction="up">
          <Services />
        </ScrollReveal>

        {/* Capabilities Section (Contains H5 & H6 capability matrices) */}
        <ScrollReveal direction="up">
          <CapabilitiesSection />
        </ScrollReveal>

        {/* Growth Section (Contains H2, H3, H4 content) */}
        <ScrollReveal direction="up">
          <GrowthSection />
        </ScrollReveal>

        {/* Solutions Section (Contains H7, H8, H9 partner details) */}
        <ScrollReveal direction="up">
          <SolutionsSection />
        </ScrollReveal>

        {/* Dynamic Studio Blog & Thought Leadership Section */}
        {/* <ScrollReveal direction="up">
          <BlogSection />
        </ScrollReveal> */}

        {/* Interactive Inquiry Form */}
        {/* <Contact /> */}
      </main>

      {/* Branding Footer details */}
      <Footer />
    </div>
  );
}


