"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE_PREMIUM, VIEWPORT_DEFAULT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.08,
}: AnimatedRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...VIEWPORT_DEFAULT, once, amount }}
      transition={{
        duration: DURATION.reveal,
        delay,
        ease: EASE_PREMIUM,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
