import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tile.css'

function Tile({ children }) {
  if (!children) {
    return null
  }
  return <div className={styles.base}>{children}</div>
}

Tile.propTypes = { children: PropTypes.node }

export default Tile
