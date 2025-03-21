import { WishlistService } from '../services'
import logger from '@/lib/logger'

export default class WishlistController {
  public wishlistService: WishlistService

  constructor() {
    this.wishlistService = new WishlistService()
  }

  public get = async () => {
    try {
      const response = await this.wishlistService.get()
      if (!response) logger.error('Error getting wishlist')
      return response
    } catch {
      return { error: 'Error getting wishlist' }
    }
  }

  public destroy = async (id: string) => {
    try {
      const response = await this.wishlistService.destroy(id)
      if (!response) logger.error('Error deleting item from wishlist')
      return response
    } catch {
      return { error: 'Error deleting item from wishlist' }
    }
  }
}
