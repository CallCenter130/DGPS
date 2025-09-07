// en astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://callcenter130.github.io', 
  //base: '/DGPS',

  build: {
    format: 'directory'
  },
  
  // ¡CAMBIO CLAVE AQUÍ!
  // 'directory' format funciona mejor con 'always'.
  trailingSlash: 'always', 

  integrations: [
    tailwind(),
    alpinejs(),
    sitemap(),
    icon()
  ]
});