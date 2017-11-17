import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

import CreateOwnLie from '../components/CreateOwnLie'

function FormEnterTruth({
  onSubmitTruth,
  enteredTruth,
  onChangeEnteredTruth,
  isChoosingOwnLie,
  ownLie,
  onToggleChooseOwnLie,
  onChangeOwnLie,
}) {
  return (
    <div /*className={styles.base}*/>
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
      <Button.Group>
        <Button
          active={isChoosingOwnLie}
          onClick={isChoosingOwnLie ? null : onToggleChooseOwnLie}
        >
          Use your own lie
        </Button>
        <Button.Or />
        <Button
          active={!isChoosingOwnLie}
          onClick={!isChoosingOwnLie ? null : onToggleChooseOwnLie}
        >
          Use a lie from the database
        </Button>
      </Button.Group>
      {isChoosingOwnLie ? (
        <CreateOwnLie onChange={onChangeOwnLie} value={ownLie} />
      ) : null}
      <Button
        onClick={() => {
          console.log(enteredTruth, ownLie, isChoosingOwnLie)
          onSubmitTruth(enteredTruth, isChoosingOwnLie ? ownLie : undefined)
        }}
      >
        Submit Your Statement
      </Button>
    </div>
  )
}

FormEnterTruth.propTypes = {
  onChangeEnteredTruth: PropTypes.func.isRequired,
  onSubmitTruth: PropTypes.func.isRequired,
  enteredTruth: PropTypes.string.isRequired,
  isChoosingOwnLie: PropTypes.bool.isRequired,
  ownLie: PropTypes.string.isRequired,
  onToggleChooseOwnLie: PropTypes.func.isRequired,
  onChangeOwnLie: PropTypes.func.isRequired,
}

export default FormEnterTruth
