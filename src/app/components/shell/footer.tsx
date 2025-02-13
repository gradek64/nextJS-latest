'use client'

import { ThemeProvider } from 'styled-components'
import { Themes } from '@sainsburys-tech/bolt' // eslint-disable-line no-restricted-imports
import BoltFooter from '@sainsburys-tech/bolt-footer'
import { Brands } from '@/lib/common'

const Footer = ({ brand, html }: { brand: Brands; html?: string }) => {
  switch (brand) {
    case Brands.tu:
      return (
        html && (
          <div
            data-ui-version='2'
            data-use-max-width
            dangerouslySetInnerHTML={{ __html: html }}
            suppressHydrationWarning
          ></div>
        )
      )
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
