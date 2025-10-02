import FavoriteMusic from './music';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: "My Favorite Songs",
  description: "A collection of songs that have had an impact on my ears over the years.",
});

const MusicPage = () => {
  return (
    <FavoriteMusic />
  )
}

export default MusicPage;