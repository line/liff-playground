import liff from '@line/liff'
import React from 'react'
import ReactDOM from 'react-dom'
import { LiffCommonProfilePlugin } from '@line/liff-common-profile-plugin'
import './main.css'
import App from './App'
import { FilterTypes } from './FilterTypes'

const isMINI = new URLSearchParams(location.search).has('mini')
const isPreviewMINI = new URLSearchParams(location.search).has('mini_preview')

const filter = isPreviewMINI
  ? FilterTypes.MINI_PREVIEW
  : isMINI
  ? FilterTypes.MINI
  : FilterTypes.LIFF

const appId = {
  [FilterTypes.LIFF]: import.meta.env.VITE_LIFF_ID,
  [FilterTypes.MINI]: import.meta.env.VITE_LIFF_ID_MINI,
  [FilterTypes.MINI_PREVIEW]: import.meta.env.VITE_LIFF_ID_MINI_PREVIEW
}[filter]

const appUrl =
  filter === FilterTypes.LIFF
    ? `https://liff.line.me/${appId}`
    : `https://miniapp.line.me/${appId}`

const injectPlugins = () => {
  liff.use(new LiffCommonProfilePlugin())
}

if (filter === FilterTypes.MINI || filter === FilterTypes.MINI_PREVIEW) {
  injectPlugins()
}

liff
  .init({ liffId: appId })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App appUrl={appUrl} filter={filter} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  })
