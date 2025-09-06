import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
//import sitemap from "@astrojs/sitemap"; // <-- Nueva pieza instalada
//import icon from "astro-icon";          // <-- Nueva pieza instalada

// https://astro.build/config
export default defineConfig({
  // --- Configuración para GitHub Pages (la que ya funciona) ---
  site: 'https://callcenter130.github.io', 
  base: '/DGPS',

  build: {
    format: 'directory'
},
  trailingSlash: 'never',
  // -----------------------------------------------------------

  integrations: [//sitemap(), // <-- Integración de sitemap añadida
  tailwind(), //icon()     // <-- Integración de iconos añadida
  alpinejs(), sitemap(), icon()]
});