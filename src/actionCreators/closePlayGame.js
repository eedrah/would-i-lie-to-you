import { CLOSE_PLAY_GAME } from '../actions'

export default () => dispatch => {
  dispatch({
    type: CLOSE_PLAY_GAME,
  })
}
