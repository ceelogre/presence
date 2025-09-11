import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig  = {
    apiKey: ""
}

const app = initializeApp(firebaseConfig)
const storage = getFirestore(app)
const analytics = getAnalytics(app)

export { storage, analytics}
