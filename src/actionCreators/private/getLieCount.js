import { db } from '../../firebase'

export default () => {
  return new Promise((resolve, reject) => {
    db
      .child('lies')
      .orderByChild('lieCount')
      .limitToLast(1)
      .once('value', lastLieObject => {
        lastLieObject.forEach(lieSnapshot =>
          resolve(lieSnapshot.child('lieCount').val())
        )
      })
  })
}
