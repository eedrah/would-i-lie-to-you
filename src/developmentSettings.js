import firebase from 'firebase'

if (process.env.NODE_ENV !== 'production') {
  window.firebase = firebase
}
