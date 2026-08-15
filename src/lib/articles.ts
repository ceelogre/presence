export interface Article {
  title: string;
  description: string;
  href: string;
  tags: string[];
  publishedAt: string;
}

export const articles: Article[] = [
  {
    title: 'How to install a software unavailable with apt',
    description: "A guide to install a software that's not in the package manager repository",
    href: '/blog/howto/install-anydesk/',
    tags: ['linux', 'howto', 'apt'],
    publishedAt: '2022-10-02',
  },
  {
    title: 'My favorite songs',
    description: 'A collection of my favorite songs per artist',
    href: '/blog/favorites/music',
    tags: ['favorites', 'music', 'personal'],
    publishedAt: '2021-03-10',
  },
  {
    title: 'Bash output manipulation',
    description: 'A guide to manipulating bash output',
    href: '/blog/bash-manipulation',
    tags: ['bash', 'linux', 'shell'],
    publishedAt: '2024-08-13',
  },
  {
    title: 'Installing Beyond Identity',
    description: 'How to install Beyond Identity on Kali Linux',
    href: '/blog/beyond-identity',
    tags: ['linux', 'howto', 'security'],
    publishedAt: '2022-02-01',
  },
  {
    title: 'Git reset author',
    description: 'A guide to resetting the author of a commit',
    href: '/blog/git-author',
    tags: ['git', 'howto'],
    publishedAt: '2024-11-22',
  },
  {
    title: 'My favorite movies',
    description: 'A collection of movies that have made an impact on my eyes over the years.',
    href: '/blog/favorites/movies',
    tags: ['favorites', 'movies', 'personal'],
    publishedAt: '2022-01-18',
  },
  {
    title: 'Changing remote',
    description: 'How to change the remote origin of a repo',
    href: '/blog/howto/change-git-remote',
    tags: ['git', 'howto'],
    publishedAt: '2023-04-09',
  },
  {
    title: 'Nodejs deployment on Heroku',
    description: 'How to deploy and run tests successfully of an app on Heroku',
    href: '/blog/howto/heroku',
    tags: ['nodejs', 'deployment', 'heroku', 'howto'],
    publishedAt: '2021-01-11',
  },
  {
    title: 'Bash output redirection',
    description: 'A guide to redirecting bash output',
    href: '/blog/bash-output-redirect',
    tags: ['bash', 'linux', 'shell'],
    publishedAt: '2024-01-11',
  },
  {
    title: 'Date updating with static builds',
    description: 'How to update dates when using build tools',
    href: '/blog/howto/builds-date-handling',
    tags: ['nextjs', 'javascript', 'howto'],
    publishedAt: '2026-01-02',
  },
  {
    title: 'Installing .appImage file',
    description: 'How to install an app image file',
    href: '/blog/howto/app-image-install',
    tags: ['linux', 'howto', 'desktop'],
    publishedAt: '2026-03-25',
  },
];

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  for (const article of articles) {
    for (const tag of article.tags) {
      tagSet.add(tag);
    }
  }
  return [...tagSet].sort();
}

export function getArticleByHref(href: string): Article | undefined {
  const normalized = href.replace(/\/$/, '');
  return articles.find(
    (article) => article.href.replace(/\/$/, '') === normalized
  );
}

export function formatPublishedDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
