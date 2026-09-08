import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Learning Solutions & Data Models | Digital Raiz",
  description:
    "Digital Raiz engineers custom Machine Learning (ML) pipelines, predictive models, classification neural networks, regression algorithms, and deep data analytics.",
  keywords: [
    "Machine Learning Solutions",
    "ML Data Models",
    "Predictive Analytics Models",
    "TensorFlow PyTorch Development",
    "Neural Network Architecture",
    "Digital Raiz Machine Learning"
  ],
  alternates: {
    canonical: "https://digitalraiz.com/machine-learning"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Machine Learning Solutions & Data Models | Digital Raiz",
    description:
      "Digital Raiz engineers custom Machine Learning (ML) pipelines, predictive models, classification neural networks, regression algorithms, and deep data analytics.",
    url: "https://digitalraiz.com/machine-learning",
    siteName: "Digital Raiz",
    locale: "en_US",
    type: "website"
  }
};

export default function MachineLearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
