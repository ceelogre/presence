import React from 'react'
import { useState } from 'react'


const FormSubmitSuccess = () => {
    [value, setValue] = useState("")
    [result, setResult] = useState("")

}

const ContactHandler = (event) => {
    event.preventDefault()
    return (
        <div>
            <p>We'll be in touch soon!</p>
        </div>
    )
}

    const handleChange = (e) => {
        setValue(e.target.value)
        setResult("")
    }

export default ContactHandler