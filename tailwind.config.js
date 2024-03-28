/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        DMSerif: "DMSerifDisplay",
      },
      colors: {
        darkGray: "#0B0B0B",
        dimgray: "#141414",
        gray: "#1F1F1F",
        secondary: "#261E19",
        primary: "#FFA86C",
      },
    },
  },
  plugins: [],
};
