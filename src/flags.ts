import { headers } from 'next/headers'
import { createOverrides } from './lib/flags/common'
import { Brands, GetWishlistStubResponseType } from '@/lib/common'
import { flag } from '@/lib/flags/server'

export const brandHeaders = {
  arg: Brands.argos,
  hab: Brands.habitat,
  tuc: Brands.tu
} as const

const brand = flag({
  key: 'brand',
  description: 'override the x-argos-brand header',
  values: Object.values(brandHeaders),
  decide: () => {
    const header = headers().get('x-argos-brand') as keyof typeof brandHeaders
    return brandHeaders[header] ?? brandHeaders.arg
  }
})

const stub = flag({
  key: 'stub',
  description: 'development stub backend',
  values: [true, false],
  decide: () => process.env.DEV_STUB === 'true'
})

const wishlistStub = flag({
  key: 'wishlist-stub',
  description: 'responses for /wishlist-api',
  values: Object.values(GetWishlistStubResponseType),
  decide: () => GetWishlistStubResponseType.HAS_ITEMS
})

const hasFlagUpdates = flag({
  key: 'has-flag-updates',
  description: 'flag updates have been made',
  values: [true, false],
  decide: () => false
})

const appShell = flag({
  key: 'app-shell',
  description: 'show the app shell chrome',
  values: [true, false],
  decide: () => true
})

export const flags = {
  [brand.key]: brand,
  [stub.key]: stub,
  [wishlistStub.key]: wishlistStub,
  [hasFlagUpdates.key]: hasFlagUpdates,
  [appShell.key]: appShell
}

export type Flags = typeof flags

export const overrides = createOverrides<Flags>()
