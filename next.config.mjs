/** @type {import('next').NextConfig} */
const nextConfig = {
  mages: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mitssuperleague.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
