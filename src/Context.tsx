import React from 'react'

export const FilterTypes = {
  ALL: 'ALL',
  LIFF: 'LIFF',
  MINI: 'MINI'
} as const

export type FilterType = keyof typeof FilterTypes

export const FilterContext = React.createContext<FilterType>(FilterTypes.ALL)
