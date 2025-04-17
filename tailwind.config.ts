import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        aileron: ["AileronBlack", "sans-serif"],
      },
      animation: {
        // Right to left animations (default direction)
        'marquee-rtl': 'marquee-rtl 45s linear infinite',
        'marquee2-rtl': 'marquee2-rtl 45s linear infinite',
        // Left to right animations (reverse direction)
        'marquee-ltr': 'marquee-ltr 50s linear infinite',
        'marquee2-ltr': 'marquee2-ltr 50s linear infinite',
      },
      keyframes: {
        // Right to left keyframes
        'marquee-rtl': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee2-rtl': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        // Left to right keyframes (opposite direction)
        'marquee-ltr': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee2-ltr': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
