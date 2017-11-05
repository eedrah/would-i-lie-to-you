import React from 'react'
import PropTypes from 'prop-types'
//import styles from './FormEnterLie.css'

function FormEnterLie({ onSubmitLie, isPostingLie, enteredLie }) {
  return (
    <div /*className={styles.base}*/>
      <label>
        Enter lie:
        <input type="text" value={enteredLie} />
      </label>
      <input
        type="submit"
        disabled={isPostingLie}
        onClick={e => {
          e.preventDefault()
          onSubmitLie(enteredLie)
        }}
      />
    </div>
  )
}

FormEnterLie.defaultProps = {}

FormEnterLie.propTypes = {
  onSubmitLie: PropTypes.func.isRequired,
  isPostingLie: PropTypes.bool.isRequired,
  enteredLie: PropTypes.string.isRequired,
  errorHasOccurred: PropTypes.bool.isRequired,
}

export default FormEnterLie
