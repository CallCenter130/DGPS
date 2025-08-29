/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0A2342',      // Azul oscuro para fondos, textos importantes
        'secondary': '#B4B8AB',    // Gris para textos secundarios o fondos claros
        'accent': '#D4AF37',       // Dorado para botones y llamadas a la acción (CTA)
        'light': '#F5F5F5',       // Blanco roto para fondos de secciones
        'dark': '#212121',        // Un gris muy oscuro para textos
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Fuente para el cuerpo de texto
        display: ['Montserrat', 'sans-serif'], // Fuente para títulos
      }
    },
  },
  plugins: [],
}