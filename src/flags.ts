import { headers } from 'next/headers'
import { createOverrides } from './lib/flags/common'
import { Brands, Flags as FlagTypes, GetWishlistStubResponseType } from '@/lib/common'
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
  description: 'development stub backend',
  values: [true, false],
  decide: () => process.env.DEV_STUB === 'true'
})

const wishlistStub = flag({
  key: FlagTypes.WISHLIST_STUB,
  description: 'responses for /wishlist-api',
  values: Object.values(GetWishlistStubResponseType),
  decide: () => GetWishlistStubResponseType.HAS_ITEMS
})

const hasFlagUpdates = flag({
  key: FlagTypes.HAS_FLAG_UPDATES,
  description: 'flag updates have been made',
  values: [true, false],
  decide: () => false
})

export const flags = {
  [appShell.key]: appShell,
  [brand.key]: brand,
  [stub.key]: stub,
  [wishlistStub.key]: wishlistStub,
  [hasFlagUpdates.key]: hasFlagUpdates
}

export type Flags = typeof flags

export const overrides = createOverrides<Flags>()
