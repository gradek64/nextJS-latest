import { PropsWithChildren } from 'react'
// import './bolt.module.css'
import dynamic from 'next/dynamic'
import Footer from './footer'
import { brand, Brands } from '@/lib/common'

const boltClasses = {
  [Brands.argos]: 'bolt-v2',
  [Brands.habitat]: 'bolt-habitat'
} as const

const BoltStyles = dynamic(() =>
  import(`@sainsburys-tech/boltui-style/dist/bolt-${brand}.min.css`).then(() => () => undefined)
)

export const Shell = ({ children }: PropsWithChildren) => {
  return (
    <div className='ds-grid'>
      <div className='ds-min-h-[50vh]'>{children}</div>
      <div className={`${boltClasses[brand]}`}>
        <Footer brand={brand} />
        <BoltStyles />
      </div>
    </div>
  )
}

export default Shell
