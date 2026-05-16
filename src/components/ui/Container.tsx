import { cn } from "@/lib/utils";

type ContainerElement = "div" | "section" | "article" | "main";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: ContainerElement;
  size?: "default" | "narrow" | "wide";
};

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[90rem]",
};

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
