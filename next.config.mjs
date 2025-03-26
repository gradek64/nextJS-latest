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
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['@sainsburys-tech/fable']
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
  }
}

export default withBundleAnalyzer(nextConfig)
