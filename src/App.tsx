import React, { useContext } from 'react'
import liff from '@line/liff'
import styles from './App.module.css'
import Header from './components/Header'
import Snippet from './components/Snippet'
import Input from './components/Input'
import { SHARE_TARGET_PICKER_FIXED_ARGUMENT_LIST, QR_IMG_MAP } from './constants'
import { FilterTypes } from './FilterTypes'
import { AppContext } from './Context'

function App() {
  const { appUrl, filter } = useContext(AppContext)

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
        {filter === FilterTypes.MINI || filter === FilterTypes.MINI_PREVIEW ? (
          <div className={styles.applicationNotice}>
            本「LINEミニアプリプレイグラウンド」は日本限定のサービスです。
            <br />
            This “LINE MINI App Playground” is available only in Japan.
          </div>
        ) : null}
        <div className={styles.appInfo}>
          <div className={styles.liffIdBox}>
            <Input readonly value={`URL: ${appUrl}`} />
          </div>
          <img src={QR_IMG_MAP[filter]} className={styles.qrCode} />
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
          apiName="liff.getAppLanguage()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-app-language"
          runner={async () => {
            return liff.getAppLanguage()
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
          skipAutoRun={true}
          runner={async () => {
            return JSON.stringify(await liff.getProfile(), null, 4)
          }}
        />
        <Snippet
          apiName="liff.getFriendship()"
          version="2.0"
          docUrl="https://developers.line.biz/en/reference/liff/#get-friendship"
          useTextareaForResponse={true}
          skipAutoRun={true}
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
        {filter === FilterTypes.LIFF && (
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
            inClientOnly={true}
          />
        )}
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
          defaultRequestPayload={
            SHARE_TARGET_PICKER_FIXED_ARGUMENT_LIST[0].value
          }
          pulldownOptions={SHARE_TARGET_PICKER_FIXED_ARGUMENT_LIST}
          skipAutoRun={true}
          runner={async (options) => {
            return await liff.shareTargetPicker([JSON.parse(options)])
          }}
          loginRequired={true}
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
          loginRequired={true}
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
        <Snippet
          apiName="liff.permission.query"
          version="2.13.0"
          docUrl="https://developers.line.biz/en/reference/liff/#permission-query"
          needRequestPayload={true}
          defaultRequestPayload={'profile'}
          isInLIFF={false}
          runner={async (permission) => {
            return await liff.permission.query(permission)
          }}
        />
        <Snippet
          apiName="liff.permission.requestAll"
          version="2.13.0"
          docUrl="https://developers.line.biz/en/reference/liff/#permission-request-all"
          needRequestPayload={true}
          defaultRequestPayload={'profile'}
          skipAutoRun={true}
          isInLIFF={false}
          runner={async () => {
            return await liff.permission.requestAll()
          }}
        />
        <Snippet
          apiName="liff.permanentLink.createUrlBy"
          version="2.18.0"
          docUrl="https://developers.line.biz/en/reference/liff/#permanent-link-create-url-by"
          needRequestPayload={true}
          defaultRequestPayload={'https://liff-playground.netlify.app?foo=bar'}
          runner={async (url) => {
            return await liff.permanentLink.createUrlBy(url)
          }}
        />
        {(filter === FilterTypes.MINI ||
          filter === FilterTypes.MINI_PREVIEW) && (
          <>
            <Snippet
              apiName="liff.createShortcutOnHomeScreen"
              version="2.23.0"
              docUrl="https://developers.line.biz/en/reference/liff/#create-shortcut-on-home-screen"
              needRequestPayload={true}
              defaultRequestPayload={JSON.stringify(
                {
                  url: appUrl,
                },
                null,
                4
              )}
              runner={async (payload) => {
                const parsed = JSON.parse(payload)
                await liff.createShortcutOnHomeScreen(parsed)
              }}
              skipAutoRun={true}
              isInLIFF={false}
            />
            <Snippet
              apiName="liff.$commonProfile.getDummy"
              version="2.19.0"
              docUrl="https://developers.line.biz/en/docs/partner-docs/quick-fill/overview/"
              needRequestPayload={true}
              defaultRequestPayload={JSON.stringify(
                [
                  [
                    'family-name',
                    'given-name',
                    'family-name-kana',
                    'given-name-kana',
                    'sex-enum',
                    'bday-year',
                    'bday-month',
                    'bday-day',
                    'tel',
                    'email',
                    'postal-code',
                    'address-level1',
                    'address-level2',
                    'address-level3',
                    'address-level4',
                  ],
                  1,
                ],
                null,
                4
              )}
              runner={async (p) => {
                const payload = JSON.parse(p)
                return await liff.$commonProfile.getDummy(...payload)
              }}
              inClientOnly={true}
              skipAutoRun={true}
              isInLIFF={false}
            />
          </>
        )}
      </div>
    </>
  )
}

export default App
