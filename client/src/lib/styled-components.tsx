'use client'
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

interface ExtendedServerStyleSheet extends ServerStyleSheet {
  clearTag: () => void
}

export default function StyledComponentsRegistry ({
  children
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet() as ExtendedServerStyleSheet)

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as React.ReactNode}
    </StyleSheetManager>
  )
}
