import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import { PostHogProvider } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="theme-color" content="#0a0a0a" />
          <meta name="color-scheme" content="dark light" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content={siteConfig.name} />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteConfig.name,
                description: siteConfig.description,
                url: siteConfig.url,
                author: {
                  "@type": "Person",
                  name: siteConfig.author,
                  sameAs: [siteConfig.twitterUrl],
                },
                publisher: { "@type": "Person", name: siteConfig.author },
              }),
            }}
          />
        </head>
        <body
          className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
        >
          <PostHogProvider>{children}</PostHogProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
