import React from 'react'
import styles from './Select.module.css'

interface SelectProps {
  value?: string
  handleChange?: React.ChangeEventHandler<HTMLSelectElement>
}

export default function Select({
  value,
  handleChange,
}: SelectProps) {
  return (
    <div className={styles.select}>
      <select value={value} onChange={handleChange}>
        <option value="ALL">ALL</option>
        <option value="LIFF">LIFF</option>
        <option value="MINI">MINI</option>
      </select>
    </div>
  )
}