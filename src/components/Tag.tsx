import React from 'react'
import styles from './Tag.module.css'

interface TagProps {
  children: React.ReactNode,
  backgroundColor?: string,
}

export default function Tag({ children, backgroundColor = '#06c755' }: TagProps) {
  return <span className={styles.tag} style={{ backgroundColor }}>{children}</span>
}
