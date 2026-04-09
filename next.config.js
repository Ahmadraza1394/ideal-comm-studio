/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment configuration
  experimental: {
    serverComponentsExternalPackages: ["nodemailer"],
  },
};

module.exports = nextConfig;
