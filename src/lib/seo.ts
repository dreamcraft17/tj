import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
}: PageMeta): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`
      : `${title} | ${SITE_CONFIG.shortName}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
      languages: {
        id: url,
        en: `${url}?lang=en`,
      },
    },
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "firma hukum Jakarta",
      "advokat antikorupsi",
      "hukum pertambangan",
      "Trusted Jurist",
      "Dr. Andin Sofyanoor",
      "law firm Indonesia",
    ],
  };
}
