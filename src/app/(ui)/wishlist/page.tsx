import { Suspense } from 'react'
import { Container } from '@sainsburys-tech/grid'
import { GuestWishlist, ProductCardSkeletonList } from '@/app/components'
import ClientWishlistWrapper from '@/app/components/client-wishlist-wrapper'
import { getWcsUserInfoData } from '@/lib/request/server'

export default async function Wishlist() {
  const userData = await getWcsUserInfoData()
  const isLoggedIn = userData.userState === 'LOGGEDIN'

  return (
    <Container as='main' size='lg'>
      {isLoggedIn ? (
        <ClientWishlistWrapper />
      ) : (
        <Suspense fallback={<ProductCardSkeletonList />}>
          <GuestWishlist />
        </Suspense>
      )}
    </Container>
  )
}
