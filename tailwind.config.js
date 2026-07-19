/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raha-pink': '#EC4899',
        'raha-light': '#FDF2F8',
        'raha-dark': '#831843',
      },
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}