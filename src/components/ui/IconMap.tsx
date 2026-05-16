import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  FileSearch,
  Gavel,
  Handshake,
  Landmark,
  Mountain,
  Package,
  Scale,
  ScrollText,
  Shield,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Scale,
  Gavel,
  Award,
  Landmark,
  ShieldCheck,
  Building2,
  Mountain,
  FileSearch,
  ScrollText,
  Package,
  BookOpen,
  Briefcase,
  Target,
  Handshake,
};

type DynamicIconProps = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export function DynamicIcon({
  name,
  className,
  strokeWidth = 1.5,
}: DynamicIconProps) {
  const Icon = iconMap[name] ?? Shield;
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />;
}
