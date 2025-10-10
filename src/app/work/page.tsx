import Link from 'next/link';
import styles from './work.module.css';
import Button from '@/components/Button';
import { createMetadata } from '@/lib/metadata';

import SpotifyClient from "./spotifyClient"

export const metadata = createMetadata({
  title: "Work",
  description: "My work experience",
});

export default async function Work() {
  return (
    <div className={styles.work}>
      <h1>Projects</h1>
      <div className={styles.workGrid}>
        <article className={styles.workCard}>
          <h2>Spotlight Calculator</h2>
          <p>A simple Linux calculator that uses the Mac Spotlight-style interface.</p>
          <Link href="https://github.com/ceelogre/spotlight-calculator" target="_blank">
            <Button>View on GitHub</Button>
          </Link>
        </article>
        <article className={styles.workCard}>
          <h2>Spotify top 5</h2>
          <p>Are you into Spotify? Find out your top 5 songs this month</p>
          <SpotifyClient />
        </article>
      </div>
    </div>
  );
} 