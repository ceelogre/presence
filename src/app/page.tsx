import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Samuel Nishimwe</h1>
        <p className={styles.subtitle}>Software & Devops Engineer </p>
        <h2>I enjoy getting baffled by computers and being amazed at what human brains can accomplish</h2>
        <p className={styles.description}>
          Hi there, I&apos; m Sam, an engineer from Kigali, Rwanda. Nice to meet you :) 
          I build software solutions, lead teams, drive products and write about technology focusing on web development,
          software architecture, developer experience and automation.
          This is my personal website, here you can find my porfolio and if you have a minute, I also write about my non professional life.
        </p>
      </section>
    </div>
  );
}
