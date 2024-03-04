/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fonts:{
        Rob : "Roboto"
      },
      colors:{
        oq:"white",
        color: "#A6998C",
        green:"#213F39",
        yellow:"#D4CC33",
        
      }
    
    },
  },
  plugins: [],
}