import { PropsWithChildren } from 'react'
import Footer from './footer'
import { brand, Brands } from '@/lib/common'
import './bolt.module.css'

const boltClasses = {
  [Brands.argos]: 'bolt-v2',
  [Brands.habitat]: 'bolt-habitat'
} as const

export const Shell = ({ children }: PropsWithChildren) => {
  return (
    <div className='ds-grid'>
      <div className='ds-min-h-[50vh]'>{children}</div>
      <div className={`${boltClasses[brand]}`}>
        <Footer brand={brand} />
      </div>
    </div>
  )
}

export default Shell
