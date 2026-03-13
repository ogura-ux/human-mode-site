import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/dev",
        destination: "/dev.html",
      },
    ];
  },
};

export default nextConfig;
