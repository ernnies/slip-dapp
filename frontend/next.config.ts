/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  async headers() {
    return [{ source: '/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }] }];
  },
  webpack(config) {
    config.resolve.modules = ['node_modules', 'components', 'utils', 'hooks', 'lib'];
    return config;
  },
  images: {
    domains: ['via.placeholder.com'],
  },
};

module.exports = nextConfig;