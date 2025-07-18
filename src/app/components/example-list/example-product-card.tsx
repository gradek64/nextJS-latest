'use client'

import { Customs } from 'customs-components'
import styles from '@/app/components/example-list/styles.module.css'

const ExampleProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div className='ds-max-w-full'>
        <img
          alt='Product Card placeholder'
          className={styles.productImage}
          src='https://picsum.photos/seed/picsum/200/200'
        />
      </div>

      {/* Product Title */}
      <h3 className='text-lg font-semibold text-gray-900 mt-3 mb-2 line-clamp-2'>
        Sample Product Title - Premium Quality Item
      </h3>

      {/* Rating Row */}
      <div className='flex items-center gap-1 mb-2'>
        <span className='text-sm text-gray-600 ml-1'>(4.0)</span>
        <span className='text-sm text-gray-500'>• 127 reviews</span>
      </div>

      {/* Price Row */}
      <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-2'>
          <span className='text-xl font-bold text-red-600'>£12.99</span>
          <span className='text-sm text-gray-500 line-through'>£15.99</span>
        </div>
        <span className='text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full'>19% off</span>
      </div>

      <Customs.Button fullWidth>Add to basket</Customs.Button>
    </div>
  )
}

export default ExampleProductCard
