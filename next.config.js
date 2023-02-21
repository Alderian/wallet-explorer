/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layout'],
  },
};

module.exports = {
  env: {},
};

module.exports = nextConfig;
