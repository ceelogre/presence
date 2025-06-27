import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Samuel Nishimwe</h1>
        <h2>I enjoy being baffled by computers and being amazed at what human brains can accomplish</h2>
        <p className={styles.subtitle}>Software Engineer & Technical Writer</p>
        <p className={styles.description}>
          Hi there, I&apos; m Sam, a developer from Kigali, Rwanda. Nice to meet you :) 
          I build software solutions and write about technology, focusing on web development,
          software architecture, and developer experience.
          This is my personal website, here you can find my porfolio and if you have a minute, I also write about my non professional life.
        </p>
      </section>
    </div>
  );
}
