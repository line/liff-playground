import React from 'react'
import styles from './Input.module.css'

interface InputProps {
  label?: string
  helpText?: string
  readonly?: boolean
  value: string
}

export default function Input({
  label,
  helpText,
  readonly,
  value,
}: InputProps) {
  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.frame}>
        <input className={styles.input} value={value} readOnly={readonly} />
      </div>
      {helpText && <div className={styles.helpText}>{helpText}</div>}
    </>
  )
}
