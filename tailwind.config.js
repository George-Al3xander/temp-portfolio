/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        responsive: "min(80rem, 90%)",
      },
      colors: {
        primary: "#151515",
        secondary: "#242424",
        accent: "#4CE19D",
      },
    },
  },
  plugins: [],
}
