/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // NAYA CODE: Purane index.html ko homepage par redirect karne ke liye
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true, // 301 Permanent Redirect (Google ke liye best)
      },
    ];
  },
};

module.exports = nextConfig;