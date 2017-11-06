import React from 'react'
import PropTypes from 'prop-types'
//import styles from './FormEnterTruth.css'

function FormEnterTruth({
  onSubmitTruth,
  //isPostingTruth,
  enteredTruth,
  onChangeEnteredTruth,
}) {
  return (
    <div /*className={styles.base}*/>
      <label>
        Enter truth:
        <input
          type="text"
          value={enteredTruth}
          onChange={e => onChangeEnteredTruth(e.target.value)}
        />
      </label>
      <input
        type="submit"
        /*disabled={isPostingTruth}*/
        onClick={e => {
          e.preventDefault()
          onSubmitTruth(enteredTruth)
        }}
      />
    </div>
  )
}

FormEnterTruth.propTypes = {
  onChangeEnteredTruth: PropTypes.func.isRequired,
  onSubmitTruth: PropTypes.func.isRequired,
  //isPostingTruth: PropTypes.bool.isRequired,
  enteredTruth: PropTypes.string.isRequired,
  //errorHasOccurred: PropTypes.bool.isRequired,
}

export default FormEnterTruth
