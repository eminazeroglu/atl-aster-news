/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: '#2F9FF8',
        primary: '#0768B5',
        amberBlack: '#072D4B',
      }
    },
  },
  plugins: [],
}

