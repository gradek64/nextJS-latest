import { empty, hasItems } from '@/app/api/stubApp/database/wishlist/datasets/wishlistdata'
import { cleanUpJsonFiles, getFiles, getStubCookie } from '@/app/api/stubApp/helpers'
import { ApiTypes } from '@/app/api/stubApp/interfaces'
import { WishlistRepository } from '@/app/api/stubApp/repositories'
import { flags } from '@/flags'
import { Flags as FlagTypes, GetWishlistStubResponseType } from '@/lib/common'
import { setOverride } from '@/lib/flags/common'
import { nextStorage } from '@/lib/flags/server'
import type { Item } from '@/app/api/stubApp/interfaces/wishlistTypes'

export default class WishlistService {
  private readonly wishlistRepository: WishlistRepository

  constructor() {
    this.wishlistRepository = new WishlistRepository()
  }

  private readonly getStubResponse = async () => {
    const responseType = await flags[FlagTypes.WISHLIST_STUB]()
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

    return wishlistStub
  }

  public get = async () => {
    const wishlistDatabases = getFiles(ApiTypes.WISHLIST)
    const stubCookie = getStubCookie()

    const hasFlagUpdates = await flags[FlagTypes.HAS_FLAG_UPDATES]()
    const hasJsonFile = wishlistDatabases.includes(`${stubCookie}.json`)

    // remove update flag after resetting wishlist
    await setOverride(FlagTypes.HAS_FLAG_UPDATES, undefined, nextStorage)
    await cleanUpJsonFiles(stubCookie)

    const wishlistStub = await this.getStubResponse()

    const body =
      hasJsonFile && !hasFlagUpdates
        ? await this.wishlistRepository.read(stubCookie)
        : await this.wishlistRepository.update(wishlistStub, stubCookie)

    return body
  }

  public destroy = async (id: string) => {
    const stubCookie = getStubCookie()

    // filter out item from wishlist
    const wishlistStub = await this.wishlistRepository.read(stubCookie)
    const items = wishlistStub?.wishlists?.[0].items?.filter((item: Item) => item.partNumber !== id)

    if (wishlistStub?.wishlists?.[0].items) {
      wishlistStub.wishlists[0].items = items
    }

    return await this.wishlistRepository.update(wishlistStub, stubCookie)
  }
}
