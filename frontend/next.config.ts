/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules = ["node_modules", "components", "utils", "hooks"];
    return config;
  },
};

module.exports = nextConfig;