import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Boca Marble | #1 Marble & Countertop Fabrication in Boca Raton, FL",
    template: "%s | Boca Marble",
  },
  description: SITE.description,
  keywords: [
    "marble countertops boca raton",
    "countertop fabrication boca raton",
    "countertop installation boca raton",
    "granite countertops boca raton",
    "quartz countertops boca raton",
    "quartzite countertops boca raton",
    "kitchen countertops boca raton",
    "bathroom countertops boca raton",
    "marble fabrication south florida",
    "stone countertops palm beach county",
    "countertop company boca raton",
    "marble installer boca raton",
    "custom countertops boca raton",
    "luxury countertops boca raton",
    "countertop fabricator near me",
    "countertop replacement boca raton",
    "outdoor kitchen countertops boca raton",
    "commercial countertops boca raton",
    "marble countertops delray beach",
    "countertop installation south florida",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Home Improvement",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Boca Marble | #1 Marble & Countertop Fabrication in Boca Raton, FL",
    description: SITE.description,
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Boca Marble - Premium Countertop Fabrication in Boca Raton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boca Marble | Marble & Countertop Fabrication Boca Raton",
    description: SITE.description,
    images: ["/images/hero-bg.jpg"],
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
  alternates: {
    canonical: SITE.url,
    languages: {
      "en-US": SITE.url,
      "es-US": `${SITE.url}/es`,
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <SchemaMarkup />

        {/* Resource Hints */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicons & PWA */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#c9a96e" />
        <meta name="apple-mobile-web-app-title" content={SITE.name} />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Boca Raton, Florida" />
        <meta name="geo.position" content={`${SITE.geo.lat};${SITE.geo.lng}`} />
        <meta name="ICBM" content={`${SITE.geo.lat}, ${SITE.geo.lng}`} />
        <meta name="DC.title" content={SITE.name} />
        <meta name="DC.creator" content={SITE.legalName} />
        <meta name="DC.subject" content="Marble Countertop Fabrication Installation" />
        <meta name="DC.description" content={SITE.description} />
        <meta name="DC.publisher" content={SITE.legalName} />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Boca Raton, FL, USA" />

        {/* Content Language */}
        <meta httpEquiv="content-language" content="en-US" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
