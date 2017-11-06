import { combineReducers } from 'redux'
import {
  POST_LIE_REQUEST,
  POST_LIE_SUCCESS,
  POST_LIE_FAILURE,
  GET_LIE_REQUEST,
  GET_LIE_SUCCESS,
  GET_LIE_FAILURE,
  OPEN_ENTER_LIE,
  CLOSE_ENTER_LIE,
  CHANGE_ENTERED_LIE,
  OPEN_PLAY_GAME,
  CLOSE_PLAY_GAME,
} from './actions.js'

const enterLie = (
  state = {
    isActive: false,
    isGettingLie: false,
    isPostingLie: false,
    enteredLie: '',
    errorHasOccurred: false,
  },
  action
) => {
  switch (action.type) {
    case OPEN_ENTER_LIE:
      return {
        ...state,
        isActive: true,
      }
    case CLOSE_ENTER_LIE:
      return {
        ...state,
        isActive: false,
      }
    case CHANGE_ENTERED_LIE:
      return {
        ...state,
        enteredLie: action.lie,
      }
    case POST_LIE_REQUEST:
      return {
        ...state,
        isPostingLie: true,
      }
    case POST_LIE_SUCCESS:
      return {
        ...state,
        isPostingLie: false,
        enteredLie: '',
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

const playGame = (state = { isActive: false, givenLie: '' }, action) => {
  switch (action.type) {
    case OPEN_PLAY_GAME:
      return { ...state, isActive: true }
    case CLOSE_PLAY_GAME:
      return { ...state, isActive: false }
    case GET_LIE_SUCCESS:
      return { ...state, givenLie: action.lie }
    default:
      return state
  }
}

const readRules = (state = { isActive: false }, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  enterLie,
  playGame,
  readRules,
})

export default reducer
