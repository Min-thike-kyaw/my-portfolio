/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'primary': '#0a1324',
      'secondary' : '#0062ff',
      'third': '#FB923C'
      
    },
    extend: {},
  },
  plugins: [],
}