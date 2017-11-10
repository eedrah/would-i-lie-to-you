import React from 'react'
import styles from './Title.css'

function Title() {
  return (
    <header className={styles.base}>
      <div className={styles.sheet}>
        <h1 className={styles.topLeftBanner}>Would I lie</h1>
        <h1>
          to you<span className={styles.bottomRightBanner}>?</span>
        </h1>
      </div>
    </header>
  )
}

export default Title
