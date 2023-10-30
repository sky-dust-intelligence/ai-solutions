//@type {import('next').NextConfig} */
const nextConfig = {
  images: {
    experimental: {
      instrumentationHook: 'true',
      WebGLProgram: 'true',
    },
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};
module.exports = nextConfig
