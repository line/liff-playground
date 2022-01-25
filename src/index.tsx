import liff from '@line/liff'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

liff
  .init({ liffId: process.env.REACT_APP_LIFF_ID || '' })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  })
