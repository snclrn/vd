/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        ds: ["Dancing Script", "serif"],
        inter: ["Inter ", "sans-serif"],
      },
    },
  },
  plugins: [],
};
