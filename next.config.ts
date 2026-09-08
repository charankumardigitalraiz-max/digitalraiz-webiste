import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.115", "192.168.0.*", "192.168.1.*", "localhost:3000"],
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
