// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for highlighting potential problems in your app
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  swcMinify: true,

  // Custom Webpack Configuration
  webpack: (config, { isServer }) => {
    // Example of adding a fallback for a Node.js module 'fs'
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // Include existing fallbacks (if any)
        fs: false, // Prevents Webpack from trying to polyfill 'fs' module
      };
    }

    // Example: Add additional custom Webpack plugins or loaders here

    return config; // Return the modified configuration
  },

  // Environment Variables accessible in both server and client
  env: {
    API_URL: "https://api.example.com",
    ANALYTICS_ID: "YOUR_ANALYTICS_ID", // Example for Google Analytics or similar service
  },

  // Custom Headers
  async headers() {
    return [
      {
        // Apply these headers to a specific route
        source: "/about",
        headers: [
          {
            key: "X-Custom-Header",
            value: "My Custom Header Value", // Example custom header
          },
          {
            key: "X-Another-Custom-Header",
            value: "Another Custom Header Value", // Another example custom header
          },
        ],
      },
      // Add more custom header configurations here as needed
    ];
  },

  // Redirects to manage URL changes
  async redirects() {
    return [
      {
        source: "/old-page", // Source path to redirect from
        destination: "/new-page", // Destination path to redirect to
        permanent: true, // Indicates a 301 redirect (permanent)
      },
      {
        source: "/temporary-redirect", // Source path for a temporary redirect
        destination: "/new-temporary-page", // Destination path for the temporary redirect
        permanent: false, // Indicates a 302 redirect (temporary)
      },
    ];
  },

  // Rewrites to map paths to different routes or external URLs
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Source path pattern to match
        destination: "https://api.example.com/:path*", // Destination URL pattern (external API proxy example)
      },
      {
        source: "/blog/:slug*", // Source path pattern for custom rewrites
        destination: "/news/:slug*", // Destination path pattern for rewrites within the app
      },
    ];
  },

  // Internationalisation (i18n) configuration
  i18n: {
    locales: ["en-US", "fr", "es"], // List of supported locales
    defaultLocale: "en-US", // Default locale if none is specified in the URL
    localeDetection: false, // Disable automatic locale detection
  },
};

module.exports = nextConfig;
