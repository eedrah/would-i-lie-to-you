import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

import Loading from './Loading'

function FormEnterLie({
  onSubmitLie,
  isPostingLie,
  enteredLie,
  onChangeEnteredLie,
}) {
  return (
    <div /*className={styles.base}*/>
      <label>
        <h3>Enter a lie to submit to the database</h3>
        <textarea
          value={enteredLie}
          onChange={e => onChangeEnteredLie(e.target.value)}
        />
      </label>
      <Button
        disabled={isPostingLie}
        onClick={() => {
          onSubmitLie(enteredLie)
        }}
      >
        Submit Lie
      </Button>
      {isPostingLie ? <Loading /> : null}
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
