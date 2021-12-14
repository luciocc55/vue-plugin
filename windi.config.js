// windi.config.js
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  darkMode: "class", // or 'media' or 'class'
  important: true,
  theme: {
    screens: {
      sm: "640px",
      mobile: { min: "225px", max: "768px" },
      medium: { min: "768px", max: "1024px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "black-shade": {
          50: "#737373",
          100: "#666666",
          200: "#4D4D4D",
          300: "#333333",
          400: "#1A1A1A",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        primary: {
          50: "var(--primary-color-50)",
          100: "var(--primary-color-100)",
          200: "var(--primary-color-200)",
          300: "var(--primary-color-300)",
          400: "var(--primary-color-400)",
          500: "var(--primary-color-500)",
          600: "var(--primary-color-600)",
          700: "var(--primary-color-700)",
          800: "var(--primary-color-800)",
          900: "var(--primary-color-900)",
        },
        accent: {
          50: "var(--accent-color-50)",
          100: "var(--accent-color-100)",
          200: "var(--accent-color-200)",
          300: "var(--accent-color-300)",
          400: "var(--accent-color-400)",
          500: "var(--accent-color-500)",
          600: "var(--accent-color-600)",
          700: "var(--accent-color-700)",
          800: "var(--accent-color-800)",
          900: "var(--accent-color-900)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
