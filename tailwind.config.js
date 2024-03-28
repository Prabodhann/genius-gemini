/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gradient: '-webkit-linear-gradient(16deg, #4b90ff, #ff5546)',
      },
      gridTemplateColumns: {
        fill: 'repeat(auto-fill, minmax(180px, 1fr))',
      },
    },
    screens: {
      xs: '350px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    keyframes: {
      loader: {
        '0%': { 'background-position': '-800px 0px' },
        '100%': { 'background-position': '800px 0px' },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      loader: 'loader 3s infinite linear',
      fadeIn: 'fadeIn 1s ',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Mozilla-based browsers */
          'scrollbar-width': 'none',
          /* WebKit-based browsers */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};
