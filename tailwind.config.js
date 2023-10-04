const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-light": "url('/images/bg-light.png')",
        "hero-pattern-dark": "url('/images/bg-dark.png')",
        "circles-pattern": "url('/images/circles-pattern.svg')",
      },
      lineHeight: {
        tighter: "1.15",
      },
      animation: {
        zoom: "zoom 7s infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        zoom: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(3px, -3px) scale(1.05)",
          },
          "66%": {
            transform: "translate(-3px, 3px) scale(0.96)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
    colors: {
      black: "#080A0B",
      white: "#FFFFFF",
      gold: "#D9B111",
      purple: "#8C46FF",
      green: "#9BC149",
      gray: "#CECECE",
      primary: "#1453F3",
      transparent: "transparent",
      current: "currentColor",
      "light-gray": "#FAFAFA",
      "meduim-gray": "#575757",
      "dark-gray": "#1B2028",
      "primary-100": "#ECF1FF",
      "primary-400": "#5585FF",
      "primary-600": "#0C44D2",
      "primary-900": "#000D2D",
      red: colors.red,
      twGreen: colors.green,
      twGray: colors.gray,
    },
    fontFamily: {
      display: ["var(--font-sora)", "ui-sans-serif", "sans-serif"],
      body: ["var(--font-inter)", "ui-sans-serif", "sans-serif"],
    },
    borderRadius: {
      tiny: "0.4rem",
      small: "0.6rem",
      meduim: "1rem",
      large: "1.5rem",
    },
    boxShadow: {
      meduim: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    },
    screens: {
      tablet: "768px",
      desktop: "1248px",
    },
    letterSpacing: {
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".5em",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
