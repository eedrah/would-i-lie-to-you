import firebase from '../firebase'
import {
  POST_LIE_REQUEST,
  POST_LIE_SUCCESS,
  POST_LIE_FAILURE,
} from '../actions.js'

const postLieRequest = () => ({
  type: POST_LIE_REQUEST,
})

const postLieSuccess = () => ({
  type: POST_LIE_SUCCESS,
})

const postLieFailure = () => ({
  type: POST_LIE_FAILURE,
})

const firebasePostLie = lie => {
  const lieRef = firebase.database().ref('lies')
  return lieRef.set({
    id: lieRef.key,
    language: 'en',
    createdUtc: Date.now(),
    statement: lie,
  })
}

export default lie => dispatch => {
  dispatch(postLieRequest())
  return firebasePostLie(lie).then(
    () => dispatch(postLieSuccess()),
    () => dispatch(postLieFailure())
  )
}
