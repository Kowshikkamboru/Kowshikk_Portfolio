import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amboru Koushik | Full Stack & Flutter Developer",
  description:
    "Amboru Koushik - Full Stack & Flutter Developer | IEEE Published Author | AI/ML Specialist | Patent Pending in AI Surveillance",
  keywords: [
    "Amboru Koushik",
    "Full Stack Developer",
    "Flutter Developer",
    "IEEE Published Author",
    "AI/ML",
    "Portfolio",
  ],
  authors: [{ name: "Amboru Koushik" }],
  openGraph: {
    title: "Amboru Koushik | Full Stack & Flutter Developer",
    description:
      "IEEE Published Author · AI/ML Specialist · Patent Pending in AI Surveillance",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
