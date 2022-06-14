/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: [
      'm.media-amazon.com',
      's3-eu-west-1.amazonaws.com'
    ],
  },
}
