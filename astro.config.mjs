import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  // El 'site' es el dominio raíz, SIN la subcarpeta.
  site: 'https://callcenter130.github.io', 
  
  // La 'base' es FIJA, es la subcarpeta.
  base: '/DGPS/',

  integrations: [tailwind(), alpinejs()]
});