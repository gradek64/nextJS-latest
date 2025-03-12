import { cookies } from 'next/headers'
import { empty, hasItems } from '@/app/api/stubApp/database/wishlist/datasets/wishlistdata'
import { WishlistRepository } from '@/app/api/stubApp/repositories'
import { flags } from '@/flags'
import { GetWishlistStubResponseType } from '@/lib/common'
import { setOverride } from '@/lib/flags/common'
import { nextStorage } from '@/lib/flags/server'
import type { Item } from '@/app/api/stubApp/interfaces/wishlistTypes'

export default class WishlistService {
  private readonly wishlistRepository: WishlistRepository

  constructor() {
    this.wishlistRepository = new WishlistRepository()
  }

  public create = async () => {
    // get stubCookie
    const cookieStore = cookies()
    const stubCookie = cookieStore.get('stub-cookie')?.value ?? undefined
    if (!stubCookie) return { error: 'No stub cookie found' }

    // remove update flag after resetting wishlist
    await setOverride('has-flag-updates', undefined, nextStorage)

    // set stub response
    const responseType = await flags['wishlist-stub']()
    let wishlistStub

    switch (responseType) {
      case GetWishlistStubResponseType.EMPTY:
        wishlistStub = { ...empty }
        break
      case GetWishlistStubResponseType.HAS_ITEMS:
        wishlistStub = { ...hasItems }
        break
      default:
        wishlistStub = { ...hasItems }
    }

    return await this.wishlistRepository.update(wishlistStub, stubCookie)
  }

  public destroy = async (id: string) => {
    // get stubCookie
    const cookieStore = cookies()
    const stubCookie = cookieStore.get('stub-cookie')?.value ?? undefined
    if (!stubCookie) return { error: 'No stub cookie found' }

    // filter out item from wishlist
    const wishlistStub = await this.wishlistRepository.read(stubCookie)
    const items = wishlistStub?.wishlists?.[0].items?.filter((item: Item) => item.partNumber !== id)

    if (wishlistStub?.wishlists?.[0].items) {
      wishlistStub.wishlists[0].items = items
    }

    return await this.wishlistRepository.update(wishlistStub, stubCookie)
  }
}
