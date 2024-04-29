import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig  = {
    apiKey: "AIzaSyDUrqEOJOwAtinrBD3M_AUMjFo-f_DJD_0",
    authDomain: "ceelogre.firebaseapp.com",
    projectId: "ceelogre",
    storageBucket: "ceelogre.appspot.com",
    messagingSenderId: "712900133669",
    appId: "1:712900133669:web:48d663656671f6278910cc",
    measurementId: "G-4Q9F6JXYPX"
}

const app = initializeApp(firebaseConfig)
const storage = getFirestore(app)
const analytics = getAnalytics(app)

export { storage, analytics}