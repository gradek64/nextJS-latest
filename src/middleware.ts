import { NextResponse } from 'next/server'
import { flags } from './flags'
import { Brands } from './lib/common'
import { urlMiddleware } from './lib/flags/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const headers = new Headers(request.headers)
  const brand = await flags.brand()
  const stub = await flags.stub()
  const brandHeaders = {
    [Brands.argos]: 'arg',
    [Brands.tu]: 'tuc',
    [Brands.habitat]: 'hab'
  } as const
  const brandHeader = brandHeaders[brand]

  if (brandHeader) headers.set('x-argos-brand', brandHeader)
  if (stub) headers.set('x-gm-basket-wishlist-stub', 'true')

  const redirect = await urlMiddleware(request, flags)
  return (
    redirect ??
    NextResponse.next({
      request: {
        headers
      }
    })
  )
}
