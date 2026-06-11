import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/ui/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pi-Lot | Mühendislik & Danışmanlık",
    template: "%s | Pi-Lot",
  },
  description:
    "Pi-Lot Mühendislik & Danışmanlık — Üretim hattı optimizasyonu, kaynak teknolojileri, operasyonel yönetim ve maliyet analizi konularında uzman mühendislik danışmanlığı. İstanbul, Türkiye.",
  keywords: [
    "mühendislik danışmanlık",
    "üretim optimizasyonu",
    "kaynak teknolojileri",
    "operasyonel yönetim",
    "maliyet analizi",
    "Pi-Lot",
    "İstanbul",
    "Türkiye",
    "atıl kapasite",
    "ISO standartları",
    "üretim hattı",
  ],
  authors: [{ name: "Pi-Lot Mühendislik & Danışmanlık" }],
  creator: "Pi-Lot Mühendislik & Danışmanlık",
  publisher: "Pi-Lot Mühendislik & Danışmanlık",
  metadataBase: new URL("https://pi-lot.com.tr"),
  alternates: {
    canonical: "/",
    languages: { "tr-TR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://pi-lot.com.tr",
    siteName: "Pi-Lot Mühendislik & Danışmanlık",
    title: "Pi-Lot | Premium Mühendislik & Danışmanlık",
    description:
      "Sonsuz mühendislik vizyonunu, izlenebilir üretim kalitesiyle buluşturuyoruz.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pi-Lot Mühendislik & Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pi-Lot | Premium Mühendislik & Danışmanlık",
    description:
      "Sonsuz mühendislik vizyonunu, izlenebilir üretim kalitesiyle buluşturuyoruz.",
    images: ["/og-image.png"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pi-lot.com.tr/#organization",
      name: "Pi-Lot Mühendislik & Danışmanlık",
      url: "https://pi-lot.com.tr",
      telephone: "+905307456800",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://pi-lot.com.tr/#service",
      name: "Pi-Lot Mühendislik & Danışmanlık",
      url: "https://pi-lot.com.tr",
      telephone: "+905307456800",
      description:
        "Üretim hattı optimizasyonu, kaynak teknolojileri ve operasyonel yönetim danışmanlığı",
      serviceType: "Mühendislik Danışmanlığı",
      areaServed: { "@type": "Country", name: "Türkiye" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://pi-lot.com.tr/#localbusiness",
      name: "Pi-Lot Mühendislik & Danışmanlık",
      telephone: "+905307456800",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
      url: "https://pi-lot.com.tr",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#1a2634" />
      </head>
      <body className="antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
