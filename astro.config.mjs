import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  // Añade la URL completa de tu sitio de GitHub Pages
  site: 'https://callcenter130.github.io/',
  
  // La base condicional que ya teníamos
  base: process.env.NODE_ENV === 'production' ? '/DGPS/' : '/',

  integrations: [tailwind(), alpinejs()]
});