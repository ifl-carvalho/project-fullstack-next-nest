/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  experimental: {
    appDir: true
  },
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
