import { db } from '../../firebase'
import getLieCount from './getLieCount'
import {
  GET_LIE_REQUEST,
  CHANGE_STATEMENT,
  GET_LIE_FAILURE,
} from '../../actions.js'

const getLieRequest = () => ({
  type: GET_LIE_REQUEST,
})

const getLieSuccess = lie => ({
  type: CHANGE_STATEMENT,
  statement: lie,
})

const getLieFailure = () => ({
  type: GET_LIE_FAILURE,
})

const firebaseGetLieRefObj = lieCount => {
  const randomLieNumber = Math.floor(Math.random() * lieCount) + 1
  return db
    .child('lies')
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
