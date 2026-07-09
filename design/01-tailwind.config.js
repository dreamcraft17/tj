/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ===== COLORS =====
      colors: {
        // Primary (Charcoal Mahogany) - Legal authority, formality, restraint
        navy: {
          900: '#17130f',
          700: '#241b18', // default
          500: '#4b3430',
          300: '#8a7269',
        },
        // Accent (Brass) - Courtroom detail, prestige, emphasis
        gold: {
          900: '#7a4e13',
          500: '#a87925', // default
          300: '#d0aa62',
        },
        // Background (Parchment) - Formal, document-like, readable
        cream: {
          100: '#fffaf1',
          500: '#f8f3ea', // default
          700: '#e9ddcb',
        },
        // Neutrals
        gray: {
          light: '#f1e8da',
          border: '#d8c7ad',
          text: '#75685e',
          dark: '#3a302b',
        },
        // Semantic
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },

      // ===== TYPOGRAPHY =====
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'Segoe UI', 'sans-serif'],
      },

      // ===== FONT SIZES =====
      fontSize: {
        // Headings (Cormorant Garamond)
        'h1-md': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-lg': ['72px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-md': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h2-lg': ['56px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-md': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-lg': ['42px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4-md': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4-lg': ['28px', { lineHeight: '1.4', fontWeight: '600' }],

        // Body (Manrope)
        'lead': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '1.4', fontWeight: '600' }],
        'caption': ['11px', { lineHeight: '1.5', fontWeight: '400' }],
      },

      // ===== SPACING =====
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
      },

      // ===== SHADOWS =====
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'medium': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'large': '0 20px 25px rgba(0, 0, 0, 0.15)',
      },

      // ===== BORDER RADIUS =====
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
      },

      // ===== TRANSITIONS =====
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },

      // ===== CONTAINER =====
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '24px',
          lg: '40px',
        },
        screens: {
          'xs': '320px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1440px', // max-width
        },
      },
    },
  },

  plugins: [],
};
