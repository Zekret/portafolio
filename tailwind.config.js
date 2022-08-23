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
  }
};
