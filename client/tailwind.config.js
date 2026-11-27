/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#1A1633',
        cream: '#F4EFE3',
        gold: {
          DEFAULT: '#F2B33D',
          dark: '#B9830E',
        },
      },
    },
  },
  plugins: [],
}
