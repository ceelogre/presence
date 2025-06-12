import styles from './work.module.css';

export default function Work() {
  return (
    <div className={styles.work}>
      <h1>Work</h1>
      <div className={styles.workGrid}>
        <article className={styles.workCard}>
          <h2>Project One</h2>
          <p>A brief description of the project and its impact.</p>
          <div className={styles.techStack}>
            <span>React</span>
            <span>Node.js</span>
            <span>TypeScript</span>
          </div>
        </article>
        <article className={styles.workCard}>
          <h2>Project Two</h2>
          <p>Another project showcasing different skills and technologies.</p>
          <div className={styles.techStack}>
            <span>Next.js</span>
            <span>Python</span>
            <span>AWS</span>
          </div>
        </article>
      </div>
    </div>
  );
} 