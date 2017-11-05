import React from 'react'
import PropTypes from 'prop-types'
//import styles from './FormEnterLie.css'

function FormEnterLie({
  onSubmitLie,
  isPostingLie,
  enteredLie,
  onChangeEnteredLie,
}) {
  return (
    <div /*className={styles.base}*/>
      <label>
        Enter lie:
        <input
          type="text"
          value={enteredLie}
          onChange={e => onChangeEnteredLie(e.target.value)}
        />
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
  onChangeEnteredLie: PropTypes.func.isRequired,
  onSubmitLie: PropTypes.func.isRequired,
  isPostingLie: PropTypes.bool.isRequired,
  enteredLie: PropTypes.string.isRequired,
  errorHasOccurred: PropTypes.bool.isRequired,
}

export default FormEnterLie
