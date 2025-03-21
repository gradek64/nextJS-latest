import { NextResponse } from 'next/server'
import { WishlistController } from '@/app/api/stubApp/controllers'
import logger from '@/lib/logger'
import type { NextRequest } from 'next/server'

export async function DELETE(req: NextRequest) {
  const wishlistController = new WishlistController()
  const searchParams = req.nextUrl.searchParams
  const productId = searchParams.get('id')

  if (!productId) {
    return NextResponse.json({ error: 'no productId passed into query params' }, { status: 400 })
  }

  try {
    const body = await wishlistController.destroy(productId)
    return NextResponse.json(body, { status: 200 })
  } catch (error) {
    logger.error(error, `Error deleting item from wishlist`)
    return NextResponse.json({ status: 400 })
  }
}
