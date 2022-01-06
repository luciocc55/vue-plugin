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
        primary: '#005192',
        accent: '#062C4A',
        error: '#C65028',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
