import React from 'react'
import PropTypes from 'prop-types'
//import styles from './FormEnterLie.css'

function FormEnterLie({
  onSubmitLie,
  isPostingLie,
  //proposedLiesimethingsmething,
}) {
  return (
    <div /*className={styles.base}*/>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmitLie(e.target.value.get('enteredLie'))
        }}
      >
        <label>
          Enter lie:
          <input type="text" name="enteredLie" />
        </label>
        <input type="submit" disabled={isPostingLie} />
      </form>
    </div>
  )
}

FormEnterLie.defaultProps = {}

FormEnterLie.propTypes = {
  onSubmitLie: PropTypes.func.isRequired,
  isPostingLie: PropTypes.bool.isRequired,
  //proposedLie: PropTypes.string.isRequired,
  errorHasOccurred: PropTypes.bool.isRequired,
}

export default FormEnterLie
