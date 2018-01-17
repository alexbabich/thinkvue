import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyDBoc9qh-tM0nJmUQSYq3h4_Zxxq3WBrdM',
  authDomain: 'e-app-68abd.firebaseapp.com',
  databaseURL: 'https://e-app-68abd.firebaseio.com',
  projectId: 'e-app-68abd',
  storageBucket: 'e-app-68abd.appspot.com',
  messagingSenderId: '497558483400'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
export let appRef = db.ref('StoreInfo')
