import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/types";
import { DynamicIcon } from "@/components/ui/IconMap";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { cn } from "@/lib/utils";

type PracticeAreaCardProps = {
  area: PracticeArea;
  index?: number;
  showLink?: boolean;
  detailed?: boolean;
};

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}

export function PracticeAreaCard({
  area,
  index = 0,
  showLink = true,
  detailed = false,
}: PracticeAreaCardProps) {
  return (
    <AnimatedReveal delay={index * 0.06}>
      <article
        className={cn(
          "group relative flex h-full flex-col rounded-sm border border-border bg-cream transition-all duration-300",
          detailed ? "p-8" : "p-6",
          "hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5",
        )}
      >
        <div className="mb-4 inline-flex size-11 items-center justify-center rounded-sm bg-navy/5 text-gold transition-colors group-hover:bg-gold/10">
          <DynamicIcon name={area.icon} className="size-5" />
        </div>

        <h3
          className={cn(
            "font-serif font-semibold text-navy",
            detailed ? "text-2xl" : "text-xl",
          )}
        >
          {area.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {area.description}
        </p>

        {detailed && (
          <div className="mt-6 space-y-5 border-t border-border pt-6">
            <DetailBlock label="Ruang Lingkup Layanan" text={area.scope} />
            <DetailBlock label="Kebutuhan Klien yang Sesuai" text={area.clientNeeds} />
            <DetailBlock label="Output Hukum yang Diharapkan" text={area.legalOutput} />
          </div>
        )}

        {showLink && (
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            Jadwalkan konsultasi bidang ini
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
      </article>
    </AnimatedReveal>
  );
}
