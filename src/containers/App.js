import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Title from '../components/Title'
import Banner from '../components/Banner'

import openPlayGame from '../actionCreators/openPlayGame'
import closePlayGame from '../actionCreators/closePlayGame'
import PlayGame from './PlayGame'

import openEnterLie from '../actionCreators/openEnterLie'
import closeEnterLie from '../actionCreators/closeEnterLie'
import EnterLie from './EnterLie'

import styles from './App.css'
import PageTitleImage from '../images/PageTitleImage-1280-720.jpg'

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
  handleTogglePlayGame = () => {
    if (this.props.isPlayingGame) {
      this.props.dispatch(closePlayGame())
    } else {
      this.props.dispatch(openPlayGame())
    }
  }
  render() {
    return (
      <div className={styles.base}>
        <Title />
        <header>
          <img src={PageTitleImage} alt="Would I Lie To You?" />
        </header>
        <Banner direction="left">
          <h2 onClick={this.handleTogglePlayGame}>Play The Game</h2>
        </Banner>
        {this.props.isPlayingGame ? <PlayGame /> : null}
        <Banner direction="right">
          <h2 onClick={this.handleToggleEnterLie}>
            Enter Lies Into The Database
          </h2>
        </Banner>
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
