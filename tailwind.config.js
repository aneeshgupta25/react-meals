/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ralewayFont': ['"Raleway"', 'sans-serif'],
        'latoFont': ['"Lato"', 'sans-serif']
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(20rem, 1fr))'
      }
    },
  },
  plugins: [],
}