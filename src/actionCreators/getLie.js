import firebase from '../firebase'
import getLieCount from './private/getLieCount'
import {
  GET_LIE_REQUEST,
  GET_LIE_SUCCESS,
  GET_LIE_FAILURE,
} from '../actions.js'

const getLieRequest = () => ({
  type: GET_LIE_REQUEST,
})

const getLieSuccess = lie => ({
  type: GET_LIE_SUCCESS,
  lie: lie,
})

const getLieFailure = () => ({
  type: GET_LIE_FAILURE,
})

const firebaseGetLieRefObj = lieCount => {
  const randomLieNumber = Math.floor(Math.random() * lieCount) + 1
  return firebase
    .database()
    .ref('lies')
    .orderByChild('lieCount') // Not really needed - could also use keys
    .startAt(randomLieNumber)
    .limitToFirst(1)
    .once('value')
}

export default () => dispatch => {
  dispatch(getLieRequest())
  return (
    getLieCount()
      .then(lieCount => firebaseGetLieRefObj(lieCount))
      .then(lieObjRef => {
        const lieObj = lieObjRef.val()
        const lie = lieObj[Object.keys(lieObj)[0]]
        dispatch(getLieSuccess(lie.statement))
      }),
    () => dispatch(getLieFailure())
  )
}
