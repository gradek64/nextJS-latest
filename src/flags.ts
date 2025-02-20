import { headers } from 'next/headers'
import { createOverrides } from './lib/flags/common'
import { Brands } from '@/lib/common'
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

export const flags = {
  [brand.key]: brand,
  [stub.key]: stub
}

export type Flags = typeof flags

export const overrides = createOverrides<Flags>()
