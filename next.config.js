/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  // your Next.js configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "toyenkhanhhoa.vn",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
});
