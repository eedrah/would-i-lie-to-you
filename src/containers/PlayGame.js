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
    statement: PropTypes.string.isRequired,
    enteredTruth: PropTypes.string.isRequired,
    isEnteringTruth: PropTypes.bool.isRequired,
  }
  handleSubmitTruth = truth => {
    this.props.dispatch(submitTruth(truth))
  }
  handleChangeEnteredTruth = truth => {
    this.props.dispatch(changeEnteredTruth(truth))
  }
  render() {
    if (this.props.isEnteringTruth) {
      return (
        <FormEnterTruth
          onChangeEnteredTruth={this.handleChangeEnteredTruth}
          onSubmitTruth={this.handleSubmitTruth}
          enteredTruth={this.props.enteredTruth}
        />
      )
    }
    return <div>{this.props.statement}</div>
  }
}

function mapStateToProps(state) {
  const { playGame } = state
  return {
    statement: playGame.statement,
    isEnteringTruth: playGame.isEnteringTruth,
    enteredTruth: playGame.enteredTruth,
  }
}

export default connect(mapStateToProps)(PlayGame)
