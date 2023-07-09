/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ipfs.io',
      'avatars.githubusercontent.com',
      'storage.googleapis.com',
      'pbs.twimg.com',
    ],
  },
}

module.exports = nextConfig
