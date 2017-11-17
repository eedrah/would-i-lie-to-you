import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

import submitTruth from '../actionCreators/submitTruth'
import changeEnteredTruth from '../actionCreators/changeEnteredTruth'
import resetStatement from '../actionCreators/resetStatement'
import toggleChooseOwnLie from '../actionCreators/toggleChooseOwnLie'

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
  }
  handleSubmitTruth = truth => {
    this.props.dispatch(submitTruth(truth))
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
  render() {
    if (this.props.isEnteringTruth) {
      return (
        <div>
          <FormEnterTruth
            onChangeEnteredTruth={this.handleChangeEnteredTruth}
            onSubmitTruth={this.handleSubmitTruth}
            enteredTruth={this.props.enteredTruth}
          />
          <Button.Group>
            <Button
              active={this.props.isChoosingOwnLie}
              onClick={
                this.props.isChoosingOwnLie
                  ? null
                  : this.handleToggleChooseOwnLie
              }
            >
              Use your own lie
            </Button>
            <Button.Or />
            <Button
              active={!this.props.isChoosingOwnLie}
              onClick={
                !this.props.isChoosingOwnLie
                  ? null
                  : this.handleToggleChooseOwnLie
              }
            >
              Use a lie from the database
            </Button>
          </Button.Group>
        </div>
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
  }
}

export default connect(mapStateToProps)(PlayGame)
