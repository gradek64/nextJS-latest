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
  async rewrites() {
    return {
      fallback: [
        {
          source: '/webapp/wcs/stores/servlet/GetUserInfo',
          destination: '/api/mocks/header/webapp/wcs/stores/servlet/GetUserInfo',
          has: [stubHeader()]
        },
        {
          source: '/basket-api/v1/basket/items/count',
          destination: '/api/mocks/header/basket-api/v1/basket/items/count',
          has: [stubHeader()]
        },
        {
          source: '/cis/refresh',
          destination: '/api/mocks/header/cis/refresh',
          has: [stubHeader()]
        },
        {
          source: '/wishlist-service/gql-wishlist',
          destination: '/api/mocks/header/wishlist-service/gql-wishlist',
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
