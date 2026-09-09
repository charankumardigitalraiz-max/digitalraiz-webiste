import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Testing & QA Services in Hyderabad | Digital Raiz",
  description:
    "Digital Raiz provides software testing and quality assurance (QA) services in Hyderabad, including test automation, manual QA, performance load testing, OWASP security audits, and API testing.",
  keywords: [
    "Software Testing Services in Hyderabad",
    "Quality Assurance QA Company in Hyderabad",
    "Automation Testing Services in Hyderabad",
    "Cypress Playwright Test Automation",
    "Selenium Appium Mobile Testing",
    "Performance Load Testing JMeter k6",
    "OWASP Security Audits Penetration Testing",
    "API Microservices Contract Testing",
    "Digital Raiz Software Testing"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/software-testing-quality-assurance"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Software Testing & Quality Assurance Services | Digital Raiz",
    description:
      "Digital Raiz provides software testing and quality assurance (QA) services in Hyderabad, including test automation, manual QA, performance load testing, OWASP security audits, and API testing.",
    url: "https://digitalraiz.com/software-testing-quality-assurance",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function TestingAndQALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
