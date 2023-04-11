/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
    theme: {
      screens: {
        "3xl": { max: "1600px" },
        // => @media (max-width: 1600px) { ... }

        "2xl": { max: "1400px" },
        // => @media (max-width: 1400px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}