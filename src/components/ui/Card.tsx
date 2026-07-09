import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
};

export function Card({ children, className, hoverable }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-gray-border bg-white p-6 shadow-subtle",
        hoverable && "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-medium",
        className,
      )}
    >
      {children}
    </div>
  );
}

