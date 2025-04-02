import Image from 'next/image'
import { Container, GridItem, GridWrapper } from '@sainsburys-tech/grid'
import { items } from '@/app/components/empty-wishlist/image-data'

const ImageGrid = () => {
  return (
    <Container aria-label='inspiration' className='ds-justify-items-center'>
      <GridWrapper className='ds-m-auto ds-max-w-5xl ds-p' cols={{ sm: 4, md: 5 }}>
        {items.map((item) => (
          <GridItem key={item.alt} rowSpan={item.rowSpan} className={item.itemStyles}>
            <Image src={item.src} alt={item.alt} className={item.imgStyles} width={item.width} height={item.height} />
          </GridItem>
        ))}
      </GridWrapper>
    </Container>
  )
}

export default ImageGrid
