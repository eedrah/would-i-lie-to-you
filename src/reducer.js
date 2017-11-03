import { combineReducers } from 'redux'
import {
  POST_LIE_REQUEST,
  POST_LIE_SUCCESS,
  POST_LIE_FAILURE,
  GET_LIE_REQUEST,
  GET_LIE_SUCCESS,
  GET_LIE_FAILURE,
} from './actions.js'

const ui = (
  state = {
    isGettingLie: false,
    isPostingLie: false,
    proposedLie: '',
    errorHasOccurred: false,
  },
  action
) => {
  switch (action.type) {
    case POST_LIE_REQUEST:
      return {
        ...state,
        isPostingLie: true,
      }
    case POST_LIE_SUCCESS:
      return {
        ...state,
        isPostingLie: false,
        proposedLie: '',
      }
    case POST_LIE_FAILURE:
      return {
        ...state,
        isPostingLie: false,
        errorHasOccurred: true,
      }
    case GET_LIE_REQUEST:
      return {
        ...state,
        isGettingLie: true,
      }
    case GET_LIE_SUCCESS:
      return {
        ...state,
        isGettingLie: false,
      }
    case GET_LIE_FAILURE:
      return {
        ...state,
        isGettingLie: false,
        errorHasOccurred: true,
      }
    default:
      return state
  }
}

const data = (state = { givenLie: '' }, action) => {
  switch (action.type) {
    case GET_LIE_SUCCESS:
      return { ...state, givenLie: action.lie }
    default:
      return state
  }
}
const reducer = combineReducers({
  ui,
  data,
})

export default reducer
