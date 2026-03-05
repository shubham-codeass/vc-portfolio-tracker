// next.config.js

module.exports = {
  // Enabling React Strict Mode for better debugging
  reactStrictMode: true,

  // Optimizing images
  images: {
    domains: ['example.com'], // Replace with your trusted image domains
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // Setting up API routes
  api: {
    bodyParser: true, // Enable body parsing for API routes
    externalResolver: true, // Recommended for API responses
  },

  // Configuring serverless function settings
  experimental: {
    serverless: true, // Enables serverless deployment capabilities
  },

  // Configuring webpack if needed
  webpack: (config) => {
    // Additional webpack configuration if required
    return config;
  }
};