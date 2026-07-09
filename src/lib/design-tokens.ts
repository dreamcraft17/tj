/**
 * Trusted Jurist design tokens — mirror of `design/01-tailwind.config.js`
 * and CSS variables in `src/styles/globals.css`.
 */
export const designTokens = {
  colors: {
    navy: {
      900: "#17130f",
      700: "#241b18",
      500: "#4b3430",
      300: "#8a7269",
    },
    gold: {
      900: "#7a4e13",
      500: "#a87925",
      300: "#d0aa62",
    },
    cream: {
      100: "#fffaf1",
      500: "#f8f3ea",
      700: "#e9ddcb",
    },
    gray: {
      light: "#f1e8da",
      border: "#d8c7ad",
      text: "#75685e",
      dark: "#3a302b",
    },
    semantic: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#3b82f6",
    },
  },
  fonts: {
    serif: "Cormorant Garamond",
    sans: "Manrope",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "80px",
  },
  radius: {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  shadow: {
    subtle: "0 1px 3px rgba(0, 0, 0, 0.1)",
    medium: "0 10px 15px rgba(0, 0, 0, 0.1)",
    large: "0 20px 25px rgba(0, 0, 0, 0.15)",
  },
} as const;
