import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitalraiz.com",
      },
      {
        protocol: "http",
        hostname: "digitalraiz.com",
      },
      {
        protocol: "https",
        hostname: "*.digitalraiz.com",
      },
    ],
  },
};

export default nextConfig;
