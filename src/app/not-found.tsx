import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Link href="/">Return Home</Link>

            <h1>Page Not Found</h1>
            <p>We went looking everywhere but couldn&apos;t find the page you&apos;re looking for.</p>
            <Link href="/">Perhaps, go back to the homepage?</Link>
    </div>
  );
} 