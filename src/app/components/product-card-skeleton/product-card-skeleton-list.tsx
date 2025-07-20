import { GridItem, GridWrapper } from '@sainsburys-tech/grid'
import SkeletonCard from '@/app/components/product-card-skeleton'

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
      <h1>Your Wishlist</h1>
      <GridWrapper cols={4}>{exampleProductCards}</GridWrapper>
    </>
  )
}

export default ProductCardSkeletonList
