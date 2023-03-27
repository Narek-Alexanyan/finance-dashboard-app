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
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
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
      boxShadow: {
        'dashboard-box-shadow': '0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)',
      },
      gridTemplateAreas: {
        'dashboard-layout': [
          "a b c",
          "a b c",
          "a b c",
          "a b f",
          "d e f",
          "d e f",
          "d h i",
          "g h i",
          "g h j",
          "g h j",
        ],
        'dashboard-layout-slim': [
          "a",
          "a",
          "a",
          "a",
          "b",
          "b",
          "b",
          "b",
          "c",
          "c",
          "c",
          "d",
          "d",
          "d",
          "e",
          "e",
          "f",
          "f",
          "f",
          "g",
          "g",
          "g",
          "h",
          "h",
          "h",
          "h",
          "i",
          "i",
          "j",
          "j",
        ],
      },
      gridTemplateColumns: {
        'dashboard-layout': 'repeat(3, minmax(370px, 1fr))'
      },
      gridTemplateRows: {
        'dashboard-layout': 'repeat(10, minmax(60px, 1fr))',
      },
      gridAutoRows: {
        'dashboard-layout-responsive': '80px'
      },
      gridAutoColumns: {
        'dashboard-layout-responsive': '1fr'
      }
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
  variants: {
    gridTemplateAreas: ['responsive']
  }
}
