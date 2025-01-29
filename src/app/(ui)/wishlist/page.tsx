import { Container, GridItem, GridWrapper } from '@sainsburys-tech/grid'
import ExampleProductCard from '@/app/components/exampleProductCard'

export default function Wishlist() {
  const exampleProductCards = Array(4)
    .fill(0)
    .map((item, i) => (
      <GridItem
        colSpan={{
          lg: 1,
          md: 1,
          sm: 1
        }}
        rowSpan={1}
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
