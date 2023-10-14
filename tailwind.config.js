/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow': '0 0 10px rgba(11, 216, 28, 1)'
      },
      colors: {
        'azulNav': '#EDF8F8',
        'azulClaro': '#93CED6',
        'turqueza': '#41A6BA',
        'azul': '#68DAD8',
        'morado':'8893C2'

      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px);' },
          '50%': { transform: 'translateY(1rem);' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1);opacity:1;' },
          '50%': { transform: 'scale(1.2);opacity:1;' },
          '100%': { transform: 'scale(1);opacity:1;' },
        }
      },
      animation: {
        floating: 'floating 5s ease-in-out infinite',//ease-in-out
        heartBeat: 'heartBeat 3s infinite'
      },
    },
    fontFamily: {
      'roboto': 'Roboto, sans-serif'
    }
  },
  plugins: [],


}

