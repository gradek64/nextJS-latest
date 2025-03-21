import { NextResponse } from 'next/server'
import { WishlistController } from '@/app/api/stubApp/controllers'
import logger from '@/lib/logger'

export async function GET() {
  const wishlistController = new WishlistController()

  try {
    const body = await wishlistController.get()
    return NextResponse.json(body, { status: 200 })
  } catch (error) {
    logger.error(error, `Error getting wishlist`)
    return NextResponse.json({ status: 400 })
  }
}
