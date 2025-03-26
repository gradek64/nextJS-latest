import { NextResponse } from 'next/server'
import { GetUserInfoController } from '@/app/api/stubApp/controllers'
import logger from '@/lib/logger'

export async function GET() {
  const getUserInfoController = new GetUserInfoController()

  try {
    const body = await getUserInfoController.get()
    return NextResponse.json(body, { status: 200 })
  } catch (error) {
    logger.error(error, `Error getting userinfo`)
    return NextResponse.json({ status: 400 })
  }
}
