import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services for Modern Enterprises | Digital Raiz",
  description:
    "Digital Raiz provides Cloud and DevOps services focused on cloud architecture, automation, continuous delivery, scalability and reliable digital infrastructure.",
  keywords: [
    "Cloud & DevOps Services",
    "Cloud Architecture Migration",
    "CI/CD Release Pipelines",
    "Kubernetes Containerization",
    "Terraform Infrastructure as Code",
    "Digital Raiz Cloud Services"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/cloud-devops-services"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Cloud & DevOps Services for Modern Enterprises | Digital Raiz",
    description:
      "Digital Raiz provides Cloud and DevOps services focused on cloud architecture, automation, continuous delivery, scalability and reliable digital infrastructure.",
    url: "https://digitalraiz.com/cloud-devops-services",
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
