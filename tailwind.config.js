/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ralewayFont': ['"Raleway"', 'sans-serif'],
        'latoFont': ['"Lato"', 'sans-serif']
      }
    },
  },
  plugins: [],
}