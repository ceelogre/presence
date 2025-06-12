import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.contactContent}>
        <p className={styles.contactIntro}>
          Have a question or want to work together? Feel free to reach out.
        </p>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
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