import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { createMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { CONTACT_CONFIG } from "@/lib/data";
import { RecaptchaScript } from "@/components/RecaptchaScript";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  email: CONTACT_CONFIG.email,
  telephone: CONTACT_CONFIG.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_CONFIG.address.line1,
    addressLocality: CONTACT_CONFIG.address.line2,
    addressCountry: CONTACT_CONFIG.address.country,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-foreground">
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

        <header className="fixed inset-x-0 top-0 z-50">
          <Navbar />
        </header>

        <main id="main-content" className="flex-1 pt-[5.25rem]">
          {children}
        </main>

        <Footer />
        <RecaptchaScript />
      </body>
    </html>
  );
}
