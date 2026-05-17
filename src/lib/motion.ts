import type { Transition, Variants } from "framer-motion";

export const EASE_PREMIUM = [0.25, 0.1, 0.25, 1] as const;

export const DURATION = {
  instant: 0.15,
  fast: 0.35,
  base: 0.55,
  slow: 0.85,
  reveal: 0.9,
  page: 0.6,
} as const;

export const STAGGER = {
  tight: 0.05,
  base: 0.07,
  relaxed: 0.1,
} as const;

export const VIEWPORT_DEFAULT = {
  once: true,
  margin: "-40px" as const,
};

export const transitionPremium: Transition = {
  duration: DURATION.base,
  ease: EASE_PREMIUM,
};

export const transitionReveal: Transition = {
  duration: DURATION.reveal,
  ease: EASE_PREMIUM,
};

export const revealUpVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionReveal,
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const pageEnterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.page, ease: EASE_PREMIUM },
  },
};

export function staggerContainer(stagger: number = STAGGER.base): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: 0.04 },
    },
  };
}

export const cnTransition = {
  premium: "transition-opacity duration-700 ease-out",
  colors: "transition-colors duration-300 ease-out",
} as const;

export const cnInteractive = {
  card: cnTransition.colors,
  link: `${cnTransition.colors} hover:text-gold`,
  button: "transition-colors duration-300 ease-out",
} as const;
