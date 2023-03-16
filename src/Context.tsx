import React from 'react'
import { FilterTypes } from './FilterTypes'

export type FilterType = keyof typeof FilterTypes

export const FilterContext = React.createContext<FilterType>(FilterTypes.LIFF)
