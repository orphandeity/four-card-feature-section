/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        '_red': '#ea5353',
        '_cyan': '#45d3d3',
        '_orange': '#fcaf4a',
        '_blue': '#549ef2',
        '_very-dark-blue': '#4c4e61',
        '_grayish-blue': '#a3a5ae',
        '_very-light-gray': '#fafafa'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      }
    },
  plugins: [],
  }
}
