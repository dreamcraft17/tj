"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageEnterVariants } from "@/lib/motion";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageEnterVariants}
    >
      {children}
    </motion.div>
  );
}
