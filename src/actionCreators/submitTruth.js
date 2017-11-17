import { CHANGE_STATEMENT } from '../actions'
import { TRUTH, LIE } from '../enums/statementTypes'

import getLie from './private/getLie'

const decideTruthOrLie = () => {
  if (Math.random() < 0.5) {
    return TRUTH
  } else {
    return LIE
  }
}
export default (truth, ownLie) => dispatch => {
  const statementType = decideTruthOrLie()
  switch (statementType) {
    case TRUTH:
      dispatch({
        type: CHANGE_STATEMENT,
        statement: truth,
      })
      break
    case LIE:
      if (ownLie) {
        dispatch({
          type: CHANGE_STATEMENT,
          statement: ownLie,
        })
      } else {
        dispatch(getLie())
      }
      break
    default:
  }
}
