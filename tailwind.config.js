/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
      colors: {
        'dark-bg-primary': '#08062D',
        'dark-bg-secondary': '#3E3768',
      },
      spacing: {
        '100': '100px', // Custom spacing for margins
        '40': '40px',   // Custom spacing for top margin
      },
    },
  },
  plugins: [],
}