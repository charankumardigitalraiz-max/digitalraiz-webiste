import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Learning Solutions & Data Models | DigitalRaiz",
  description: "Custom Machine Learning (ML) pipelines, predictive models, classification neural networks, regression algorithms, and deep data analytics.",
};

export default function MachineLearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
