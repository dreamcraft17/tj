import { Hero } from "@/components/Hero";
import {
  HomeAboutSpread,
  HomeClosingComposition,
  HomeCredibilityChapter,
  HomeFounderChapter,
  HomeInsightsJournal,
  HomePracticeIndex,
  HomeStandardsCascade,
  HomeTrustColophon,
} from "@/components/home";
import { insights, practiceAreas } from "@/lib/data";

export default function HomePage() {
  const featuredAreas = practiceAreas.slice(0, 4);
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      <Hero
        legalPrinciple="Diagnosis sebelum eksekusi"
        headline="Hukum berpihak. Advokasi terukur."
        subheadline="Firma hukum di Jakarta Timur — litigasi, antikorupsi, hukum publik–korporasi, dan regulasi sektor."
        editorialNote="Beroperasi sejak 26 Juni 2025. Kantor di Sunter. Mandat pada isu yang membutuhkan analisis mendalam dan posisi tegas."
        primaryCta={{ label: "Konsultasi", href: "/contact" }}
        secondaryCta={{ label: "Bidang praktik", href: "/practice-areas" }}
      />

      <HomeTrustColophon />
      <HomeCredibilityChapter />
      <HomeAboutSpread />
      <HomePracticeIndex areas={featuredAreas} />
      <HomeFounderChapter />
      <HomeStandardsCascade />
      <HomeInsightsJournal articles={featuredInsights} />
      <HomeClosingComposition />
    </>
  );
}
