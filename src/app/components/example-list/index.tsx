import { GridItem, GridWrapper } from '@sainsburys-tech/grid'
import ExampleProductCard from '@/app/components/example-list/example-product-card'

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
      key={index} //NOSONAR
    >
      <ExampleProductCard />
    </GridItem>
  ))

const ExampleList = () => {
  return (
    <>
      <h1>Your Wishlist</h1>
      <GridWrapper cols={4}>{exampleProductCards}</GridWrapper>
    </>
  )
}

export default ExampleList
