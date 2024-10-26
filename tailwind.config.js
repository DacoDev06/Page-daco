/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes:{
          'scroll':{
            '0%': {transform:'translateX(0)'},
            '100%': { transform: 'translateX(calc(-48px*12))' },

          }
        },
        animation: {
          'scroll': 'scroll 10s linear infinite',
        },
        colors: {
          'instagram-yellow': '#fdf497',
          'instagram-orange': '#fd5949',
          'instagram-pink': '#d6249f',
          'instagram-purple': '#285AEB',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
        },
      },
  },
  plugins: [],
}

