import CardList from '../../components/CardList';

export default function Blog() {
  const articles = [
    {
      title: "How to install a software unavailable with apt",
      description: "A guide to install a software that's not the package manager",
      href: "/blog/howto/install-anydesk/"
    },
    {
      title: "My favorite songs",
      description: "A collection of my favorite songs per artist",
      href: "/blog/favorites/music"
    }
  ];

  return (
    <div className="blog">
      <h1>Thoughts</h1>
      <p>The articles here are mostly technical</p>
      <CardList cards={articles} />
    </div>
  );
} 