import { createMetadata } from '@/lib/metadata';
import { articles } from '@/lib/articles';
import BlogCardList from '@/components/BlogCardList';
import styles from './blog.module.css';

const title = 'Blog';
const description =
  'Welcome to my Articles collection. They represent a wide variety of interests but most are technical. Take a pick.';

export const metadata = createMetadata({
  title,
  description,
});

export default function Blog() {
  return (
    <div className="blog">
      <div className={styles.blogHeader}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <BlogCardList articles={articles} />
    </div>
  );
}
