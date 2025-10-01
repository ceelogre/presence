import Link from 'next/link';
import styles from './work.module.css';

export default function Work() {
  return (
    <div className={styles.work}>
      <h1>Projects</h1>
      <div className={styles.workGrid}>
        <article className={styles.workCard}>
          <h2>Spotlight Calculator</h2>
          <p>A simple Linux calculator that uses the Mac Spotlight-style interface.</p>
          <Link href="https://github.com/ceelogre/spotlight-calculator" target="_blank">
            <button>View on GitHub</button>
          </Link>
        </article>
      </div>
    </div>
  );
} 