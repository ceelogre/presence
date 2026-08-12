'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './ShareButtons.module.css';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(url ?? '');
  const [hasNativeShare, setHasNativeShare] = useState(false);

  useEffect(() => {
    setShareUrl(url ?? window.location.href);
    setHasNativeShare(typeof navigator.share === 'function');
  }, [url]);

  const getShareUrl = useCallback(() => {
    if (url) return url;
    if (typeof window !== 'undefined') return window.location.href;
    return shareUrl;
  }, [url, shareUrl]);

  const handleCopy = async () => {
    const shareUrl = getShareUrl();
    if (!shareUrl) return;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable */
    }
  };

  const handleNativeShare = async () => {
    const shareUrl = getShareUrl();
    if (!shareUrl || !navigator.share) return;

    try {
      await navigator.share({ title, url: shareUrl });
    } catch {
      /* user cancelled or share unavailable */
    }
  };

  const resolvedUrl = getShareUrl();
  const encodedUrl = encodeURIComponent(resolvedUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className={styles.shareButtons}>
      <span className={styles.label}>Share</span>
      <div className={styles.buttonGroup}>
        {hasNativeShare && (
          <button
            type="button"
            className={styles.button}
            onClick={handleNativeShare}
            aria-label="Share article"
          >
            Share
          </button>
        )}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          aria-label="Share on Twitter"
        >
          X
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          aria-label="Share on LinkedIn"
        >
          LinkedIn
        </a>
        <button
          type="button"
          className={styles.button}
          onClick={handleCopy}
          aria-label="Copy link"
        >
          {copied ? 'Copied!' : 'Copy link'}
        </button>
      </div>
    </div>
  );
}
