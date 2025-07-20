'use client'

import styles from './styles.module.css'
import ImageGrid from '@/app/components/empty-wishlist/image-grid'
import { Button } from '@/lib/customs-client'

const EmptyWishlist = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div aria-label='Empty wishlist'>
      <ImageGrid />
      <div className={styles.container}>
        <div className='ds-mb-2'>Save your favourites here.</div>
        <span className='ds-mb-4'>
          All your items in one spot. The perfect place to find and organise your favourites.
        </span>
        <div className='ds-flex ds-gap-4'>
          {!isLoggedIn && (
            <Button variant='secondary' className='!ds-rounded-[8px]'>
              Sign in
            </Button>
          )}
          <Button variant='primary' {...(isLoggedIn ? {} : { href: '/' })} className='!ds-rounded-[8px]'>
            Start shopping
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EmptyWishlist
