import React, { Component } from 'react'
import PropTypes from 'prop-types'

import submitTruth from '../actionCreators/submitTruth'
import changeEnteredTruth from '../actionCreators/changeEnteredTruth'
import resetStatement from '../actionCreators/resetStatement'
import toggleChooseOwnLie from '../actionCreators/toggleChooseOwnLie'
import changeOwnLie from '../actionCreators/changeOwnLie'

import FormEnterTruth from '../components/FormEnterTruth'
import FormDisplayStatement from '../components/FormDisplayStatement'
import Loading from '../components/Loading'

import { connect } from 'react-redux'
//import styles from './PlayGame.css'

class PlayGame extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    statement: PropTypes.string.isRequired,
    enteredTruth: PropTypes.string.isRequired,
    isEnteringTruth: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isChoosingOwnLie: PropTypes.bool.isRequired,
    ownLie: PropTypes.string.isRequired,
  }
  handleSubmitTruth = (truth, ownLie) => {
    console.log('hi', truth, ownLie)
    this.props.dispatch(submitTruth(truth, ownLie))
  }
  handleChangeEnteredTruth = truth => {
    this.props.dispatch(changeEnteredTruth(truth))
  }
  handleReset = () => {
    this.props.dispatch(resetStatement())
  }
  handleToggleChooseOwnLie = () => {
    this.props.dispatch(toggleChooseOwnLie())
  }
  handleChangeOwnLie = lie => {
    this.props.dispatch(changeOwnLie(lie))
  }
  render() {
    if (this.props.isEnteringTruth) {
      return (
        <FormEnterTruth
          onChangeEnteredTruth={this.handleChangeEnteredTruth}
          onSubmitTruth={this.handleSubmitTruth}
          enteredTruth={this.props.enteredTruth}
          isChoosingOwnLie={this.props.isChoosingOwnLie}
          onToggleChooseOwnLie={this.handleToggleChooseOwnLie}
          ownLie={this.props.ownLie}
          onChangeOwnLie={this.handleChangeOwnLie}
        />
      )
    }
    if (this.props.isLoading) {
      return <Loading />
    }
    return (
      <FormDisplayStatement
        statement={this.props.statement}
        onReset={this.handleReset}
      />
    )
  }
}

function mapStateToProps(state) {
  const { playGame } = state
  return {
    statement: playGame.statement,
    isEnteringTruth: playGame.isEnteringTruth,
    enteredTruth: playGame.enteredTruth,
    isLoading: playGame.isLoading,
    isChoosingOwnLie: playGame.isChoosingOwnLie,
    ownLie: playGame.ownLie,
  }
}

export default connect(mapStateToProps)(PlayGame)
