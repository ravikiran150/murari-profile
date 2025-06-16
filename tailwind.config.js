/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fbd7ac',
          300: '#f8bb77',
          400: '#f59540',
          500: '#f2751a',
          600: '#e35d0f',
          700: '#bc4510',
          800: '#963714',
          900: '#792f14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        telugu: ['Noto Sans Telugu', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 