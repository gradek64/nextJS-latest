import { WishlistService } from '../services'
import { WishlistRepository } from '@/app/api/stubApp/repositories'
import logger from '@/lib/logger'

export default class WishlistController {
  private readonly wishlistRepository: WishlistRepository
  private readonly wishlistService: WishlistService

  constructor() {
    this.wishlistRepository = new WishlistRepository()
    this.wishlistService = new WishlistService()
  }

  public get = async (stubCookie: string) => {
    return await this.wishlistRepository
      .read(stubCookie)
      .then((data) => {
        if (!data) return { error: 'Error getting wishlist' }
        return data
      })
      .catch((e: Error) => logger.error('error', e.message))
  }

  public create = async () => {
    return await this.wishlistService
      .create()
      .then((data) => {
        if (!data) return { error: 'Error creating wishlist' }
        return data
      })
      .catch((e: Error) => logger.error('error', e.message))
  }

  public destroy = async (id: string) => {
    return await this.wishlistService
      .destroy(id)
      .then((res) => {
        if (!res) {
          return { error: 'Error deleting item from wishlist' }
        }
        return res
      })
      .catch((e: Error) => logger.error('error', e.message))
  }
}
