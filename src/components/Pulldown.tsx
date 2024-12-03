import React from 'react'
import styles from './Pulldown.module.css'

interface PulldownProps {
  label: string
  helpText?: string
  value: number|string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: { label: string; value: string | number }[]
}

export default function Pulldown({
  label,
  helpText,
  value,
  onChange,
  options,
}: PulldownProps) {
  return (
    <>
      <label>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.frame}>
          <select className={styles.select} value={value} onChange={onChange}>
            {options.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </label>
      {helpText && <div className={styles.helpText}>{helpText}</div>}
    </>
  )
}
