/* eslint-disable no-restricted-imports */
'use client'

import { ThemeProvider } from 'styled-components'
import { Themes } from '@sainsburys-tech/bolt'
import BoltFooter from '@sainsburys-tech/bolt-footer'
import { Brands } from '@/lib/common'

const Footer = ({ brand }: { brand: Brands }) => {
  switch (brand) {
    case Brands.habitat:
      return (
        <ThemeProvider theme={Themes.HabitatTheme}>
          <BoltFooter brand={brand} paypalCreditHidden={false} />
        </ThemeProvider>
      )
    case Brands.argos:
      return (
        <ThemeProvider theme={Themes.ArgosTheme}>
          <BoltFooter brand={brand} paypalCreditHidden={false} />
        </ThemeProvider>
      )
  }
}

export default Footer
