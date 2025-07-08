import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

const stubHeader = () => ({
  type: 'header',
  key: 'x-gm-basket-wishlist-stub',
  value: 'true'
})

const brandHeader = (value) => ({
  type: 'header',
  key: 'x-argos-brand',
  value
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  devIndicators: process.env.CI === 'true' ? false : { position: 'bottom-left' },
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['@sainsburys-tech/fable']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.4rgos.it',
        pathname: '**',
      }
    ]
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/webapp/wcs/stores/servlet/GetUserInfo',
          destination: '/api/mocks/webapp/wcs/stores/servlet/GetUserInfo',
          has: [stubHeader()]
        },
        {
          source: '/basket-api/v1/basket/items/count',
          destination: '/api/mocks/basket-api/v1/basket/items/count',
          has: [stubHeader()]
        },
        {
          source: '/cis/refresh',
          destination: '/api/mocks/cis/refresh',
          has: [stubHeader()]
        },
        {
          source: '/wishlist-service/gql-wishlist',
          destination: '/api/mocks/wishlist-service/gql-wishlist',
          has: [stubHeader(), brandHeader('arg')]
        },
        {
          source: '/:path*',
          destination: 'https://www.argos.co.uk/:path*',
          has: [brandHeader('arg')]
        },
        {
          source: '/:path*',
          destination: 'https://tuclothing.sainsburys.co.uk/:path*',
          has: [brandHeader('tuc')]
        },
        {
          source: '/:path*',
          destination: 'https://www.habitat.co.uk/:path*',
          has: [brandHeader('hab')]
        }
      ]
    }
  },

  // ✅ Add custom Webpack configuration to support `.mjs` and ignore `.yalc/`
  webpack(config, options) {
    // Fix for `.mjs` files inside node_modules (e.g., used by symlinked yalc packages)
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto', // allows CommonJS & ESM interop
    })

    // Optional: Ignore .yalc folder from watch mode (speeds up local dev)
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/.yalc/**'],
    }

    return config
  }
}

export default withBundleAnalyzer(nextConfig)
