/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  
  // Configuración para el despliegue en GitHub Pages (subdirectorio /DGPS)
  basePath: isProd ? '/DGPS' : '',
  assetPrefix: isProd ? '/DGPS/' : '',
  
  // Activa la exportación estática, necesaria para GitHub Pages
  output: 'export',
  
  images: {
    // Autoriza el dominio 'i.ibb.co' para poder usar el componente next/image
    remotePatterns: [
      {
        protocol: 'https';
        hostname: 'i.ibb.co';
        port: '';
        pathname: '/**';
      },
    ],
    // Desactiva la optimización de imágenes por defecto, no compatible con 'output: export'
    unoptimized: true,
  },
}

module.exports = nextConfig