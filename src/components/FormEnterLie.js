import React from 'react'
import PropTypes from 'prop-types'
import styles from './FormEnterLie.css'

function FormEnterLie({ onSubmit }) {
  return (
    <div className={styles.base}>
      <form onSubmit={onSubmit}>
        <label>
          Enter lie:
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

FormEnterLie.defaultProps = {}

FormEnterLie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isPostingLie: PropTypes.bool.isRequired,
  proposedLie: PropTypes.string.isRequired,
  errorHasOccurred: PropTypes.bool.isRequired,
}

export default FormEnterLie
