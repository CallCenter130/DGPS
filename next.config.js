/** @type {import('next').NextConfig} */

// Variable para detectar si estamos en producción (desplegando en GitHub)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,

  // --- CONFIGURACIÓN PARA GITHUB PAGES ---

  // 1. Le decimos a Next.js que la URL base de todo el sitio es /DGPS
  //    Solo se aplica en producción, para que tu entorno local siga funcionando.
  basePath: isProd ? '/DGPS' : '', 
  
  // 2. Le decimos a Next.js de dónde cargar los assets (CSS, JS, imágenes)
  assetPrefix: isProd ? '/DGPS/' : '',

  // 3. Activamos el modo de exportación estática
  output: 'export', 
  
  // 4. Desactivamos la optimización de imágenes (no compatible con la exportación estática)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig