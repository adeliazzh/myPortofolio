module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '3.5': '14px', // Custom spacing for 14px
        '25': '100px', // Custom spacing for 100px
        '35': '140px', // Custom spacing for 140px
        // Add other custom values as needed
      },
      zIndex: { // Custom z-index values
        '1000': '1000',
      },
    },
  },
  plugins: [],
}