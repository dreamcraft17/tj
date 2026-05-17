import type { FounderCredibility as FounderCredibilityData } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type FounderCredibilityProps = {
  data: FounderCredibilityData;
  className?: string;
};

const sections: {
  key: keyof FounderCredibilityData;
  title: string;
}[] = [
  { key: "education", title: "Pendidikan" },
  { key: "experience", title: "Pengalaman" },
  { key: "practiceFocus", title: "Fokus praktik" },
  { key: "professionalActivities", title: "Kegiatan profesional" },
];

export function FounderCredibility({ data, className }: FounderCredibilityProps) {
  return (
    <div className={cn("flow-editorial mt-12", className)}>
      {sections.map((section, index) => (
        <AnimatedReveal key={section.key} delay={index * 0.05}>
          <div>
            <h3 className={cn(t.eyebrow, "text-gold")}>{section.title}</h3>
            <ul className="mt-5 space-y-3">
              {data[section.key].map((item) => (
                <li key={item} className={cn(t.body, "text-muted")}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedReveal>
      ))}
    </div>
  );
}
