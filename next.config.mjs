/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'ion71pbmpa.ufs.sh',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  transpilePackages: ['next-mdx-remote'],
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
