/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/DGPS' : '',
  assetPrefix: isProd ? '/DGPS/' : '',
  output: 'export',
  
  images: {
    // ESTA SECCIÓN ES NUEVA Y RESUELVE EL PROBLEMA
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Mantenemos esta línea que ya teníamos
    unoptimized: true,
  },
}

module.exports = nextConfig