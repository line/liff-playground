import React from 'react'
import { FilterTypes } from './FilterTypes'

export type FilterType = keyof typeof FilterTypes

export const AppContext = React.createContext<{
  filter: FilterType,
  appId: string,
  appUrl: string
}>({
  filter: FilterTypes.LIFF,
  appId: import.meta.env.VITE_LIFF_ID,
  appUrl: `https://liff.line.me/${import.meta.env.VITE_LIFF_ID}`
})
