import { combineReducers } from 'redux'
import {
  POST_LIE_REQUEST,
  POST_LIE_SUCCESS,
  POST_LIE_FAILURE,
  GET_LIE_REQUEST,
  GET_LIE_FAILURE,
  OPEN_ENTER_LIE,
  CLOSE_ENTER_LIE,
  CHANGE_ENTERED_LIE,
  OPEN_PLAY_GAME,
  CLOSE_PLAY_GAME,
  CHANGE_ENTERED_TRUTH,
  CHANGE_STATEMENT,
  RESET_STATEMENT,
} from './actions.js'

const enterLie = (
  state = {
    isActive: false,
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
    default:
      return state
  }
}

const playGame = (
  state = {
    isActive: false,
    statement: '',
    isEnteringTruth: true,
    enteredTruth: '',
    isGettingLie: false,
    errorHasOccurred: false,
  },
  action
) => {
  switch (action.type) {
    case OPEN_PLAY_GAME:
      return {
        ...state,
        isActive: true,
        isEnteringTruth: true,
      }
    case CLOSE_PLAY_GAME:
      return {
        ...state,
        isActive: false,
        isEnteringTruth: false,
      }
    case CHANGE_ENTERED_TRUTH:
      return {
        ...state,
        enteredTruth: action.truth,
      }
    case GET_LIE_REQUEST:
      return {
        ...state,
        isGettingLie: true,
        isEnteringTruth: false,
      }
    case CHANGE_STATEMENT:
      return {
        ...state,
        isGettingLie: false,
        isEnteringTruth: false,
        statement: action.statement,
      }
    case GET_LIE_FAILURE:
      return {
        ...state,
        isGettingLie: false,
        errorHasOccurred: true,
      }
    case RESET_STATEMENT:
      return {
        ...state,
        isEnteringTruth: true,
      }
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
