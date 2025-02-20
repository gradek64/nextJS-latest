import { NextResponse } from 'next/server'

export function POST() {
  return NextResponse.json({ data: { wishlists: [{ items: [{ partNumber: '1111111' }, { partNumber: '2222222' }] }] } })
}
