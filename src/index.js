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

if (process.env.NODE_ENV !== 'production') {
  require('./developmentSettings.js')
}

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(reducer, applyMiddleware(...middleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
