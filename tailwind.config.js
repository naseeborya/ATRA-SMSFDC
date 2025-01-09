const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/[locale]/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#01488A", // Primary blue
          secondary: "#CE9732", // Yellow
          gray: "#F3F4F8", // Dark grey
          light: "#D2D4DB", // Light grey
          bg: "#F1F5F9",
        },
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
