import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//import firebase from './firebase'
import postLie from '../actionCreators/postLie'

import './App.css'
import FormEnterLie from '../components/FormEnterLie'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    ui: PropTypes.shape({
      isPostingLie: PropTypes.bool.isRequired,
      proposedLie: PropTypes.string.isRequired,
      errorHasOccurred: PropTypes.bool.isRequired,
    }),
  }
  //constructor(props) {
  //  super(props)
  //  this.state = { data: '' }
  //  const newNode = firebase
  //    .database()
  //    .ref('/')
  //    .push()
  //  newNode.set({ 'hi there': 'fish' })
  //}
  //componentWillMount() {
  //  firebase
  //    .database()
  //    .ref('/')
  //    .on('value', data => {
  //      this.setState({ data: data.val().length })
  //    })
  //}
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
        <FormEnterLie {...this.props.ui} onSubmitLie={this.handleSubmitLie} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { ui } = state
  return { ui }
}

export default connect(mapStateToProps)(App)
