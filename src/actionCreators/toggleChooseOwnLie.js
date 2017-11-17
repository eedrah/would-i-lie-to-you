import { TOGGLE_CHOOSE_OWN_LIE } from '../actions'

export default () => dispatch => {
  dispatch({
    type: TOGGLE_CHOOSE_OWN_LIE,
  })
}
