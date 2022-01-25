import React from 'react'
import liff from '@line/liff'
import styles from './App.module.css'
import Header from './components/Header'
import Snippet from './components/Snippet'
import Input from './components/Input'

function App() {
  let isLoggedIn = false
  try {
    isLoggedIn = liff.isLoggedIn()
  } catch (e) {
    console.log(e)
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.liffIdBox}>
          <Input
            label="CURRENT LIFF ID"
            readonly
            value={process.env.REACT_APP_LIFF_ID || ''}
          />
        </div>
        <h1>Client APIs</h1>
        {!isLoggedIn ? (
          <Snippet
            apiName="liff.login()"
            version="2.0"
            docUrl="https://developers.line.biz/en/reference/liff/#login"
            skipAutoRun={true}
            runner={async () => {
              return liff.login()
            }}
          />
        ) : (
          <Snippet
            apiName="liff.logout()"
            version="2.0"
            docUrl="https://developers.line.biz/en/reference/liff/#logout"
            skipAutoRun={true}
            hideResponse={true}
            runner={async () => {
              // reload after logout.
              setTimeout(() => {
                location.reload()
              }, 1000)
              return liff.logout()
            }}
          />
        )}
        <Snippet
          apiName="liff.getOS()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-os"
          runner={async () => {
            return liff.getOS()
          }}
        />
        <Snippet
          apiName="liff.getLanguage()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-language"
          runner={async () => {
            return liff.getLanguage()
          }}
        />
        <Snippet
          apiName="liff.getVersion()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-version"
          runner={async () => {
            return liff.getVersion()
          }}
        />
        <Snippet
          apiName="liff.getLineVersion()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-line-version"
          runner={async () => {
            return liff.getLineVersion()
          }}
        />
        <Snippet
          apiName="liff.isInClient()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#is-in-client"
          runner={async () => {
            return liff.isInClient()
          }}
        />
        <Snippet
          apiName="liff.isLoggedIn()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#is-logged-in"
          runner={async () => {
            return liff.isLoggedIn()
          }}
        />
        <Snippet
          apiName="liff.isApiAvailable()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#is-api-available"
          needRequestPayload={true}
          defaultRequestPayload={'shareTargetPicker'}
          runner={async (api) => {
            return liff.isApiAvailable(api)
          }}
        />
        <Snippet
          apiName="liff.getAccessToken()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-access-token"
          runner={async () => {
            return liff.getAccessToken()
          }}
        />
        <Snippet
          apiName="liff.getIDToken()"
          version="2.1"
          docUrl="https://developers.line.biz/en/reference/liff/#get-id-token"
          runner={async () => {
            return liff.getIDToken()
          }}
        />
        <Snippet
          apiName="liff.getDecodedIDToken()"
          version="2.0"
          useTextareaForResponse={true}
          docUrl="https://developers.line.biz/en/reference/liff/#get-decoded-id-token"
          runner={async () => {
            return JSON.stringify(await liff.getDecodedIDToken(), null, 4)
          }}
        />
        <Snippet
          apiName="liff.getContext()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-context"
          useTextareaForResponse={true}
          runner={async () => {
            return JSON.stringify(await liff.getContext(), null, 4)
          }}
        />
        <Snippet
          apiName="liff.getProfile()"
          version="1.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-profile"
          useTextareaForResponse={true}
          runner={async () => {
            return JSON.stringify(await liff.getProfile(), null, 4)
          }}
        />
        <Snippet
          apiName="liff.getFriendship()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-friendship"
          useTextareaForResponse={true}
          runner={async () => {
            return JSON.stringify(await liff.getFriendship(), null, 4)
          }}
        />
        <Snippet
          apiName="liff.permanentLink.setExtraQueryParam()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#permanent-linke-set-extra-query-param"
          needRequestPayload={true}
          defaultRequestPayload={'user_tracking_id=8888'}
          runner={async (params) => {
            liff.permanentLink.setExtraQueryParam(params)
            return liff.permanentLink.createUrl()
          }}
        />
        <Snippet
          apiName="liff.sendMessages"
          version="1.0"
          docUrl="https://developers.line.biz/en/reference/liff/#send-messages"
          needRequestPayload={true}
          hideResponse={true}
          defaultRequestPayload={JSON.stringify(
            [
              {
                type: 'text',
                text: 'Hello, World!',
              },
            ],
            null,
            4
          )}
          skipAutoRun={true}
          runner={async (messages) => {
            return await liff.sendMessages(JSON.parse(messages))
          }}
        />
        <Snippet
          apiName="liff.openWindow"
          version="1.0"
          docUrl="https://developers.line.biz/en/reference/liff/#open-window"
          needRequestPayload={true}
          defaultRequestPayload={JSON.stringify(
            {
              url: 'https://line.me',
              external: true,
            },
            null,
            4
          )}
          skipAutoRun={true}
          hideResponse={true}
          runner={async (options) => {
            return await liff.openWindow(JSON.parse(options))
          }}
        />
        <Snippet
          apiName="liff.shareTargetPicker"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#share-target-picker"
          needRequestPayload={true}
          hideResponse={true}
          defaultRequestPayload={JSON.stringify(
            [
              {
                type: 'text',
                text: 'Hello, World!',
              },
            ],
            null,
            4
          )}
          skipAutoRun={true}
          runner={async (options) => {
            return await liff.shareTargetPicker(JSON.parse(options))
          }}
        />
        <Snippet
          apiName="liff.scanCodeV2"
          version="2.15"
          docUrl="https://developers.line.biz/en/reference/liff/#scan-code-v2"
          skipAutoRun={true}
          runner={async () => {
            if (liff.scanCodeV2) {
              return await liff.scanCodeV2()
            } else {
              return 'scanCode API is not available on this platform'
            }
          }}
        />
        <Snippet
          apiName="liff.closeWindow"
          version="1.0"
          docUrl="https://developers.line.biz/en/reference/liff/#close-window"
          skipAutoRun={true}
          hideResponse={true}
          runner={async () => {
            return await liff.closeWindow()
          }}
        />
      </div>
    </>
  )
}

export default App
