'use client'

import { useRef } from 'react'
import Script from 'next/script'
import { Brands } from '@/lib/common'

const Header = ({
  html,
  bundle,
  stylesheet,
  brand
}: {
  html: string
  bundle?: string
  stylesheet?: string
  brand: Brands
}) => {
  const rootRef = useRef(null)
  switch (brand) {
    case Brands.tu:
      return <div data-ui-version='2' dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning></div>
    case Brands.habitat:
      return <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning></div>
    case Brands.argos:
      return (
        <>
          {stylesheet && <link rel='stylesheet' href={stylesheet}></link>}
          {bundle && (
            <Script
              src={bundle}
              onLoad={() => {
                const { component: Component } = globalThis.window.argosHeaderService
                globalThis.window.ReactDOM.hydrate(<Component />, rootRef.current)
              }}
            />
          )}
          <div ref={rootRef}>
            <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning></div>
          </div>
        </>
      )
  }
}

export default Header
