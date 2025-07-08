'use client'

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
        html && (
          <div
            data-ui-version='2'
            data-use-max-width
            dangerouslySetInnerHTML={{ __html: html }}
            suppressHydrationWarning
          ></div>
        )
      )
    case Brands.argos:
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
  }
}

export default Footer
