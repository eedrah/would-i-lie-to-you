import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAwW5iM1BMVEVIxCU0YqfgdcpN63yY9eSQ',
  authDomain: "would-i-lie-to-you.firebaseapp.com",
  databaseURL: "https://would-i-lie-to-you.firebaseio.com",
  projectId: "would-i-lie-to-you",
  storageBucket: "would-i-lie-to-you.appspot.com",
  messagingSenderId: "603803020922"
})

export default firebase     
