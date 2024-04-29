import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { storage } from '../../utils/firebase'

const useContactForm = () => {
    [value, setValue] = useState("")
    [result, setResult] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
        setResult("")
    }

const handleSubmit = async (event) => {
    event.preventDefault()

    try {
        await addDoc(collection(storage, 'contacts', result))
    } catch (e){
        await addDoc(collection(storage, 'errors', e))
    }
    return (
        <div>
            <p>We'll be in touch soon!</p>
        </div>
    )
}

    return { handleSubmit, handleChange}

}

export default useContactForm