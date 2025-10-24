import type { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  transpilePackages: [],
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 604800,
  },
  compress: true,
  reactStrictMode: true,
  experimental: {
    optimizeCss: false,
    optimizeServerReact: true,
  },
  async headers() {
    return [
      {
        source: '/:path*.(jpg|jpeg|png|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ]
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})(nextConfig)
