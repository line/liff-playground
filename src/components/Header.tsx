import liff from '@line/liff'
import React from 'react'
import styles from './Header.module.css'
import Button from './Button'

export default function Header() {
  const openGitHub = () => {
    window.open(`https://github.com/line/liff-playground`, '_blank')
  }

  const openInApp = () => {
    window.open(
      `https://line.me/R/app/${process.env.REACT_APP_LIFF_ID}`,
      '_blank'
    )
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.left}>
            <h1>LIFF Playground</h1>
          </div>
          <div className={styles.right}>
            <div className={styles.gitHubButton}>
              <Button
                appearance="outlined"
                variant="primary"
                size="S"
                onClick={openGitHub}>
                GitHub
              </Button>
            </div>
            {!liff.isInClient() && (
              <Button variant="primary" size="S" onClick={openInApp}>
                Open In LINE
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
