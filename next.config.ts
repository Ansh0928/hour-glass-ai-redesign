import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion", "motion-dom"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.startupdaily.net",
      },
    ],
  },
};

export default nextConfig;
