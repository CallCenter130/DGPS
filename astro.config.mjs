import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/DGPS/' : '/',
  integrations: [tailwind(), alpinejs()]
});