import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'twitter-clone-50301.firebaseapp.com',
  projectId: 'twitter-clone-50301',
  storageBucket: 'twitter-clone-50301.appspot.com',
  messagingSenderId: '165199376441',
  appId: '1:165199376441:web:cf56dcdbb9dd81d8625de8',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
