import firebase from '../firebase'
import getLieCount from './private/getLieCount'
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

const firebasePostLie = (lie, lieCount) => {
  const lieRef = firebase
    .database()
    .ref('lies')
    .push()
  console.log(lieCount)
  return lieRef.set({
    id: lieRef.key,
    language: 'en',
    createdUtc: Date.now(),
    statement: lie,
    lieCount: lieCount + 1,
  })
}

export default lie => dispatch => {
  dispatch(postLieRequest())
  return getLieCount()
    .then(lieCount => firebasePostLie(lie, lieCount))
    .then(() => dispatch(postLieSuccess()), () => dispatch(postLieFailure()))
}
