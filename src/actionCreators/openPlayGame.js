import { OPEN_PLAY_GAME } from '../actions'

export default () => dispatch => {
  dispatch({
    type: OPEN_PLAY_GAME,
  })
}
