/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'bafybeiedloskfopzcn4fdeo2huyskf2hmosd6danh4ogbc2bdqihhd3qge.ipfs.w3s.link',
      'avatars.githubusercontent.com',
      'storage.googleapis.com',
      'pbs.twimg.com',
    ],
  },
}

module.exports = nextConfig
