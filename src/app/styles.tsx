'use client'

import '@sainsburys-tech/design-tokens/dist/global/css/local/tokens.css'
import '@sainsburys-tech/design-tokens/dist/argos/css/local/tokens.css'
import '@sainsburys-tech/design-tokens/dist/habitat/css/local/tokens.css'
import { Brands } from '../lib/common'

const Argos = () => {
  return (
    <>
      <link
        rel='preload'
        href='https://cdn.argos.co.uk/fonts/Barlow-Regular.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://cdn.argos.co.uk/fonts/Barlow-SemiBold.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
    </>
  )
}

const Habitat = () => {
  return (
    <>
      <link
        rel='preload'
        href='https://cdn.habitat.co.uk/fonts/Inhabit-Bold.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://cdn.habitat.co.uk/fonts/Inhabit-Regular.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
    </>
  )
}

//set default brand to argos
export const Styles = ({ brand }: { brand: Brands }) => {
  switch (brand) {
    case Brands.argos:
      return <Argos />
    case Brands.habitat:
      return <Habitat />
  }
}
