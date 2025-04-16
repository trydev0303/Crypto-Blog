/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'standalone',
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  }
};

module.exports = nextConfig;
