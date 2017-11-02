import firebase from '../../firebase'

export default () => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref('lies')
      .orderByChild('lieCount')
      .limitToLast(1)
      .once('value', lastLieObject => {
        lastLieObject.forEach(lieSnapshot =>
          resolve(lieSnapshot.child('lieCount').val())
        )
      })
  })
}
