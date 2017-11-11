import React from 'react'
import PropTypes from 'prop-types'
import styles from './Banner.css'

function Banner({ children, onClick }) {
  return (
    <div className={styles.base}>
      <div className={styles.banner} onClick={onClick}>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Banner
