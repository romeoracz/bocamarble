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
    "granite countertops boca raton",
    "quartz countertops boca raton",
    "countertop installation boca raton",
    "quartzite countertops boca raton",
    "kitchen countertops boca raton",
    "bathroom countertops boca raton",
    "marble fabrication south florida",
    "stone countertops palm beach county",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
      "apple-mobile-web-app-title": SITE.name,
    },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#c9a96e" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Boca Raton" />
        <meta name="geo.position" content={`${SITE.geo.lat};${SITE.geo.lng}`} />
        <meta name="ICBM" content={`${SITE.geo.lat}, ${SITE.geo.lng}`} />
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
