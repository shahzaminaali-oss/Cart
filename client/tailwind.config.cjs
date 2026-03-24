/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        stars: 'stars 20s linear infinite',
      },
      keyframes: {
        stars: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 1000px' },
        },
      },
    },
  },
  plugins: [],
};
