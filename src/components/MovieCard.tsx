import styles from './MovieCard.module.css';
import Image from 'next/image';

interface Movie {
  title: string;
  year: string;
  rating: number;
  description: string;
  image: string;
  link: string;
  director: string;
  actors: string[];
  genre: string;
  comment: string;
}

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className={styles.movieCard} >
      <div className={styles.imageContainer}>
        {movie.image ? (
          <Image 
            src={movie.image as string} 
            alt={`${movie.title} movie poster`}
            className={styles.movieImage}
            loading="lazy"
            width={100}
            height={100}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="none">
              <path 
                d="M4 6H20V18H4V6ZM2 4V20H22V4H2ZM6 8H18V16H6V8Z" 
                fill="currentColor"
              />
            </svg>
          </div>
        )}
        <div className={styles.ratingBadge}>
          <span className={styles.ratingValue}>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className={styles.movieInfo}>
        <div className={styles.movieHeader}>
          <h3 className={styles.movieTitle}>{movie.title}</h3>
          <span className={styles.movieYear}>{movie.year}</span>
        </div>
        
        <div className={styles.movieMeta}>
          <span className={styles.director}>Dir: {movie.director}</span>
        </div>
        
        <div className={styles.genreTag}>
          {movie.genre}
        </div>
        
        <p className={styles.movieDescription}>
          {movie.description}
        </p>
        
        <div className={styles.actorsList}>
          <span className={styles.actorsLabel}>Cast: </span>
          <span className={styles.actors}>{movie.actors.join(', ')}</span>
        </div>
        
        {movie.comment && (
          <div className={styles.comment}>
            <span className={styles.commentLabel}>My take: </span>
            <span className={styles.commentText}>{movie.comment}</span>
          </div>
        )}
        
        <a 
          href={movie.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.imdbLink}
          onClick={(e) => e.stopPropagation()}
        >
          View on IMDB →
        </a>
      </div>
    </article>
  );
}
