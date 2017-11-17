import React from 'react'
import PropTypes from 'prop-types'

function CreateOwnLie({ value, onChange }) {
  return (
    <div /*className={styles.base}*/>
      <label>
        <h3>Enter lie</h3>
        <textarea value={value} onChange={e => onChange(e.target.value)} />
      </label>
    </div>
  )
}

CreateOwnLie.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default CreateOwnLie
