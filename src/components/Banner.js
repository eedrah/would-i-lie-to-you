import React from 'react'
import PropTypes from 'prop-types'
import styles from './Banner.css'

function Banner({ children }) {
  return (
    <div className={styles.base}>
      <div className={styles.banner}>{children}</div>
    </div>
  )
}

Banner.propTypes = { children: PropTypes.node }

export default Banner
