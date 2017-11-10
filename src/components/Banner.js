import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Banner.css'

function Banner({ children, direction }) {
  const directionStyle = {
    left: styles.left,
    right: styles.right,
  }[direction]

  return (
    <div className={styles.base}>
      <div className={cn(styles.banner, directionStyle)}>{children}</div>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['left', 'right']),
}

export default Banner
