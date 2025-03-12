/* eslint-disable @typescript-eslint/no-explicit-any */
export type Repository = {
  read(stubCookie: string): Promise<any>
}

export enum ApiTypes {
  WISHLIST = 'wishlist'
}

export enum CookieTypes {
  STUB_COOKIE = 'stub-cookie'
}
