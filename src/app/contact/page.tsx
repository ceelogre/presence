'use client'
import styles from './contact.module.css';
import { addContact} from './firebase';
import type { Contact } from './firebase';
import { useState } from 'react';



export default function Contact() {

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault()
    const contact: Contact = {
      name,
      message,
      email,
      createdAt: new Date()
    }
    await addContact(contact)
  }
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.contactContent}>
        <p className={styles.contactIntro}>
          Wanna work together or just get in touch? Feel free to reach out.
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={(e) => { setName(e.currentTarget.value)} } required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={(e) => { setEmail(e.currentTarget.value)} } required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea onChange={ (e) => { setMessage(e.currentTarget.value) } } rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
} 