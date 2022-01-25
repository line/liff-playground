import React from 'react'
import styles from './TextArea.module.css'

interface TextAreaProps {
  label?: string
  helpText?: string
  readonly?: boolean
  value: string
  rows: number
  onChange?: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({
  label,
  helpText,
  value,
  rows,
  onChange,
}: TextAreaProps) {
  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.frame}>
        <textarea
          className={styles.textarea}
          value={value}
          rows={rows}
          onChange={onChange}
        />
      </div>
      {helpText && <div className={styles.helpText}>{helpText}</div>}
    </>
  )
}
