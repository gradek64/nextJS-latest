export enum Brands {
  argos = 'argos',
  habitat = 'habitat',
  tu = 'tu'
}

export enum GetWishlistLocalStubType {
  HAS_ITEMS = 'Has items',
  NO_ITEMS = 'No items',
  NO_KEY_VALUE_PAIR = 'No key value pair'
}

export enum GetWishlistApiStubResponseType {
  HAS_ITEMS = 'Has items',
  EMPTY = 'Empty'
}

export enum WcsUserInfoResponseType {
  GUEST = 'Guest',
  RECOGNISED = 'Recognised',
  LOGGEDIN = 'Logged in'
}

export enum Flags {
  APP_SHELL = 'app-shell',
  BRAND = 'brand',
  STUB = 'stub',
  WCS_USER_INFO_STUB = 'wcs-user-info-stub',
  WISHLIST_API_STUB = 'wishlist-api-stub',
  WISHLIST_LOCAL_STUB = 'wishlist-local-stub',
  HAS_FLAG_UPDATES = 'has-flag-updates'
}

export type LocalWishlists = {
  wishlists: Wishlist[] | undefined
}

type Wishlist = {
  items: Item[]
}

type Item = {
  partNumber: string
  hasVariant: boolean
}
