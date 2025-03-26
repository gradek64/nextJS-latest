import { Skeleton } from '@sainsburys-tech/fable'
import { GridItem, GridWrapper } from '@sainsburys-tech/grid'
import SkeletonCard from '@/app/components/productCardSkeleton/productCardSkeleton'

const exampleProductCards = Array(4)
  .fill(0)
  .map((_item, index) => (
    <GridItem
      colSpan={{
        lg: 1,
        md: 2,
        sm: 4
      }}
      rowSpan={1}
      key={index} // NOSONAR
    >
      <SkeletonCard />
    </GridItem>
  ))

const ProductCardSkeletonList = () => {
  return (
    <>
      <Skeleton className='ds-mb-4'>
        <h1>Your Wishlist</h1>
      </Skeleton>
      <GridWrapper cols={4}>{exampleProductCards}</GridWrapper>
    </>
  )
}

export default ProductCardSkeletonList
