import styles from './contact.module.css';
import { Metadata } from 'next';
import { addContact } from './firebase';
import { useState } from 'react';

const [value, setValue] = useState("")
const [result, setResult] = useState("")


const title = "Contact";
const description = "This is the contact page";

export const metadata: Metadata = {
  title: {
    template: `%s - ${title}`,
    default: title
  },
  description,
};

const handleMove = (e: React.FormEvent<HTMLFormElement>) => {
  setValue(e.target.value)
  setResult("")

  }
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
  e.preventDefault()

}
export default function Contact() {
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
            <input type="text" id="name" name="name" onChange={handleMove}required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
} 