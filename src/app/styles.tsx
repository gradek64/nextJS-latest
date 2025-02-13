'use client'

import '@sainsburys-tech/design-tokens/dist/argos/css/local/tokens.css'
import '@sainsburys-tech/design-tokens/dist/habitat/css/local/tokens.css'
import '@sainsburys-tech/design-tokens/dist/tu/css/local/tokens.css'
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

const Tu = () => {
  return (
    <>
      <link
        rel='preload'
        href='https://cdn.tu.co.uk/fonts/Tu_W_Bd.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://cdn.tu.co.uk/fonts/Tu_W_Rg.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
    </>
  )
}

export const Styles = ({ brand }: { brand: Brands }) => {
  switch (brand) {
    case Brands.argos:
      return <Argos />
    case Brands.habitat:
      return <Habitat />
    case Brands.tu:
      return <Tu />
  }
}
