/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          400: '#21222A',
          500: '#101117',
          900: '#030104',
        },
        brand: {
          300: '#FFDA00',
          400: '#eb96f3',
          500: '#E682F0',
          600: '#C901EE',
          700: '#652498',
          800: '#1D3D5A',
          900: '#720E7B',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
