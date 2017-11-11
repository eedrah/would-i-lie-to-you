import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Banner.css'

function Banner({ children, direction, onClick }) {
  const directionStyle = {
    left: styles.left,
    right: styles.right,
  }[direction]

  return (
    <div className={styles.base}>
      <div
        className={cn('hvr-pop', styles.banner, directionStyle)}
        onClick={onClick}
      >
        <h2>{children}</h2>
      </div>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func,
}

export default Banner
