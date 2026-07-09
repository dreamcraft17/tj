import Link from "next/link";
import type { JobLevel } from "@/types";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function DesignPracticeAreaCard({
  icon,
  title,
  description,
  href,
  onConsult,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  onConsult?: () => void;
}) {
  return (
    <Card hoverable className="flex h-full flex-col">
      <div className="mb-4 flex size-16 items-center justify-center text-navy-700">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-semibold text-navy-700">{title}</h3>
      <p className="mt-3 flex-grow text-sm leading-7 text-gray-text">
        {description}
      </p>
      {onConsult ? (
        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={onConsult}
          className="mt-6 w-full"
        >
          Konsultasi
        </Button>
      ) : href ? (
        <ButtonLink href={href} variant="primary" size="sm" className="mt-6 w-full">
          Selengkapnya
        </ButtonLink>
      ) : null}
    </Card>
  );
}

export function TeamMemberCard({
  name,
  title,
  bio,
  image,
  href,
}: {
  name: string;
  title: string;
  bio: string;
  image?: string;
  href?: string;
}) {
  const body = (
    <Card className="flex h-full flex-col">
      {image ? (
        <div
          className="mb-4 aspect-square rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={name}
        />
      ) : (
        <div
          className="mb-4 grid aspect-square place-items-center rounded-sm bg-navy-700 text-4xl font-serif text-gold-300"
          aria-hidden
        >
          {name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")}
        </div>
      )}
      <h3 className="font-serif text-2xl font-semibold text-navy-700">{name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-text">
        {title}
      </p>
      <p className="mt-4 text-sm leading-7 text-gray-text">{bio}</p>
    </Card>
  );

  if (!href) return body;
  return (
    <Link href={href} className="block transition-opacity hover:opacity-95">
      {body}
    </Link>
  );
}

const levelVariant: Record<
  JobLevel,
  "primary" | "secondary" | "warning" | "error"
> = {
  Junior: "primary",
  Mid: "warning",
  Senior: "secondary",
  Lead: "error",
};

export function JobPostingCard({
  title,
  level,
  description,
  href = "/careers#apply",
  onApply,
}: {
  title: string;
  level: JobLevel;
  description: string;
  href?: string;
  onApply?: () => void;
}) {
  return (
    <Card hoverable className="flex h-full flex-col">
      <Badge label={level} variant={levelVariant[level]} className="w-fit" />
      <h3 className="mt-4 font-serif text-2xl font-semibold text-navy-700">
        {title}
      </h3>
      <p className="mt-3 line-clamp-3 flex-grow text-sm leading-7 text-gray-text">
        {description}
      </p>
      {onApply ? (
        <Button
          type="button"
          variant="primary"
          className="mt-6 w-full"
          onClick={onApply}
        >
          Lamar Sekarang
        </Button>
      ) : (
        <ButtonLink href={href} variant="primary" className="mt-6 w-full">
          Lamar Sekarang
        </ButtonLink>
      )}
    </Card>
  );
}
