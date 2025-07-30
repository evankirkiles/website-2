/*
 * next.config.js
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
