import React from 'react'

export const FilterTypes = {
  LIFF: 'LIFF',
  MINI: 'MINI'
} as const

export type FilterType = keyof typeof FilterTypes

export const FilterContext = React.createContext<FilterType>(FilterTypes.LIFF)
