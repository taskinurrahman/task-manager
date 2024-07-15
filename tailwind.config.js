/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      backgroundImage: {
        'wood-pattern': "url('/src/assets/wood.jpg')",
      }
    },
  },
  plugins: [],
}