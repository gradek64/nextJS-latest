'use client'

import { ProductCard } from '@sainsburys-tech/fable'

const ExampleProductCard = () => {
  return (
    <ProductCard
      ctaButton={{
        href: 'http://www.example.com',
        label: 'Add to basket',
        onClick: () => {}
      }}
      hasPadding
      image={
        <div className='ds-max-w-full'>
          <img
            alt='Product Card placeholder'
            className='ds-w-full ds-max-w-full ds-object-cover ds-object-center'
            src='https://picsum.photos/seed/picsum/200/200'
          />
        </div>
      }
      price={{
        energyLabel: {
          customLinkAction: () => {},
          linkUrl: 'https://documents.4rgos.it/v1/static/9466937_R_D010',
          ratingType: 'A'
        },
        price: '£1.00',
        type: 'default'
      }}
      rating={{
        count: 120,
        href: 'http://www.example.com',
        value: 4.5
      }}
      secondaryCtaButton={{
        isFavourite: false,
        label: 'Add to favourites',
        onClick: () => {}
      }}
      title='Product Card Title'
      titleLink='www.example.com'
    />
  )
}

export default ExampleProductCard
