import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import changeEnteredLie from '../actionCreators/changeEnteredLie'
import postLie from '../actionCreators/postLie'

import './App.css'
import FormEnterLie from '../components/FormEnterLie'

class App extends Component {
  static propTypes = {
    isPostingLie: PropTypes.bool.isRequired,
    enteredLie: PropTypes.string.isRequired,
    errorHasOccurred: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  handleSubmitLie = lie => {
    this.props.dispatch(postLie(lie))
  }
  handleChangeEnteredLie = lie => {
    this.props.dispatch(changeEnteredLie(lie))
  }
  render() {
    return (
      <FormEnterLie
        isPostingLie={this.props.isPostingLie}
        enteredLie={this.props.enteredLie}
        errorHasOccurred={this.props.errorHasOccurred}
        onSubmitLie={this.handleSubmitLie}
        onChangeEnteredLie={this.handleChangeEnteredLie}
      />
    )
  }
}

const mapStateToProps = state => {
  const { enterLie } = state
  //const { isPostingLie, enteredLie, errorHasOccurred, } = enterLie
  return { ...enterLie }
}

export default connect(mapStateToProps)(App)
