import { NextResponse } from 'next/server'
import { WishlistController } from '@/app/api/stubApp/controllers'
import type { NextRequest } from 'next/server'

export async function DELETE(req: NextRequest) {
  const wishlistController = new WishlistController()
  const searchParams = req.nextUrl.searchParams
  const productId = searchParams.get('id')

  if (!productId) {
    return NextResponse.json({ status: 400, body: { error: 'no productId passed into query params' } })
  }

  const body = await wishlistController.destroy(productId)

  return NextResponse.json({ status: 200, body })
}
