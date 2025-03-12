/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repository } from '.'

export type ProductDetails = {
  name?: string
  price?: number
  flashText?: string
  deliverable?: boolean
  deliveryPrice?: string
  reviewCount?: number
  avgRating?: number
  endOfLineOutOfStock?: boolean
  globallyOutOfStock?: boolean
  inStoreJewelleryItem?: boolean
  preorderUnavailable?: boolean
  isAvailable?: boolean
}

export type Item = {
  dateAdded?: string
  hasVariant?: boolean
  partNumber?: string
  details?: ProductDetails[]
}

export type Wishlist = {
  wid?: string
  name?: string
  primary?: boolean | null
  items?: Item[]
}

export type Wishlists = {
  wishlists?: Wishlist[]
}

export interface WishlistRepositoryInterface extends Repository {
  read(stubCookie: string): Promise<any>
  write(wishlists: Wishlists, stubCookie: string): Promise<any>
}
