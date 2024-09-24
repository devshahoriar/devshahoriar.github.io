/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
    ],
  },
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    reactCompiler: true,
  },
}

export default nextConfig
