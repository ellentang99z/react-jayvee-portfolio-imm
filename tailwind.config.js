/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          brand: {
              bg: '#EBE6E0',       
              shell: '#EBE6E0',    
              dark: '#1F1A1A',     
              red: '#CC3333',      
              redHover: '#B32D2D', 
          }
      },
      fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          display: ['"Urbanist"', 'sans-serif'],
          serif: ['"Cormorant Garamond"', 'serif'],
          mono: ['"Space Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}