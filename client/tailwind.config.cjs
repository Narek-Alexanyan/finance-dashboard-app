/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "567px" },
      xs: { max: "420px" },
    },
    extend: {
      colors: {
        grey: {
          100: "#f0f0f3",
          200: "#e1e2e7",
          300: "#d1d3da",
          400: "#c2c5ce",
          500: "#b3b6c2",
          600: "#8f929b",
          700: "#6b6d74",
          800: "#48494e",
          900: "#242427",
        },
        primary: {
          // light green
          100: "#d0fcf4",
          200: "#a0f9e9",
          300: "#71f5de",
          400: "#41f2d3",
          500: "#12efc8",
          600: "#0ebfa0",
          700: "#0b8f78",
          800: "#076050",
          900: "#043028",
        },
        secondary: {
          // yellow
          100: "#fcf0dd",
          200: "#fae1bb",
          300: "#f7d299",
          400: "#f5c377",
          500: "#f2b455",
          600: "#c29044",
          700: "#916c33",
          800: "#614822",
          900: "#302411",
        },
        tertiary: {
          // purple
          500: "#8884d8",
        },
        background: {
          light: "#2d2d34",
          main: "#1f2026",
        },
      },
    },
  },
  plugins: [],
}
