import { CHANGE_ENTERED_LIE } from '../actions'

export default lie => dispatch => {
  dispatch({
    type: CHANGE_ENTERED_LIE,
    lie,
  })
}
