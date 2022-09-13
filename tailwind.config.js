/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "white-100": "#FCFCFC",
      dark: "#111111",
      "dark-100": "#282828",
    },

    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1320px",
          "@screen 2xl": {
            maxWidth: "1140px",
          },
          "@screen xl": {
            maxWidth: "960px",
          },
          "@screen lg": {
            maxWidth: "720px",
          },
          "@screen md": {
            maxWidth: "540px",
          },
          "@screen sm": {
            maxWidth: "100%",
            padding: "0px 15px",
          },
          margin: "0 auto",
        },
      });
    },
  ],
};
