import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='ds-justify-center ds-items-center ds-flex ds-flex-col'>
      <main className='ds-w-[500px] ds-mt-18'>
        <h1 className='ds-mb-4'>Pages</h1>
        <Link href='/wishlist'>
          <div className='ds-p-4 ds-shadow hover:ds-bg-blue hover:ds-text-white'>
            <h2 className='ds-c-display-1'>Wishlist</h2>
            <p className='ds-m-0 ds-text-sm'>/wishlist</p>
          </div>
        </Link>
      </main>
    </div>
  )
}
