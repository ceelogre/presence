import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase-configs'

interface Contact {
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
        await addDoc(collection(db, 'contacts'), error)
    }
}