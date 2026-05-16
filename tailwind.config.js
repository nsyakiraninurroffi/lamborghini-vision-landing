/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-violet': '#0B0914',
        'rose-gold': '#B76E79',
        'deep-plum': '#4A154B', /* Warna aksen tambahan senada dengan bodi mobil */
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], /* Untuk Headline elegan */
        sans: ['Inter', 'sans-serif'], /* Untuk teks biasa */
      }
    },
  },
  plugins: [],
}