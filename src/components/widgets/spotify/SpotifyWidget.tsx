'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './SpotifyWidget.module.css';
import Button from '@/components/Button';

interface Artist {
  name: string
}
interface Album {
  name: string
  image: Array<{url: string, height: number, width: number}>
    
}

interface Track {
  id: string;
  name: string;
  artists: [Artist]
  album: Album
  populatiry: string;
  duration_ms: number;
}

interface SpotifyWidgetProps {
  className?: string;
  token: string
}

export default function SpotifyWidget({ className = '', token }: SpotifyWidgetProps) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  const fetchTopTracks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/spotify/top-tracks', 
        {
          headers: {
            'X-Access-Token': token
          }
    });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch top tracks');
      }
      
      const data = await response.json();
      setTracks(data.items || []);
    } catch (err) {
      console.error('Error fetching top tracks:', err);
      setError(err instanceof Error ? err.message : 'Failed to load tracks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && !hasFetched.current) {
      hasFetched.current = true;
      fetchTopTracks();
    }
  }, [token]);


  if (loading) {
    return (
      <div className={`${styles.widget} ${className}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>Your Top 5 Songs</h3>
          <div className={styles.spotifyIcon}>♪</div>
        </div>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading your top tracks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.widget} ${className}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>Your Top 5 Songs</h3>
          <div className={styles.spotifyIcon}>♪</div>
        </div>
        <div className={styles.error}>
          <p>{error}</p>
          <Button variant='outline' onClick={fetchTopTracks} className={styles.retryButton}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.widget} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Your Top 5 Songs</h3>
        <div className={styles.spotifyIcon}>♪</div>
      </div>
      
      <div className={styles.tracksList}>
        {tracks.map((track, index) => (
          <div key={track.id} className={styles.track}>
            <div className={styles.trackNumber}>
              {index + 1}
            </div>
            <div className={styles.trackInfo}>
              <div className={styles.trackName}>{track.name}</div>
              <div className={styles.trackArtist}>
                {track.artists.map(artist => artist.name).join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.footer}>
        <a 
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.spotifyLink}
        >
          Open in Spotify
        </a>
      </div>
    </div>
  );
}
