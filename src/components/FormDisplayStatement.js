import React from 'react'
import PropTypes from 'prop-types'
//import styles from './FormDisplayStatement.css'

function FormDisplayStatement({ statement }) {
  return (
    <div /*className={styles.base}*/>
      <p>{statement}</p>
    </div>
  )
}

FormDisplayStatement.propTypes = { statement: PropTypes.string.isRequired }

export default FormDisplayStatement
