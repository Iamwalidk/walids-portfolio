// Updated global SEO metadata to include Walid's real profile/contact references.
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
  keywords: ["Walid Kaddouri", "ML Engineer", "AI Engineer", "Data Engineer", "Python", "Computer Vision"],
  alternates: {
    canonical: "/overview",
  },
  openGraph: {
    title: siteConfig.siteTitle,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: "Walid Kaddouri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.description,
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}>
        <Providers>
          <SidebarLayout>{children}</SidebarLayout>
        </Providers>
      </body>
    </html>
  );
}
