/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "300px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
