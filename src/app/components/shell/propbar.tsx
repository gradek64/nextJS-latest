'use client'

import { ThemeProvider } from 'styled-components'
import { Propbar as BoltPropbar, Themes } from '@sainsburys-tech/bolt' // eslint-disable-line no-restricted-imports
import { Brands } from '@/lib/common'

const Propbar = ({ brand }: { brand: Brands }) => {
  switch (brand) {
    case Brands.tu:
      // we will implement the Tu propbar when needed
      return null
    case Brands.habitat:
      return (
        <ThemeProvider theme={Themes.HabitatTheme}>
          <BoltPropbar brand={brand} />
        </ThemeProvider>
      )
    case Brands.argos:
      return (
        <ThemeProvider theme={Themes.ArgosTheme}>
          <BoltPropbar brand={brand} />
        </ThemeProvider>
      )
  }
}

export default Propbar
