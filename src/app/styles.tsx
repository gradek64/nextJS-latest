'use client'

import '@sainsburys-tech/design-tokens/dist/global/css/local/tokens.css'
import '@sainsburys-tech/design-tokens/dist/argos/css/local/tokens.css'
import '@sainsburys-tech/design-tokens/dist/habitat/css/local/tokens.css'
import '@sainsburys-tech/design-tokens/dist/tu/css/local/tokens.css'
import dynamic from 'next/dynamic'
import { Brands } from '../lib/common'

const Noop = () => undefined
const ArgosBolt = dynamic(() => import('@sainsburys-tech/boltui-style/dist/bolt-argos.min.css').then(() => Noop))
const HabitatBolt = dynamic(() => import('@sainsburys-tech/boltui-style/dist/bolt-habitat.min.css').then(() => Noop))
const TuBolt = dynamic(() => import('@sainsburys-tech/boltui-style/dist/bolt-tu.min.css').then(() => Noop))

const Argos = ({ bolt }: { bolt?: boolean }) => {
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
      {bolt && <ArgosBolt />}
    </>
  )
}

const Habitat = ({ bolt }: { bolt?: boolean }) => {
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
      {bolt && <HabitatBolt />}
    </>
  )
}

const Tu = ({ bolt }: { bolt?: boolean }) => {
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
      {bolt && <TuBolt />}
    </>
  )
}

//set default brand to argos
export const Styles = ({ brand = Brands.argos, bolt = false }: { brand?: Brands; bolt?: boolean }) => {
  switch (brand) {
    case Brands.argos:
      return <Argos bolt={bolt} />
    case Brands.habitat:
      return <Habitat bolt={bolt} />
    case Brands.tu:
      return <Tu bolt={bolt} />
  }
}
