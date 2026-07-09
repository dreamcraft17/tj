import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ContentSection({
  title,
  subtitle,
  children,
  backgroundColor = "white",
  className,
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundColor?: "cream" | "white" | "paper" | "navy";
  className?: string;
}) {
  const bg = {
    cream: "bg-cream-500",
    white: "bg-white",
    paper: "tone-paper",
    navy: "tone-navy",
  }[backgroundColor];
  const dark = backgroundColor === "navy";

  return (
    <section className={cn("py-16 md:py-20 lg:py-24", bg, className)}>
      <Container>
        {title ? (
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <h2 className={cn("font-serif text-4xl font-semibold md:text-5xl", dark ? "text-cream" : "text-navy-700")}>{title}</h2>
            {subtitle ? <p className={cn("mt-4 text-lg leading-8", dark ? "text-cream/75" : "text-gray-text")}>{subtitle}</p> : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

export function TwoColumnSection({
  imagePosition = "left",
  image,
  imageAlt = "Section image",
  children,
  title,
  subtitle,
  content,
  cta,
  backgroundColor = "cream",
}: {
  imagePosition?: "left" | "right";
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
  content: string | React.ReactNode;
  cta?: { text: string; href: string };
  backgroundColor?: "cream" | "white" | "paper";
}) {
  return (
    <ContentSection backgroundColor={backgroundColor}>
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div className={cn(imagePosition === "right" && "md:order-last")}>
          {children ?? (image ? (
            <div className="aspect-[4/3] rounded-md bg-cover bg-center shadow-subtle" style={{ backgroundImage: `url(${image})` }} role="img" aria-label={imageAlt} />
          ) : (
            <div className="aspect-[4/3] rounded-md border border-gray-border bg-cream-700" aria-hidden />
          ))}
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold text-navy-700 md:text-5xl">{title}</h2>
          {subtitle ? <p className="mt-4 text-lg leading-8 text-gray-text">{subtitle}</p> : null}
          <div className="mt-6 space-y-4 text-base leading-8 text-gray-text">
            {typeof content === "string" ? <p>{content}</p> : content}
          </div>
          {cta ? (
            <ButtonLink href={cta.href} className="mt-8">
              {cta.text}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </ContentSection>
  );
}

export function GridSection({
  title,
  subtitle,
  children,
  columns = 3,
  backgroundColor = "white",
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  backgroundColor?: "cream" | "white" | "paper" | "navy";
}) {
  const cols = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <ContentSection title={title} subtitle={subtitle} backgroundColor={backgroundColor}>
      <div className={cn("grid gap-6 md:gap-8", cols)}>{children}</div>
    </ContentSection>
  );
}

export function Breadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-xs text-gray-text" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index > 0 ? <span className="text-gray-border">/</span> : null}
          {item.href ? (
            <Link href={item.href} className="text-navy-700 transition-colors hover:text-gold-500">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-navy-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
