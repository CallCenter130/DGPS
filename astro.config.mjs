import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  // Añade la URL completa de tu sitio de GitHub Pages
  site: 'https://callcenter130.github.io/DGPS/',
  
  // La base condicional que ya teníamos
  base: process.env.NODE_ENV === 'production' ? '/DGPS/' : '/',

  // Esta es la configuración que mantendrá tus URLs intactas.
  build: {
    // 'directory': mantiene la estructura de carpetas (ej. /pagina/index.html)
    // 'file': crea archivos .html (ej. /pagina.html)
    // Usar 'directory' es mejor para "pretty URLs".
    format: 'directory' 
  },
  
  // Esta configuración ayuda a que los enlaces relativos se resuelvan correctamente.
  trailingSlash: 'always',

  integrations: [tailwind(), alpinejs()]
});