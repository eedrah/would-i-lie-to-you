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
  IS_LOADING,
  OPEN_READ_RULES,
  CLOSE_READ_RULES,
  TOGGLE_CHOOSE_OWN_LIE,
  CHANGE_OWN_LIE,
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
    case OPEN_PLAY_GAME:
    case OPEN_READ_RULES:
      return {
        ...state,
        isActive: false,
      }
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
    isLoading: false,
    isChoosingOwnLie: false,
    ownLie: '',
  },
  action
) => {
  switch (action.type) {
    case OPEN_ENTER_LIE:
    case OPEN_READ_RULES:
      return {
        ...state,
        isActive: false,
      }
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
        isLoading: true,
      }
    case CHANGE_STATEMENT:
      return {
        ...state,
        isGettingLie: false,
        isEnteringTruth: false,
        statement: action.statement,
        isLoading: false,
      }
    case GET_LIE_FAILURE:
      return {
        ...state,
        isGettingLie: false,
        errorHasOccurred: true,
        isLoading: false,
      }
    case RESET_STATEMENT:
      return {
        ...state,
        isEnteringTruth: true,
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
        isEnteringTruth: false,
      }
    case TOGGLE_CHOOSE_OWN_LIE:
      return {
        ...state,
        isChoosingOwnLie: !state.isChoosingOwnLie,
      }
    case CHANGE_OWN_LIE:
      return {
        ...state,
        ownLie: state.lie,
      }
    default:
      return state
  }
}

const readRules = (state = { isActive: false }, action) => {
  switch (action.type) {
    case OPEN_PLAY_GAME:
    case OPEN_ENTER_LIE:
      return {
        ...state,
        isActive: false,
      }
    case OPEN_READ_RULES:
      return {
        ...state,
        isActive: true,
      }
    case CLOSE_READ_RULES:
      return {
        ...state,
        isActive: false,
      }
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
