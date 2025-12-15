'use client';

import styles from './music.module.css';
interface Song {
  artist: string;
  song: string;
  feat?: string | string[];
}
export default function FavoriteMusic() {
  const favs: Song[] = [
        {
            artist: "Mike Will Made it",
            song: "23"
        },
        {
            artist: "Post Malone",
            song: "Candy Paint"
        },
        {
            artist: "The Chain Smokers",
            song: "Last day alive"
        },
        {
            artist: "Petit Biscuit",
            song: "Drivin Thru the Night"
        },
        {
            artist: "Travis Scott",
            song: "Highest in the room"
        },
        {
            artist: "Miley Cyrus",
            song: "Adore you"
        },
        {
            artist: "Migos",
            song: "T-shirt"
        },
        {
            artist: "Missy Eliott",
            song: "Get your freak on"
        },
        {
            artist: "Beyonce",
            song: "Video Phone"
        },
        {
            artist: "Lady Gaga",
            song: "Paparazzi"
        },
        {
            artist: "The Weeknd",
            song: "Earned it"
        },
        {
            artist: "Bazzi",
            song: "Young and Alive"
        },
        {
            artist: "Cardi B",
            song: "Bodak yellow",
            feat: "Kodak Black"
        },
        {
            artist: "Juicy J",
            song: "Bounce",
            feat: [
                "Trey Songz",
                "Wale"
            ]
        },
        {
            artist: "Linkin Park",
            song: "Roads untraveled"
        },
        {
            artist: "PNL",
            song: "Ryuk"
        },
        {
            artist: "Jack U",
            song: "Where are u now",
            feat: [
                "Skrilles",
                "Diplo",
                "Justin Bieber"
            ]
        },
        {
            artist: "Afrojack",
            song: "Another life",
            feat: [
                "David Guetta", "Ester Dean"
            ]
        },
        {
            artist: "Tory Lanez",
            song: "Say it"
        },
        {
            artist: "T.I",
            song: "What's up"
        },
        {
            artist: "One Republic",
            song:"Let's hurt tonight"
        },
        {
            artist: "Ed Sheeran",
            song: "Castle on the hill"
        },
        {
            artist: 'Kelly Rowland',
            song: 'Like this',
            feat: 'Eve'
        },
        {
            artist: 'Twenty One Pilots',
            song: 'Heathens'
        },
        {
            artist: 'Nicki Minaj',
            song: 'Barbie Dreams'
        },
        {
            artist: 'Dua Lipa',
            song: 'Want to'
        },
        {
            artist: "Summer Walker",
            song: "No Love"
        },
        {
            artist: "Waka Flocka Flame",
            song: "No hands"
        }
    ]

  return (
    <div className={styles.favorites}>
      <h1>My Favorite Songs</h1>
      <p className={styles.description}>
        A collection of songs that have made an impact on me over the years.
      </p>
      <div className={styles.songList}>
        {favs.map((song, index) => (
          <div key={index} className={styles.songCard}>
            <h2 className={styles.artist}>{song.artist}</h2>
            <p className={styles.songTitle}>{song.song}</p>
            {song.feat && (
              <p className={styles.featuring}>
                Featuring: {Array.isArray(song.feat) ? song.feat.join(', ') : song.feat}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}