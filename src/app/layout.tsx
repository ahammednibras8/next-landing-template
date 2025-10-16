import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Next Landing System – SEO-Optimized Next.js Landing Page Template",
  description:
    "High-performance, SEO-optimized landing page framework built with Next.js and Tailwind CSS. Includes analytics, CRM, and automation integrations for maximum conversions.",
  keywords: [
    "Next.js landing page",
    "SEO optimized template",
    "Next.js SaaS starter",
    "conversion optimized landing page",
    "Tailwind landing page",
    "open source landing page system",
  ],
  openGraph: {
    title: "Next Landing System – SEO-Optimized Next.js Landing Page Template",
    description:
      "Build high-converting, SEO-friendly landing pages in minutes with integrated analytics, CRM, and automation tools.",
    url: "https://yourdomain.com",
    siteName: "Next Landing System",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next Landing System – High-Converting Landing Page Template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Landing System – SEO-Optimized Next.js Landing Page Template",
    description:
      "Build and deploy high-converting, SEO-friendly landing pages with Next.js and Tailwind CSS.",
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@yourhandle",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
