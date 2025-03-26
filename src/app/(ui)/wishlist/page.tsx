import { Suspense } from 'react'
import { Container } from '@sainsburys-tech/grid'
import { ExampleList, GuestWishlist, ProductCardSkeletonList } from '@/app/components'
import { getWcsUserInfoData } from '@/lib/request/server'

export default async function Wishlist() {
  const userData = await getWcsUserInfoData()
  const isLoggedIn = userData.userState === 'LOGGEDIN'

  return (
    <Container as='main' size='lg'>
      {isLoggedIn ? (
        <ExampleList />
      ) : (
        <Suspense fallback={<ProductCardSkeletonList />}>
          <GuestWishlist />
        </Suspense>
      )}
    </Container>
  )
}
