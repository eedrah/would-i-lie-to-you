import { OPEN_READ_RULES } from '../actions'

export default () => dispatch => {
  dispatch({
    type: OPEN_READ_RULES,
  })
}
