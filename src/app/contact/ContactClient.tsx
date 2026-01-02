'use client'
import styles from './contact.module.css';
import { addContact} from './firebase';
import type { Contact } from './firebase';
import { useState, useEffect } from 'react';

export default function ContactClient() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showSuccessAlert) setShowSuccessAlert(false)
        if (showErrorAlert) setShowErrorAlert(false)
      }
    }
    if (showSuccessAlert || showErrorAlert) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [showSuccessAlert, showErrorAlert])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault()
    const contact: Contact = {
      name,
      message,
      email,
      createdAt: new Date()
    }
    try {
      const id = await addContact(contact)
      if (id) setShowSuccessAlert(true)
      else setShowErrorAlert(true)
    } catch {
      setShowErrorAlert(true)
    }
  }
  return (
    <>
      {showSuccessAlert && (
        <div className={styles.modalOverlay} role="presentation" onClick={() => setShowSuccessAlert(false)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button className={styles.modalClose} aria-label="Close" onClick={() => setShowSuccessAlert(false)}>×</button>
            <h2 id="success-title">Thank you!</h2>
            <p>Message received. I will get back to you in due time.</p>
            <div className={styles.modalActions}>
              <button className={styles.submitButton} onClick={() => setShowSuccessAlert(false)}>OK</button>
            </div>
          </div>
        </div>
      )}
      {showErrorAlert && (
        <div className={styles.modalOverlay} role="presentation" onClick={() => setShowErrorAlert(false)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="error-title"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button className={styles.modalClose} aria-label="Close" onClick={() => setShowErrorAlert(false)}>×</button>
            <h2 id="error-title">Something went wrong</h2>
            <p>Uh oh, your message was not sent. Please try again.</p>
            <div className={styles.modalActions}>
              <button className={styles.submitButton} onClick={() => setShowErrorAlert(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.contact}>
        <h1>Contact</h1>
        <div className={styles.contactContent}>
          <p className={styles.contactIntro}>
            Wanna work together or just get in touch? Feel free to reach out.
          </p>
          <div>
            <p>
              <span>Twitter: <a href='https://twitter.com/ceelogre' target='blank'>@ceelogre</a></span><br />
              <span>LinkedIn: <a href='https://linkedin.com/in/ceelogre' target='blank'>Samuel Nishimwe</a></span><br />
              <span>Email: <a href='mailto:whois@duck.com'>whois@duck.com</a></span>
            </p>
            </div>
            <hr />
            <p className={styles.horizontalLigne}>Or</p>
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
    </>
  );
} 