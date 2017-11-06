import React from 'react'
import PropTypes from 'prop-types'
//import styles from './FormDisplayStatement.css'

function FormDisplayStatement({ statement, onReset }) {
  return (
    <div /*className={styles.base}*/>
      <p>{statement}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

FormDisplayStatement.propTypes = { statement: PropTypes.string.isRequired }

export default FormDisplayStatement
