/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        grey: "#16120F",
        white: "#FFFDFA",
        dark: "#C39EA0",
        light: "#E4B4BC",
        vivid: "#FA255E",
      },
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'VarelaRound': ['Varela Round', 'sans-serif'],
        'Questrial': ['Questrial', 'sans-serif'],
        'Noopla': ['Noopla Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
