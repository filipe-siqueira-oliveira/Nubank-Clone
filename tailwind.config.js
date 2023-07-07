/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      nuBg: "#591e8c",
      nuText: "#7c5da4",
      nuGray: "#222222",
      nuIcons: "#e5e5e5",
    },
    extend: {},
  },
  plugins: [],
};
