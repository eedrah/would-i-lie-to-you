import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormEnterTruth from '../components/FormEnterTruth'

import { connect } from 'react-redux'
//import styles from './PlayGame.css'

class PlayGame extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    givenLie: PropTypes.string.isRequired,
  }
  render() {
    if (isEnteringTruth) {
      return (
        <FormEnterTruth>
          onChangeEnteredTruth={this.props.onChangeEnteredTruth}
          onSubmitTruth={this.props.onSubmitTruth} WORKINGHERE enteredTruth={this.props.enteredTruth}
        </FormEnterTruth>
      )
    }
    return <div>{this.props.givenLie}</div>
  }
}

function mapStateToProps(state) {
  const { playGame } = state
  return { givenLie: playGame.givenLie }
}

export default connect(mapStateToProps)(PlayGame)
