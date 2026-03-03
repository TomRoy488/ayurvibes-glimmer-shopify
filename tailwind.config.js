/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f4f4f1",
        olive: "#2e4b39",
        lime: "#d8f281",
        ink: "#121212",
      },
      fontFamily: {
        sans: ["Avenir", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
