import { CHANGE_OWN_LIE } from '../actions'

export default lie => dispatch => {
  dispatch({
    type: CHANGE_OWN_LIE,
    lie,
  })
}
