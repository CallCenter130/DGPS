/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#272f39ff',
        'secondary': '#B4B8AB',
        'accent': '#D4AF37',
        'light': '#F5F5F5',       // CORRECCIÓN AQUÍ: Estaba mal escrito antes
        'dark': '#212121',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}