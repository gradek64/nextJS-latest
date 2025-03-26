import { Button, Display3 } from '@sainsburys-tech/fable'

const EmptyWishlist = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div className='ds-m-8 ds-flex ds-flex-col ds-items-center ds-text-center'>
      <Display3 as='h1' className='ds-mb-2'>
        Save your favourites here.
      </Display3>
      <span className='ds-mb-4'>
        All your items in one spot. The perfect place to find and organise your favourites.
      </span>
      <div className='ds-flex ds-gap-4'>
        {!isLoggedIn && (
          <Button variant='secondary' as='a' href='/account/login' className='!ds-rounded-[8px]'>
            Sign in
          </Button>
        )}
        <Button variant='primary' as='a' href='/' className='!ds-rounded-[8px]'>
          Start shopping
        </Button>
      </div>
    </div>
  )
}

export default EmptyWishlist
