import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Web Development Services in Hyderabad | DigitalRaiz",
  description: "DigitalRaiz is the best web design agency in Hyderabad. We create stunning, useful websites that produce outcomes. Let's talk about your project.",
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
