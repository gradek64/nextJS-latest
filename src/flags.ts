import { headers } from 'next/headers'
import { createOverrides } from './lib/flags/common'
import {
  Brands,
  Flags as FlagTypes,
  GetWishlistApiStubResponseType,
  GetWishlistLocalStubType,
  WcsUserInfoResponseType
} from '@/lib/common'
import { flag } from '@/lib/flags/server'

export const brandHeaders = {
  arg: Brands.argos,
  hab: Brands.habitat,
  tuc: Brands.tu
} as const

const appShell = flag({
  key: FlagTypes.APP_SHELL,
  description: 'show the app shell chrome',
  values: [true, false],
  decide: () => true
})

const brand = flag({
  key: FlagTypes.BRAND,
  description: 'override the x-argos-brand header',
  values: Object.values(brandHeaders),
  decide: () => {
    const header = headers().get('x-argos-brand') as keyof typeof brandHeaders
    return brandHeaders[header] ?? brandHeaders.arg
  }
})

const stub = flag({
  key: FlagTypes.STUB,
  description: 'enable development stub',
  values: [true, false],
  decide: () => process.env.DEV_STUB === 'true'
})

const wcsUserInfoStub = flag({
  key: FlagTypes.WCS_USER_INFO_STUB,
  description: 'responses for WCS /GetUserInfo',
  values: Object.values(WcsUserInfoResponseType),
  decide: () => WcsUserInfoResponseType.GUEST
})

const wishlistLocalStub = flag({
  key: FlagTypes.WISHLIST_LOCAL_STUB,
  description: 'sets wishlist local storage',
  values: Object.values(GetWishlistLocalStubType),
  decide: () => GetWishlistLocalStubType.HAS_ITEMS
})

const wishlistApiStub = flag({
  key: FlagTypes.WISHLIST_API_STUB,
  description: 'responses for /wishlist-api',
  values: Object.values(GetWishlistApiStubResponseType),
  decide: () => GetWishlistApiStubResponseType.HAS_ITEMS
})

const hasFlagUpdates = flag({
  key: FlagTypes.HAS_FLAG_UPDATES,
  description: 'flag updates have been made',
  values: [true, false],
  decide: () => false
})

export const flags = {
  [FlagTypes.APP_SHELL]: appShell,
  [FlagTypes.BRAND]: brand,
  [FlagTypes.STUB]: stub,
  [FlagTypes.WCS_USER_INFO_STUB]: wcsUserInfoStub,
  [FlagTypes.WISHLIST_LOCAL_STUB]: wishlistLocalStub,
  [FlagTypes.WISHLIST_API_STUB]: wishlistApiStub,
  [FlagTypes.HAS_FLAG_UPDATES]: hasFlagUpdates
}

export type Flags = typeof flags

export const overrides = createOverrides<Flags>()
