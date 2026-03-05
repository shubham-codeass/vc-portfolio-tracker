/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'another-example.com'], // add your allowed domains for image optimization
    deviceSizes: [640, 750, 1080, 1920], // sizes for responsive images
    imageSizes: [16, 32, 48, 64, 75, 96], // additional sizes for images
  },
  api: {
    bodyParser: true, // enable body parsing for API routes
    externalResolver: true, // use denormalized resolver for API routes
  },
  productionBrowserSourceMaps: true, // enable source maps for production
  env: {
    // You can specify environment variables here
    API_URL: process.env.API_URL || 'https://api.example.com',
  },
  webpack: (config) => {
    // Custom Webpack configurations
    return config;
  },
};

module.exports = nextConfig;
