import { Skeleton } from '@sainsburys-tech/fable'

const ProductCardSkeleton = () => {
  return (
    <div data-testid='product-card-skeleton'>
      <Skeleton height='250px' width='250px' className='ds-mb-3' />
      <Skeleton height='25px' width='220px' className='ds-mb-3' />
      <Skeleton height='25px' width='150px' className='ds-mb-4' />
      <Skeleton height='40px' width='100px' className='ds-mb-4' />
      <Skeleton height='48px' width='250px' className='ds-mb-2' />
    </div>
  )
}

export default ProductCardSkeleton
