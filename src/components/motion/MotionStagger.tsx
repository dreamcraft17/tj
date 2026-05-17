"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  STAGGER,
  VIEWPORT_DEFAULT,
  revealUpVariants,
  staggerContainer,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type MotionStaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
};

export function MotionStagger({
  children,
  className,
  stagger = STAGGER.base,
  once = true,
}: MotionStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT_DEFAULT, once }}
      variants={staggerContainer(stagger)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function MotionStaggerItem({ children, className }: MotionStaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div variants={revealUpVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
