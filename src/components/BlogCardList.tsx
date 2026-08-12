'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Article,
  formatPublishedDate,
  getAllTags,
} from '@/lib/articles';
import styles from './BlogCardList.module.css';

interface BlogCardListProps {
  articles: Article[];
}

function matchesQuery(article: Article, query: string): boolean {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;

  return (
    article.title.toLowerCase().includes(normalized) ||
    article.description.toLowerCase().includes(normalized) ||
    article.tags.some((tag) => tag.toLowerCase().includes(normalized))
  );
}

export default function BlogCardList({ articles }: BlogCardListProps) {
  const allTags = useMemo(() => getAllTags(), []);
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((current) =>
      current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag]
    );
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      if (!matchesQuery(article, query)) return false;
      if (activeTags.length === 0) return true;
      return activeTags.every((tag) => article.tags.includes(tag));
    });
  }, [articles, query, activeTags]);

  return (
    <div className={styles.blogList}>
      <div className={styles.controls}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search articles by title, description, or tag…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search articles"
        />

        <div className={styles.tagFilters} role="group" aria-label="Filter by tag">
          {allTags.map((tag) => {
            const isActive = activeTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                className={`${styles.tagFilter} ${isActive ? styles.tagFilterActive : ''}`}
                onClick={() => toggleTag(tag)}
                aria-pressed={isActive}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {(query || activeTags.length > 0) && (
          <p className={styles.resultCount}>
            {filteredArticles.length} of {articles.length} articles
          </p>
        )}
      </div>

      {filteredArticles.length === 0 ? (
        <p className={styles.emptyState}>No articles match your search.</p>
      ) : (
        <div className={styles.cardList}>
          {filteredArticles.map((article) => (
            <Link key={article.href} href={article.href} className={styles.card}>
              <div className={styles.cardMeta}>
                <time dateTime={article.publishedAt}>
                  {formatPublishedDate(article.publishedAt)}
                </time>
              </div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <div className={styles.cardTags}>
                {article.tags.map((tag) => (
                  <span key={tag} className={styles.cardTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
