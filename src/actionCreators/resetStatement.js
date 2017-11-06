import { RESET_STATEMENT } from '../actions'

export default () => dispatch => {
  dispatch({
    type: RESET_STATEMENT,
  })
}
