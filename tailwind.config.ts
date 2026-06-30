import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ink: "#06080C",
        panel: "#0A0F1A",
        elevated: "#10182A",
        hairline: "rgba(243,239,230,0.09)",
        bone: "#F4F0E6",
        mist: "#8B91A3",
        gold: {
          DEFAULT: "#C9A769",
          bright: "#E9D49C",
          dim: "#8A7344",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 3s linear infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E9D49C 0%, #C9A769 50%, #8A7344 100%)",
        "fade-bottom": "linear-gradient(to bottom, transparent 0%, #06080C 100%)",
        "fade-top": "linear-gradient(to top, transparent 0%, #06080C 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
