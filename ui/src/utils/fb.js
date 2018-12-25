import firebase from '@firebase/app'
import '@firebase/storage'
import '@firebase/auth'

const config = {
  apiKey: 'AIzaSyA-D0Ey8eWujtqTEmBPbvE1IoXodvQtrRg',
  authDomain: 'tracking-59c9e.firebaseapp.com',
  databaseURL: 'https://tracking-59c9e.firebaseio.com',
  projectId: 'tracking-59c9e',
  storageBucket: 'tracking-59c9e.appspot.com',
  messagingSenderId: '306448410357'
}
firebase.initializeApp(config)

export default firebase
