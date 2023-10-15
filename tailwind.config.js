/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      dropShadow: {
        'glow': '0 0 10px rgba(11, 216, 28, 1)'
      },
      colors: {
        'azulNav': '#EDF8F8',
        'azul': '#68D4D8',
        'turqueza': '#41A6BA',
        'azulClaro': '#93CED6',
        'morado':'#8893c2'

      },
    },
    fontFamily: {
      'roboto': 'Roboto, sans-serif'
    }
  },
  plugins: [],
}
