import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

function CreateOwnLie({ value, onChange }) {
  return (
    <div /*className={styles.base}*/>
      <label>
        <Header as="h3">Enter lie</Header>
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
