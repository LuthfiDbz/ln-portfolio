/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#C12966',
      'secondary': '#37467F',
      'on-primary': '#D7F2FB',
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/image/background.png')",
      }
    },
  },
  plugins: [],
}