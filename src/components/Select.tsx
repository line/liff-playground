import React from 'react'
import styles from './Select.module.css'

interface SelectProps {
  value: string
  options: Array<{label: string, value: string}>
  handleChange: React.ChangeEventHandler<HTMLSelectElement>
}

export default function Select({
  value,
  options,
  handleChange,
}: SelectProps) {
  return (
    <div className={styles.select}>
      <select value={value} onChange={handleChange}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>{label}</option>))}
      </select>
    </div>
  )
}