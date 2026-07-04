import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { Providers } from "@/components/providers";
import { SidebarLayout } from "@/components/sidebar-layout";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.siteTitle,
    template: "%s | Walid Kaddouri",
  },
  icons: {
    icon: [{ url: siteConfig.logo, type: "image/png" }],
    shortcut: [siteConfig.logo],
    apple: [{ url: siteConfig.logo }],
  },
  description: siteConfig.description,
  authors: [{ name: "Walid Kaddouri" }],
  creator: "Walid Kaddouri",
  keywords: [
    "Walid Kaddouri",
    "ML Engineer",
    "AI Engineer",
    "Data Engineer",
    "Automation Engineer",
    "QA Automation Engineer",
    "Python",
    "FastAPI",
    "SQL",
    "Computer Vision",
  ],
  openGraph: {
    title: siteConfig.siteTitle,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: "Walid Kaddouri Portfolio",
    images: [{ url: siteConfig.logo, alt: "Walid Kaddouri logo" }],
  },
  twitter: {
    card: "summary",
    title: siteConfig.siteTitle,
    description: siteConfig.description,
    images: [siteConfig.logo],
  },
  other: {
    "contact:email": siteConfig.email,
    "profile:linkedin": siteConfig.linkedin,
    "profile:github": siteConfig.github,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Static Person schema for rich results; every value comes from siteConfig,
// never from user input.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.url,
  jobTitle: "ML/AI, Data & Automation Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warsaw",
    addressCountry: "PL",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vistula University",
  },
  sameAs: [siteConfig.github, siteConfig.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
          <SidebarLayout>{children}</SidebarLayout>
        </Providers>
      </body>
    </html>
  );
}
