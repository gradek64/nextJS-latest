'use client'

import React, { useRef, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

type GlobalThisWithSSR = typeof globalThis & {
  ssrModule?: { id: string; css: string }[]
}

const DocumentStylesManager = () => {
  const { ssrModule }: GlobalThisWithSSR = globalThis
  if (!ssrModule) {
    return null
  }
  return (
    <>
      {ssrModule.map(({ css, id }) => (
        <style
          dangerouslySetInnerHTML={{
            __html: css
          }}
          id={id}
          key={id}
        ></style>
      ))}
    </>
  )
}

export default function StyleRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
  const isServerInserted = useRef(false)
  useServerInsertedHTML(() => {
    if (!isServerInserted.current) {
      isServerInserted.current = true
      const styles = styledComponentsStyleSheet.getStyleElement()
      styledComponentsStyleSheet.instance.clearTag()
      return (
        <>
          {styles}
          <DocumentStylesManager />
        </>
      )
    }
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
}
