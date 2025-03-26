'use client'

import { GetWishlistLocalStubType } from '@/lib/common'
import logger from '@/lib/logger'

const noItemsLocalStorage = Object.freeze({
  wishlists: [
    {
      items: []
    }
  ]
})
const hasItemsLocalStorage = Object.freeze({
  wishlists: [
    {
      items: [
        { partNumber: '6234588', hasVariant: false },
        { partNumber: '1188206', hasVariant: true },
        { partNumber: '2845359', hasVariant: true },
        { partNumber: '6980038', hasVariant: false }
      ]
    }
  ]
})

export default function SetWishlistLocalStorage({ wishlistType }: { wishlistType: GetWishlistLocalStubType }) {
  if (typeof window === 'undefined') return null

  switch (wishlistType) {
    case GetWishlistLocalStubType.NO_ITEMS:
      window.localStorage.setItem('wishlist', JSON.stringify(noItemsLocalStorage))
      break
    case GetWishlistLocalStubType.HAS_ITEMS:
      window.localStorage.setItem('wishlist', JSON.stringify(hasItemsLocalStorage))
      break
    case GetWishlistLocalStubType.NO_KEY_VALUE_PAIR:
      window.localStorage.removeItem('wishlist')
      break
    default:
      logger.error('Invalid wishlist type')
  }

  return null
}
