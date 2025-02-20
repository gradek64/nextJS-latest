import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(1, { status: 200 })
}
