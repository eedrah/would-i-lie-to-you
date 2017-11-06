import { CHANGE_STATEMENT } from '../actions'
import { TRUTH, LIE } from '../enums/statementTypes'

import getLie from './private/getLie';

const decideTruthOrLie = () => {
  if (Math.random() < 0.5) {
    return TRUTH
  } else {
    return LIE
  }
}
export default truth => dispatch => {
  const statementType = decideTruthOrLie()
  switch (statementType) {
    case TRUTH:
      dispatch({
        type: CHANGE_STATEMENT,
        statement: truth,
      })
    case LIE:
      getLie()
  }
}
