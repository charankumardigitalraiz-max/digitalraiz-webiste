import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services for Modern Enterprises | Digital Raiz",
  description:
    "Digital Raiz builds scalable cloud architecture and automated DevOps pipelines to help digital businesses achieve continuous evolution and reliable performance.",
  keywords: [
    "Cloud & DevOps Services",
    "Cloud Architecture Migration",
    "CI/CD Release Pipelines",
    "Kubernetes Containerization",
    "Terraform Infrastructure as Code",
    "Digital Raiz Cloud Services"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/cloud-and-devops"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Cloud & DevOps Services for Modern Enterprises | Digital Raiz",
    description:
      "Digital Raiz builds scalable cloud architecture and automated DevOps pipelines to help digital businesses achieve continuous evolution and reliable performance.",
    url: "https://digitalraiz.com/cloud-and-devops",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function CloudDevOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
