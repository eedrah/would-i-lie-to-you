import { CLOSE_READ_RULES } from '../actions'

export default () => dispatch => {
  dispatch({
    type: CLOSE_READ_RULES,
  })
}
