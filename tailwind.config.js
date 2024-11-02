import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
        icon: '0 0 0.25rem #000'
      },
    },
    colors: {
      primary: {
        200: '#8CC1FF', // whiteish blue
        400: '#3391ff', // blue
        500: '#B8D8FF', // light blue
        600: '#266DBF', // dark blue
        700: "#2F373F", // dark blue-grey
      }, 
      grayscale: {
        25: '#E4E2DD', // beige
        50: '#3F99FF',  // lighter blue
        100: '#efefef', // light gray
        200: '#FDFDFF', // white
        950: '#5096E6', // dark blue
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
