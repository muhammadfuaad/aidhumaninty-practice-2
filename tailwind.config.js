const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}",
            "./src/**/*.{js,jsx,ts,tsx}",
            "./src/***/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      
      colors: {
        "black": "#1D1D1D",
        "body": "#444445",
        "primary": "#00ADE9",
        "primary-medium": "#006BA3",
        "primary-dark": "#102558",
        "primary-light": "#E0F7FF",
        "footer-text": "#8892AC",
        "amber": "#FFC100",
        "green": "#00C98B",
        "light-gray": "#f1f1f1",
        "red": "#FD4949",
        "purple": "#A349FD",
        "off-white": "#f1f1f1",
        "gray": "#7c7c7c",
        "platinum": "#e6e6e6",
        "spanish-gray": "#999999",
        "f9": "#f9f9f9"
        
      }
    },
  },
  variants: {
    borderColor: ["active"],
    extend: {}
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
  })
  ],
}
