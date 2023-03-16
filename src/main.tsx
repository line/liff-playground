import liff from '@line/liff'
import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import App from './App'
import { FilterTypes } from './FilterTypes'

const isMINI = new URLSearchParams(location.search).has('mini')
const filter = isMINI ? FilterTypes.MINI : FilterTypes.LIFF
const liffId = isMINI ? import.meta.env.VITE_LIFF_ID_MINI : import.meta.env.VITE_LIFF_ID

liff
  .init({ liffId })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App filter={filter} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  })
