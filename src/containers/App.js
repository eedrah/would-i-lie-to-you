import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import openEnterLie from '../actionCreators/openEnterLie'
import closeEnterLie from '../actionCreators/closeEnterLie'
import EnterLie from '../containers/EnterLie'

import './App.css'

class App extends Component {
  static propTypes = {
    isEnteringLie: PropTypes.bool.isRequired,
    isPlayingGame: PropTypes.bool.isRequired,
    isReadingRules: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  handleToggleEnterLie = () => {
    if (this.props.isEnteringLie) {
      this.props.dispatch(closeEnterLie())
    } else {
      this.props.dispatch(openEnterLie())
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Would I Lie To You?</h1>
        </header>
        {/*<p className="App-intro">{this.state.data}</p>*/}
        <h2 onClick={this.handleToggleEnterLie}>
          Enter Lies Into The Database
        </h2>
        {this.props.isEnteringLie ? <EnterLie /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { enterLie, playGame, readRules } = state
  return {
    isEnteringLie: enterLie.isActive,
    isPlayingGame: playGame.isActive,
    isReadingRules: readRules.isActive,
  }
}

export default connect(mapStateToProps)(App)
