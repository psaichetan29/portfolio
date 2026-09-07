import type { Metadata } from "next";
import { Bricolage_Grotesque, Wix_Madefor_Text, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
});

const body = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Chetan Sai — Business Operations & Automation",
  description:
    "Business operations, sales operations and automation. I started in frontline sales, grew into process improvement and analytics, and build the systems behind the work. Looking for my next full-time role at a startup or growing company.",
  keywords: [
    "business operations",
    "sales operations",
    "revenue operations",
    "RevOps",
    "strategy and operations",
    "product operations",
    "growth operations",
    "operations analyst",
    "workflow automation",
    "AI-assisted operations",
    "startup operations",
  ],
  openGraph: {
    title: "Chetan Sai — Business Operations & Automation",
    description:
      "I turn messy business problems into systems that actually run. Real problems, real systems — from inside a fast-scaling rental startup.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
