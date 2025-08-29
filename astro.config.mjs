code
JavaScript
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  // El 'site' es el dominio raíz.
  site: 'https://callcenter130.github.io/DGPS/', 
  
  // La 'base' condicional. Esta es la clave para que los enlaces internos funcionen.
  base: '/',

  integrations: [tailwind(), alpinejs()]
});