'use client'

import { createContext, useContext } from 'react'
import type { ComputedFlags } from '@/lib/flags/common'

const FlagsContext = createContext<Record<string, unknown>>({})

export const createUseFlags: <T extends Record<string, unknown>, U = ComputedFlags<T>>() => () => U = () => {
  return () => useContext(FlagsContext) as never
}

export default function FlagsProvider({
  value,
  children
}: React.PropsWithChildren<{ value: Record<string, unknown> }>) {
  return <FlagsContext.Provider value={value}>{children}</FlagsContext.Provider>
}
