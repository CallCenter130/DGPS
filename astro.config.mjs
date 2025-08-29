code
JavaScript
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  // El 'site' es el dominio raíz.
  site: 'https://callcenter130.github.io', 
  
  // La 'base' condicional. Esta es la clave para que los enlaces internos funcionen.
  base: process.env.NODE_ENV === 'production' ? '/DGPS/' : '/',

  integrations: [tailwind(), alpinejs()]
});