/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silverR': '#c0c0c0',
        'redD': '#ff0000',
        'DarkOrange': '#ffa500',
      },
    },
  },
  plugins: [],
}
