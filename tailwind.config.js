/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'custom-blue': '#627EEA',
          'custom-light-blue': '#8C9EFF',
          'custom-yellow': 'FFD600',
          'custom-orange': 'FF6E40',
          'custom-green': '00C853',
      },
      fontFamily: {
        'custom': ['OpirusOpik', 'sans'],
      },
      backgroundImage: {
        'main-pattern': "url('./img/background.png')",
      },
    },
  },
  plugins: [],
}