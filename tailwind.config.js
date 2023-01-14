/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      '2xl': {'max': '768px'},
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      darkblue: '#0A2540',
      secondary: '#02CBE1',
      lightSkyBlue: '#E6F3FF',
      primary: '#29329C',
      lightbg: '#e5f3ffe6',
      lotion: '#FBFBFD',
      white: '#fff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#4A4A68',
      'gray-light': '#d3dce6',
      hint: '#BBBEE0',
      turquoise: '#3BE3C5',
      mintCream: '#E7F4FF',
      linear:'',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        card: '0px 15px 45px rgba(150, 207, 255, 0.25)',
        headerShadow: '0px 4px 9px rgba(214, 235, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
