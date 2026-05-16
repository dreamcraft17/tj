import type { FounderCredibility as FounderCredibilityData } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
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
  { key: "practiceFocus", title: "Fokus Praktik" },
  { key: "professionalActivities", title: "Kegiatan Profesional" },
];

export function FounderCredibility({ data, className }: FounderCredibilityProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2",
        className,
      )}
    >
      {sections.map((section, index) => (
        <AnimatedReveal key={section.key} delay={index * 0.08}>
          <div className="h-full rounded-sm border border-border bg-cream p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {data[section.key].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span
                    className="mt-2 size-1 shrink-0 rounded-full bg-gold"
                    aria-hidden
                  />
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
