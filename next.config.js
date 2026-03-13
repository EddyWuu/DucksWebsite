/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DucksWebsite',
  trailingSlash: true,
  images: {
    unoptimized: true, 
  }
}

module.exports = nextConfig
