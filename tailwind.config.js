/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        macondo: ['Macondo', 'cursive'],
        sulphur: ['Sulphur Point', 'sans-serif'],
      },
      colors: {
        red: {
          1000: '#641F27',
        },
      },
    },
  },
  plugins: [],
}
