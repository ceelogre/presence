import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase-configs'

export interface Contact {
    name: string,
    email: string,
    message: string,
    createdAt: Date
}

export const addContact = async (contact: Contact) => {
    try {
        const docRef = await addDoc(collection(db, 'contacts'), contact)
        return docRef.id
    } catch (error) {
        console.error("Broken, ", error)
        await addDoc(collection(db, 'contacts'), error)
    }
}