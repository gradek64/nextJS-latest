import { ApiTypes } from '../interfaces'
import getJsonFile from '@/app/api/stubApp/database'
import type { WishlistRepositoryInterface, Wishlists } from '@/app/api/stubApp/interfaces/wishlistTypes'

export default class WishlistRepository implements WishlistRepositoryInterface {
  read = async (stubCookie: string) => {
    const database = getJsonFile(stubCookie, ApiTypes.WISHLIST)
    await database.read()
    return database.data ?? undefined
  }

  write = async (wishlists: Wishlists, stubCookie: string) => {
    const database = getJsonFile(stubCookie, ApiTypes.WISHLIST)
    Object.assign(database.data as object, wishlists)
    return await database.write()
  }

  update = async (wishlistStub: Wishlists, stubCookie: string) => {
    return await this.write(wishlistStub, stubCookie).then(async () => await this.read(stubCookie))
  }
}
