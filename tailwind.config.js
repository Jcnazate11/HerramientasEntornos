/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000', // Color de fondo negro
        primary: '#ffffff',   // Color principal blanco
        secondary: '#888888', // Color secundario gris
        highlight: '#555555', // Color de resaltado gris oscuro
      },
    },
  },
  plugins: [],
}
