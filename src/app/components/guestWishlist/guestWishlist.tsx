'use client'

import { useEffect, useState } from 'react'
import { EmptyWishlist, ExampleList, ProductCardSkeletonList } from '@/app/components'
import logger from '@/lib/logger'
import type { LocalWishlists } from '@/lib/common'

const GuestWishlist = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [wishlist, setWishlist] = useState<LocalWishlists | undefined>()
  const isEmpty = !wishlist?.wishlists || wishlist.wishlists[0].items?.length === 0

  useEffect(() => {
    try {
      const data = window.localStorage.getItem('wishlist')
      const wishlistData = data ? (JSON.parse(data) as LocalWishlists) : undefined
      setWishlist(wishlistData)
      setIsLoading(false)
    } catch (error) {
      logger.error(error)
    }
  }, [])

  return (
    <>
      {isLoading ? <ProductCardSkeletonList /> : null}
      {!isLoading && isEmpty ? <EmptyWishlist isLoggedIn={false} /> : null}
      {!isLoading && !isEmpty ? <ExampleList /> : null}
    </>
  )
}
export default GuestWishlist
