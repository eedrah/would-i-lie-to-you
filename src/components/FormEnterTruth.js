import React from 'react'
import PropTypes from 'prop-types'
//import styles from './FormEnterTruth.css'

function FormEnterTruth({ onSubmitTruth, enteredTruth, onChangeEnteredTruth }) {
  return (
    <div /*className={styles.base}*/>
      <form>
        <label>
          <h3>Enter your true statement</h3>
          Remember:
          <ul>
            <li>Something the other participants do not know about you</li>
            <li>Something about you, not another person or thing</li>
            <li>Something unexpected</li>
            <li>You can be penalized if it does not meet the above</li>
            <li>Be adventurous!</li>
          </ul>
          <textarea
            value={enteredTruth}
            onChange={e => onChangeEnteredTruth(e.target.value)}
          />
        </label>
        <input
          type="submit"
          onClick={e => {
            e.preventDefault()
            onSubmitTruth(enteredTruth)
          }}
        />
      </form>
    </div>
  )
}

FormEnterTruth.propTypes = {
  onChangeEnteredTruth: PropTypes.func.isRequired,
  onSubmitTruth: PropTypes.func.isRequired,
  enteredTruth: PropTypes.string.isRequired,
}

export default FormEnterTruth
