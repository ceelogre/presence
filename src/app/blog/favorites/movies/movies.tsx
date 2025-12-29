'use client';

import MovieCard from '../../../../components/MovieCard';

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

export default function FavoriteMovies() {
  const favs: Movie[] = [
        {
            title: "The Matrix Trilogy",
            year: "1999-2003",
            rating: 8.7,
            description: "A sci-fi film about a hacker who discovers that the world he knows is a simulation.",
            director: "The Wachowskis",
            actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            genre: "Sci-Fi",
            comment: "The trilogy was ahead of its time. First time watching didn't make much sense apart from fast moving humans and bullet stoppers. Overtime, I appreaciated the effects, the characters and the way it kept my eyes on screen throughout.",
            image: "/assets/matrix-trilogy.jpg",
            link: "https://www.imdb.com/title/tt0133093/"
        },
        {
            title: "Batman trilogy",    
            year: "2005-2012",
            rating: 8.7,
            description: "A superhero film about a vigilante who fights crime in Gotham City.",
            director: "Christopher Nolan",
            actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
            genre: "Action",
            comment: "I watched this much later in life. I already had a solid understanding of film making and so, it was easy to appreciate how The Joker was a maniac. His actions gave me chills; it's hard to forget the head to head or rather car to bike scene against Batman on the highway. The music was also another great one for me.",
            image: "/assets/batman-trilogy.jpg",
            link: "https://www.imdb.com/title/tt0133093/"
        },
        {
            title: "Don't breathe",
            year: "2016",
            rating: 7.1,
            description: "A suspenseful horror thriller where a group of friends break into a blind man's house, only to discover he is far more dangerous than he seems.",
            director: "Fede Álvarez",
            actors: ["Stephen Lang", "Jane Levy", "Dylan Minnette"],
            genre: "Horror/Thriller",
            comment: "As the name suggest, I didn't breathe from the moment robbers entered the house, I was at the sofa edge the entire time. The tension builds brilliantly and Stephen Lang's performance is from out of this world, make the story unforgettable.",
            image: "/assets/dont-breathe.jpg",
            link: "https://www.imdb.com/title/tt4160708/"
        }
    ]

  return (
    <div>
        {favs.map((movie, index) => (
            <MovieCard 
                key={index} 
                movie={movie}
            />
        ))}
    </div>
  );
}
