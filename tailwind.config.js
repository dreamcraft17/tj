/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.1)",
        medium: "0 10px 15px rgba(0, 0, 0, 0.1)",
        large: "0 20px 25px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
