import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { WishlistController } from '@/app/api/stubApp/controllers'
import { cleanUpJsonFiles, createStubCookie, getFiles } from '@/app/api/stubApp/helpers'
import { ApiTypes, CookieTypes } from '@/app/api/stubApp/interfaces'
import { flags } from '@/flags'

export async function GET() {
  const wishlistController = new WishlistController()
  const wishlistDatabases = getFiles(ApiTypes.WISHLIST)
  const cookieStore = cookies()

  createStubCookie()

  const stubCookie = cookieStore.get(CookieTypes.STUB_COOKIE)?.value ?? ''
  const hasFlagUpdates = await flags['has-flag-updates']()
  const hasJsonFile = wishlistDatabases.includes(`${stubCookie}.json`)

  await cleanUpJsonFiles(stubCookie)

  const body =
    hasJsonFile && !hasFlagUpdates ? await wishlistController.get(stubCookie) : await wishlistController.create()

  return NextResponse.json({ status: 200, body })
}
