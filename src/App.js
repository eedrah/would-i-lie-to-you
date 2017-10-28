import React, { Component } from 'react'
import firebase from './firebase'
import './App.css'
import FormEnterLie from './FormEnterLie'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: '' }
    const newNode = firebase
      .database()
      .ref('/')
      .push()
    newNode.set({ 'hi there': 'fish' })
  }
  componentWillMount() {
    firebase
      .database()
      .ref('/')
      .on('value', data => {
        this.setState({ data: data.val().length })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
        <FormEnterLie />
      </div>
    )
  }
}

export default App
