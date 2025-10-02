import FavoriteMovies from "./movies";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
    title: "My Favorite Movies",
    description: "A collection of movies that have made an impact on my eyes over the years.",
});

export default function MoviesPage() {
    return <FavoriteMovies />;
}