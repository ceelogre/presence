'use client';

import { usePathname } from 'next/navigation';
import { getArticleByHref } from '@/lib/articles';
import ShareButtons from './ShareButtons';
import styles from './BlogArticleFooter.module.css';

export default function BlogArticleFooter() {
  const pathname = usePathname();

  if (pathname === '/blog') return null;

  const article = getArticleByHref(pathname);
  if (!article) return null;

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? '';
  const shareUrl = baseUrl ? `${baseUrl}${article.href}` : undefined;

  return (
    <footer className={styles.footer}>
      <div className={styles.tags}>
        {article.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <ShareButtons title={article.title} url={shareUrl} />
    </footer>
  );
}
