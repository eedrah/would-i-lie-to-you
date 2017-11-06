import { CHANGE_ENTERED_TRUTH } from '../actions'

export default truth => dispatch => {
  dispatch({
    type: CHANGE_ENTERED_TRUTH,
    truth,
  })
}
