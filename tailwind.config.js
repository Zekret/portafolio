const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxs: '540px',
      xs: '480px',
      tablet: '640px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        comic: ["Comic"]
      },
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
