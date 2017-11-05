import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import postLie from '../actionCreators/postLie'
import getLie from '../actionCreators/getLie'

import './App.css'
import FormEnterLie from '../components/FormEnterLie'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    ui: PropTypes.shape({
      isPostingLie: PropTypes.bool.isRequired,
      enteredLie: PropTypes.string.isRequired,
      errorHasOccurred: PropTypes.bool.isRequired,
    }),
    givenLie: PropTypes.string.isRequired,
  }
  componentWillMount() {
    this.props.dispatch(getLie())
  }
  handleSubmitLie = lie => {
    this.props.dispatch(postLie(lie))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<p className="App-intro">{this.state.data}</p>*/}
        <h2>{this.props.givenLie}</h2>
        <FormEnterLie {...this.props.ui} onSubmitLie={this.handleSubmitLie} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { ui, data } = state
  return { ui, givenLie: data.givenLie }
}

export default connect(mapStateToProps)(App)
