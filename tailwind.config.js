/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}",
            "./src/**/*.{js,jsx,ts,tsx}",
            "./src/***/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        "headings": "#1D1D1D",
        "body": "#444445",
        "primary": "#00ADE9",
        "primary-dark": "#102558",
        "primary-light": "#E0F7FF",
        "footer-text": "#8892AC",
        "amber": "#FFC100",
        "green": "#00C98B",
        "light-gray": "#f1f1f1"
      }
    },
  },
  plugins: [],
}
