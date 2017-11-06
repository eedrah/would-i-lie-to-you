import React, { Component } from 'react'
import PropTypes from 'prop-types'

import submitTruth from '../actionCreators/submitTruth'
import changeEnteredTruth from '../actionCreators/changeEnteredTruth'

import FormEnterTruth from '../components/FormEnterTruth'

import { connect } from 'react-redux'
//import styles from './PlayGame.css'

class PlayGame extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    givenLie: PropTypes.string.isRequired,
    enteredTruth: PropTypes.string.isRequired,
    isEnteringTruth: PropTypes.bool.isRequired,
  }
  handleSubmitTruth = () => {
    submitTruth()
  }
  handleChangeEnteredTruth = truth => {
    changeEnteredTruth(truth)
  }
  render() {
    if (this.props.isEnteringTruth) {
      return (
        <FormEnterTruth>
          onChangeEnteredTruth={this.handleChangeEnteredTruth}
          onSubmitTruth={this.handleSubmitTruth}
          enteredTruth={this.props.enteredTruth}
        </FormEnterTruth>
      )
    }
    return <div>{this.props.givenLie}</div>
  }
}

function mapStateToProps(state) {
  const { playGame } = state
  return {
    givenLie: playGame.givenLie,
    isEnteringTruth: playGame.isEnteringTruth,
  }
}

export default connect(mapStateToProps)(PlayGame)
