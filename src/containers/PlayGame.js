import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import styles from './PlayGame.css'

class PlayGame extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    givenLie: PropTypes.string.isRequired,
  }
  render() {
    return <div>{this.props.givenLie + 'hi'}</div>
  }
}

function mapStateToProps(state) {
  const { playGame } = state
  return { givenLie: playGame.givenLie }
}

export default connect(mapStateToProps)(PlayGame)
