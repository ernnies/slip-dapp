import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const nextConfig: NextConfig = {
  typedRoutes: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
      },
    ];
  },
  webpack(config: WebpackConfig) {
    config.resolve = config.resolve || {};
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      "node_modules",
      "components",
      "utils",
      "hooks",
      "lib",
    ];
    return config;
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

export default nextConfig;
