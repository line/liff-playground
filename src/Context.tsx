import React from 'react'

export type APITypes = 'ALL' | 'LIFF' | 'MINI'

export const FilterContext = React.createContext<APITypes>('ALL')
