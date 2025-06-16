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
        aileron: ['var(--font-aileron)',],
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        "fade-in-up" :{
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },       
        }
      },
      animation: {
        'marquee-rtl': 'marquee-rtl 45s linear infinite',
        'marquee2-rtl': 'marquee2-rtl 45s linear infinite',
        'marquee-ltr': 'marquee-ltr 50s linear infinite',
        'marquee2-ltr': 'marquee2-ltr 50s linear infinite',
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),],
} satisfies Config;
