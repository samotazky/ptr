/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');
module.exports = konstaConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  konsta: {
    colors: {
      // "primary" is the main app color, if not specified will be default to '#007aff'
      primary: '#007aff',
      // custom colors used for Konsta UI components theming
      'brand-light': '#F2E9D4',
      'brand-green': '#00ff00',
    }
  },
  theme: {
    extend: { colors: {
      darkBrown: "#3A2F2A",
      orange: "#E25926",
      light: "#F2E9D4",
    },
    borderRadius: {
      "10px": "10px",
    },
    fontSize: {
      "14px": "14px",
    },
    margin: {
      "14px": "14px",
    },
    fontFamily: {
      labrada: [ 'Labrada', 'serif']
    },},
  },
  plugins: [],
});