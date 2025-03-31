import { Flag, flag as nextFlag } from '@vercel/flags/next'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { getOverride, OverrideStorage, setOverride } from './common'

export const nextStorage: OverrideStorage = {
  get: async (id: string) => {
    const cookiesList = await cookies()
    return cookiesList.get(id)?.value
  },
  set: async (id: string, payload: string) => {
    const cookiesList = await cookies()
    cookiesList.set(id, payload, { httpOnly: true })
  }
}

export const flag = <T extends string, U extends unknown[]>({
  key,
  description,
  values,
  decide,
  storage = nextStorage
}: {
  key: T
  description?: string
  values: readonly [...U]
  decide: NonNullable<Parameters<typeof nextFlag>[0]['decide']>
  storage?: OverrideStorage
}) => {
  const flag = nextFlag({
    key,
    description,
    decide:
      process.env.OVERRIDE_FLAGS === 'true'
        ? async (...params) => {
            const override = await getOverride(key, storage)
            return override === undefined ? decide(...params) : override
          }
        : decide
  }) as Pick<Flag<false>, keyof Flag<false>> & { (): Promise<U[number]>; key: T }
  return Object.assign(flag, { values })
}

export const urlMiddleware = async (request: NextRequest, flags: Record<string, ReturnType<typeof flag>>) => {
  const searchParams = request.nextUrl.searchParams.get('__flags')
  if (searchParams) {
    const clonedRequest = request.nextUrl.clone()
    clonedRequest.searchParams.delete('__flags')
    const response = NextResponse.redirect(clonedRequest)
    const responseStorage: OverrideStorage = {
      // eslint-disable-next-line @typescript-eslint/require-await
      get: async (id: string) => response.cookies.get(id)?.value,
      // eslint-disable-next-line @typescript-eslint/require-await
      set: async (id: string, payload: string) => {
        response.cookies.set(id, payload)
      }
    }
    const payload = JSON.parse(searchParams ?? '{}') as Record<string, unknown>
    for (const flag of Object.values(flags)) {
      const value = payload[flag.key]
      if (value !== undefined) {
        await setOverride(flag.key, value, responseStorage)
      }
    }
    return response
  }
  if (request.nextUrl.pathname === '/set-flags') {
    return NextResponse.json({})
  }
}
