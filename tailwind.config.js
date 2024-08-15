/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'primary': '#C12966',
        'secondary': '#37467F',
        'on-primary': '#D7F2FB',
        'white': '#ffffff',
        'black': '#000000',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/image/background.png')",
      }
    },
  },
  plugins: [],
}