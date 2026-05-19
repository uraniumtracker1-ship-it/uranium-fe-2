// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// // };

// // export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'copperdjango-production.up.railway.app',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
//   // Optimize for Vercel deployment
//   compiler: {
//     removeConsole: process.env.NODE_ENV === 'production',
//   },
//   // Handle potential build issues 
//   typescript: {
//     ignoreBuildErrors: false,
//   },
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
//   // Disable static optimization for dynamic pages
//   output: 'standalone',
//   // Add output for static export if needed
//   trailingSlash: true,
//   // Ensure proper handling of API routes
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: '/api/:path*',
//       },
//     ];
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'copperdjango-production.up.railway.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: 'standalone',
  trailingSlash: true,
  async redirects() {
    return [
      // Uranium 101 legacy paths
      { source: '/U101', destination: '/uranium-investing-101', permanent: true },
      { source: '/C101', destination: '/uranium-investing-101', permanent: true },
      { source: '/P101', destination: '/uranium-investing-101', permanent: true },
      // Investments ?tab= → real subroutes
      {
        source: '/investments',
        has: [{ type: 'query', key: 'tab', value: 'snapshot' }],
        destination: '/investments/leaders',
        permanent: true,
      },
      {
        source: '/investments',
        has: [{ type: 'query', key: 'tab', value: 'stock-screener' }],
        destination: '/investments/screener',
        permanent: true,
      },
      {
        source: '/investments',
        has: [{ type: 'query', key: 'tab', value: 'insider-transactions' }],
        destination: '/investments/insider-trades',
        permanent: true,
      },
      {
        source: '/investments',
        has: [{ type: 'query', key: 'tab', value: 'etf-trust-holdings' }],
        destination: '/investments/etfs',
        permanent: true,
      },
      {
        source: '/investments',
        has: [{ type: 'query', key: 'tab', value: 'uranium-assets' }],
        destination: '/investments/projects',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  // fix hot reload
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;