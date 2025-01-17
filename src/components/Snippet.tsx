import React, { useEffect, useState, useCallback } from 'react'
import Button from './Button'
import Input from './Input'
import styles from './Snippet.module.css'
import Tag from './Tag'
import TextArea from './TextArea'
import { AppContext } from '../Context'
import { FilterTypes } from '../FilterTypes'
import Pulldown from './Pulldown'

interface SippetProps {
  apiName: string
  version: string
  docUrl: string
  needRequestPayload?: boolean
  defaultRequestPayload?: string
  pulldownOptions?: { label: string; value: string }[]
  useTextareaForResponse?: boolean
  skipAutoRun?: boolean
  hideResponse?: boolean
  loginRequired?: boolean
  inClientOnly?: boolean
  isInLIFF?: boolean
  isInMINI?: boolean
  runner: (requestPayload?: any) => Promise<any>
}

interface RunnerError extends Error {
  message: string
}

const primaryRed = '#eb4e3d'
const primaryBlue = '#6fedd6'
const primaryOrange = '#ff9551'

export default function Snippet({
  apiName,
  version,
  docUrl,
  skipAutoRun,
  hideResponse,
  runner,
  needRequestPayload,
  useTextareaForResponse,
  defaultRequestPayload,
  pulldownOptions,
  loginRequired,
  inClientOnly,
  isInLIFF = true,
  isInMINI = true,
}: SippetProps) {
  const [response, setResponse] = useState('')
  const [payload, setPayload] = useState(defaultRequestPayload || '')

  const openDoc = () => {
    window.open(docUrl, '_blank')
  }

  const callRunner = useCallback(async () => {
    try {
      const response = await runner(payload)
      if (typeof response === 'string') {
        setResponse(response)
      } else {
        setResponse(JSON.stringify(response))
      }
    } catch (e) {
      setResponse((e as RunnerError).message)
    }
  }, [runner, setResponse, payload])

  useEffect(() => {
    if (!skipAutoRun) callRunner()
  }, [skipAutoRun, callRunner])

  return (
    <AppContext.Consumer>
      {({ filter }) =>
        ((filter === FilterTypes.LIFF && isInLIFF) ||
          (filter === FilterTypes.MINI && isInMINI)) && (
          <div className={styles.snippet}>
            <div className={styles.head}>
              <h2 className={styles.title}>
                <span className={styles.text}>{apiName}</span>
                <Tag>≥{version}</Tag>
                {loginRequired && (
                  <Tag backgroundColor={primaryRed}>Login Required</Tag>
                )}{' '}
                {inClientOnly && (
                  <Tag backgroundColor={primaryRed}>LINE Client only</Tag>
                )}
                {isInLIFF && <Tag backgroundColor={primaryBlue}>LIFF</Tag>}
                {isInMINI && <Tag backgroundColor={primaryOrange}>MINI</Tag>}
              </h2>
              <div className={styles.action}>
                <Button
                  appearance="outlined"
                  variant="primary"
                  size="S"
                  aria-disabled="false"
                  onClick={openDoc}>
                  DOCUMENT
                </Button>{' '}
                <Button
                  variant="primary"
                  size="S"
                  onClick={() => {
                    callRunner()
                  }}>
                  RUN
                </Button>
              </div>
            </div>
            {needRequestPayload && pulldownOptions ? (
              <>
                <Pulldown
                  label="Arguments"
                  helpText="Choose the request payload for API request"
                  value={payload}
                  onChange={(e) => setPayload(e.currentTarget.value)}
                  options={pulldownOptions.map(({ label, value }) => ({
                    label,
                    value,
                  }))}
                />
                <TextArea value={payload} readonly={true} rows={4} />
              </>
            ) : (
              <TextArea
                label="Arguments"
                helpText="Enter the request payload for API request"
                value={payload}
                onChange={(e) => setPayload(e?.currentTarget?.value)}
                rows={4}
              />
            )}
            {!hideResponse &&
              (useTextareaForResponse ? (
                <TextArea
                  label="Response"
                  helpText="Run this API to get the response"
                  value={response}
                  rows={4}
                  readonly={true}
                />
              ) : (
                <Input
                  label="Response"
                  helpText="Run this API to get the response"
                  readonly={true}
                  value={response}
                />
              ))}
          </div>
        )
      }
    </AppContext.Consumer>
  )
}
