import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(
    {
      userId: '1111111',
      userState: 'LOGGEDIN',
      emailAddress: 'Dolly.Parton@jolene.com',
      trolleyCount: 2,
      firstName: 'Dolly Parton',
      postCode: 'EC1N 2HT'
    },
    { status: 200 }
  )
}
