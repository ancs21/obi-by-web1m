import firebase from '@firebase/app'
import '@firebase/storage'
import '@firebase/auth'
import '@firebase/firestore'

const config = {
  apiKey: 'BIzaSyA-D0Ey8eWujtqTEmBPbvE1IoXodvQtrRg',
  authDomain: 'tracking-59c9e.firebaseapp.com',
  databaseURL: 'https://tracking-59c9e.firebaseio.com',
  projectId: 'tracking-59c9e',
  storageBucket: 'tracking-59c9e.appspot.com',
  messagingSenderId: '306448410357'
}
firebase.initializeApp(config)
const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)
export default firebase
