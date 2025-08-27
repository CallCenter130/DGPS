/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/DGPS',
  assetPrefix: '/DGPS/',
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig