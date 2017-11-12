import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Title from '../components/Title'
import Tile from '../components/Tile'
import Banner from '../components/Banner'

import openReadRules from '../actionCreators/openReadRules'
import closeReadRules from '../actionCreators/closeReadRules'
import ReadRules from '../components/ReadRules'

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
  handleToggleReadRules = () => {
    if (this.props.isReadingRules) {
      this.props.dispatch(closeReadRules())
    } else {
      this.props.dispatch(openReadRules())
    }
  }
  render() {
    return (
      <div className={styles.base}>
        <Title />
        <header>
          <img src={PageTitleImage} alt="Would I Lie To You?" />
        </header>
        <Banner onClick={this.handleToggleReadRules}>Read The Rules</Banner>
        <Tile>{this.props.isReadingRules ? <ReadRules /> : null}</Tile>
        <Banner onClick={this.handleTogglePlayGame}>Play The Game</Banner>
        <Tile>{this.props.isPlayingGame ? <PlayGame /> : null}</Tile>
        <Banner onClick={this.handleToggleEnterLie}>
          Enter Lies Into The Database
        </Banner>
        <Tile>{this.props.isEnteringLie ? <EnterLie /> : null}</Tile>
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
