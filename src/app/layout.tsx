import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { createMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  path: "/",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  areaServed: "Jakarta, Indonesia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sunter",
    addressRegion: "Jakarta Timur",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main-content" className="pt-[4.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
