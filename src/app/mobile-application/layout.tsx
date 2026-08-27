import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Mobile App Development Services in Hyderabad | DigitalRaiz",
  description: "Hyderabad's leading mobile app development company. We build high-performance Android, iOS, Flutter, Native, and Hybrid mobile applications.",
};

export default function MobileApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
