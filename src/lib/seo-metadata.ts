import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Next.js landing page",
        "Next.js 15 template",
        "Tailwind CSS landing page",
        "Framer Motion animations",
        "SEO optimized website",
        "Next.js SaaS starter",
        "conversion optimized landing page",
        "open source landing page",
        "React landing page template",
        "modern web design",
        "responsive landing page",
        "Next.js template 2024",
        "TypeScript landing page",
        "startup landing page",
        "product landing page",
        "marketing website template",
        "Netlify Next.js deployment",
        "free Next.js template",
        "performance optimized website",
        "accessible web design",
    ],
    authors: [
        {
            name: siteConfig.author,
            url: siteConfig.twitterUrl,
        },
    ],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: siteConfig.url,
        languages: { "en-US": siteConfig.url },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} – Professional Next.js Landing Page Template`,
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: siteConfig.creator,
        creator: siteConfig.creator,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
    category: "technology",
    classification: "Business",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
            { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
        shortcut: "/favicon.ico",
    },
    manifest: "/manifest.json",
    referrer: "origin-when-cross-origin",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};