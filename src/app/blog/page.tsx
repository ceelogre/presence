import { createMetadata } from '@/lib/metadata';
import CardList from '../../components/CardList';
import styles from './blog.module.css';

/**
 * Blog page
 * @returns {JSX.Element}
 */
const title = "Blog";
const description = "Welcome to my Articles collection. They represent a wide variety of interests but most are technical. Take a pick.";

export const metadata = createMetadata({
  title,
  description,
});

export default function Blog() {
  const articles = [
    {
      title: "How to install a software unavailable with apt",
      description: "A guide to install a software that's not in the package manager repository",
      href: "/blog/howto/install-anydesk/"
    },
    {
      title: "My favorite songs",
      description: "A collection of my favorite songs per artist",
      href: "/blog/favorites/music"
    },
    {
      title: "Bash output manipulation",
      description: "A guide to manipulating bash output",
      href: "/blog/bash-manipulation"
    },
    {
      title: "Installing Beyond Identity",
      description: "How to install Beyond Identity on Kali Linux",
      href: "/blog/beyond-identity"
    },
    {
      title: "Git reset author",
      description: "A guide to resetting the author of a commit",
      href: "/blog/git-author"
    },
    {
      title: "My favorite movies",
      description: "A collection of movies that have made an impact on my eyes over the years.",
      href: "/blog/favorites/movies"
    },
    {
      title: "Changing remote",
      description: "How to change the remote origin of a repo",
      href: "/blog/howto/change-git-remote"
    },
    {
     title: "Nodejs deployment on Heroku",
     description: "How to deploy and run tests successfully of an app on Heroku",
     href: "/blog/howto/heroku"
    },
    {
    title: "Bash output redirection",
    description: "A guide to redirecting bash output",
    href: "/blog/bash-output-redirect"
    },
    {
      title: 'Date updating with static builds',
      description: "How to update dates when using build tools",
      href: "/blog/builds-date-handling"
    },
    {
      title: "Installing .appImage file",
      description: "How to install an app image file",
      href: "/blog/howto/app-image-install"
      
    }
  ];

  return (
    <div className="blog">
      <div className={styles.blogHeader}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <CardList cards={articles} />
    </div>
  );
} 