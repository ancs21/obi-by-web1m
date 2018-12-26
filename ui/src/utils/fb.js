import firebase from '@firebase/app'
import '@firebase/storage'
import '@firebase/auth'
import '@firebase/firestore'

const config = {

}
firebase.initializeApp(config)
const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)
export default firebase
