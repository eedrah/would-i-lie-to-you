import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducer'

import 'normalize.css'
import './index.css'

let initialState
if (process.env.NODE_ENV !== 'production') {
  // To preload any optional state that is required for development
  // Note that initialState.js is in the gitignore
  const context = require.context('.', false, /^\.\/initialState\.js$/)
  if (~context.keys().indexOf('./initialState.js')) {
    initialState = context('./initialState.js').default
  }

  require('./developmentSettings.js')
}

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
