import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blueprint Studio — Luxury Real Estate Web Design",
  description:
    "Blueprint Studio designs luxury real estate websites for estate agents, property developers and high-end property brands. Bespoke, cinematic digital experiences built to convert.",
  keywords: [
    "luxury real estate web design",
    "estate agent website design",
    "property developer website",
    "luxury property branding",
    "real estate web design agency",
  ],
  openGraph: {
    title: "Blueprint Studio — Luxury Real Estate Web Design",
    description:
      "Bespoke, cinematic websites for estate agents, developers and luxury property brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
