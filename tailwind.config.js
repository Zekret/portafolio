const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      xm: '920px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        azul: {
          main: '#4D59E3'
        }
      },
      boxShadow: {
        '3xl': '0px 25px 30px 15px rgba(0,0,0,0.67)',
      }
    }
  }
};
