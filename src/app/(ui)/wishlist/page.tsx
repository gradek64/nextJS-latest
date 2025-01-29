import { Container, GridItem, GridWrapper } from '@sainsburys-tech/grid'
import ExampleProductCard from '@/app/components/exampleProductCard'

export default function Wishlist() {
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
        key={index}
      >
        <ExampleProductCard />
      </GridItem>
    ))

  return (
    <main>
      <Container size='lg'>
        <h1>Your Wishlist</h1>
        <GridWrapper cols={4}>{exampleProductCards}</GridWrapper>
      </Container>
    </main>
  )
}
