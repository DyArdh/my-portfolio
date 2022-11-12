/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#A718C7",
        "text-primary": "#1e3851",
        "text-secondary": "#6b7280",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
