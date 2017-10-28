import React from 'react'
import { render } from 'react-dom'
import { createStore, ApplyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducer'

import './index.css'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(reducer, ApplyMiddleware(...middleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
