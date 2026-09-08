import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Company in Hyderabad | Digital Raiz",
  description:
    "Digital Raiz is a website development company in Hyderabad offering website design, web development, custom web applications, WordPress and e-commerce solutions.",
  keywords: [
    "website development company in hyderabad",
    "website development services in hyderabad",
    "website design company in hyderabad",
    "website design services in hyderabad",
    "web development company in hyderabad",
    "web development services in hyderabad",
    "web application development company in hyderabad",
    "web application development services in hyderabad",
    "custom website development company in hyderabad",
    "custom web development services in hyderabad",
    "wordpress website development company in hyderabad",
    "wordpress development services in hyderabad",
    "ecommerce website development company in hyderabad",
    "ecommerce website development services in hyderabad",
    "responsive web design company in hyderabad",
    "corporate website development company in hyderabad",
    "hire web developers in hyderabad",
    "website developers in hyderabad"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/website-development-company-in-hyderabad/"
  },
  openGraph: {
    title: "Website Development Company in Hyderabad | Digital Raiz",
    description:
      "Digital Raiz is a website development company in Hyderabad offering website design, web development, custom web applications, WordPress and e-commerce solutions.",
    url: "https://digitalraiz.com/website-development-company-in-hyderabad/",
    siteName: "Digital Raiz",
    type: "website"
  }
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
