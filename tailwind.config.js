/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#EB5002',
        'brand-black': '#000000',
        'brand-white': '#F9F9F9',
        'brand-gray': '#646464',
        'brand-light-gray': '#A7A7A7',
        'brand-dark-gray': '#333333',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};
