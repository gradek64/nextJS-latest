import { NextResponse } from 'next/server'

export function POST() {
  return NextResponse.json({ status: 200 })
}
