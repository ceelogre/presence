'use client';

import styles from './music.module.css';
interface Song {
  artist: string;
  song: string;
  feat?: string | string[];
  link: string;
}
export default function FavoriteMusic() {
  const favs: Song[] = [
        {
            artist: "Mike Will Made it",
            song: "23",
            link: "https://www.youtube.com/watch?v=bbEoRnaOIbs"
        },
        {
            artist: "Post Malone",
            song: "Candy Paint",
            link: "https://www.youtube.com/watch?v=mThqhAT2Irk"
        },
        {
            artist: "The Chainsmokers",
            song: "Last day alive",
            link: "https://www.youtube.com/watch?v=6b6T0W3aLBg"
        },
        {
            artist: "Petit Biscuit",
            song: "Drivin Thru the Night",
            link: "https://www.youtube.com/watch?v=ZcTLzwhpMYY"
        },
        {
            artist: "Travis Scott",
            song: "Highest in the room",
            link: "https://www.youtube.com/watch?v=tfSS1e3kYeo"
        },
        {
            artist: "Miley Cyrus",
            song: "Adore you",
            link: "https://www.youtube.com/watch?v=W1tzURKYFNs"
        },
        {
            artist: "Migos",
            song: "T-shirt",
            link: "https://www.youtube.com/watch?v=1VUa99-tJqs"
        },
        {
            artist: "Missy Eliott",
            song: "Get your freak on",
            link: "https://www.youtube.com/watch?v=FPoKiGQzbSQ"
        },
        {
            artist: "Beyonce",
            song: "Video Phone",
            link: "https://www.youtube.com/watch?v=CGkvXp0vdng"
        },
        {
            artist: "Lady Gaga",
            song: "Paparazzi",
            link: "https://www.youtube.com/watch?v=d2smz_1L2_0"
        },
        {
            artist: "The Weeknd",
            song: "Earned it",
            link: "https://www.youtube.com/watch?v=waU75jdUnYw"
        },
        {
            artist: "Bazzi",
            song: "Young and Alive",
            link: "https://www.youtube.com/watch?v=GBFD4Ab3yBY"
        },
        {
            artist: "Cardi B",
            song: "Bodak yellow",
            feat: "Kodak Black",
            link: "https://www.youtube.com/watch?v=PEGccV-NOm8"
        },
        {
            artist: "Juicy J",
            song: "Bandz a make her dance",
            feat: [
                "2 Chainz",
                "Lil wayne"
            ],
            link: "https://www.youtube.com/watch?v=AI0gk2KJeho"
        },
        {
            artist: "Linkin Park",
            song: "Roads untraveled",
            link: "https://www.youtube.com/watch?v=KLgQKiUk7ms"
        },
        {
            artist: "PNL",
            song: "Ryuk",
            link: "https://www.youtube.com/watch?v=ixMzyhG2xqo"
        },
        {
            artist: "Jack U",
            song: "Where are u now",
            feat: [
                "Skrilles",
                "Diplo",
                "Justin Bieber"
            ],
            link: "https://www.youtube.com/watch?v=nntGTK2Fhb0"
        },
        {
            artist: "Afrojack",
            song: "Another life",
            feat: [
                "David Guetta", "Ester Dean"
            ],
            link: "https://www.youtube.com/watch?v=ivxPepDyqmI"
        },
        {
            artist: "Tory Lanez",
            song: "Say it",
            link: "https://www.youtube.com/watch?v=xUq1rZ7mmns"
        },
        {
            artist: "T.I",
            song: "What's up",
            link: "https://www.youtube.com/watch?v=c4wefYvqHfc"
        },
        {
            artist: "One Republic",
            song:"Let's hurt tonight",
            link: "https://www.youtube.com/watch?v=8wGN7D03Nho"
        },
        {
            artist: "Ed Sheeran",
            song: "Castle on the hill",
            link: "https://www.youtube.com/watch?v=K0ibBPhiaG0"
        },
        {
            artist: 'Kelly Rowland',
            song: 'Like this',
            feat: 'Eve',
            link: "https://www.youtube.com/watch?v=IIMAqSiesgM"
        },
        {
            artist: 'Twenty One Pilots',
            song: 'Heathens',
            link: "https://www.youtube.com/watch?v=UprcpdwuwCg"
        },
        {
            artist: 'Nicki Minaj',
            song: 'Barbie Dreams',
            link: "https://www.youtube.com/watch?v=_bvLphVWHpo"
        },
        {
            artist: 'Dua Lipa',
            song: 'Want to',
            link: "https://www.youtube.com/watch?v=bS3uSzk4VwY"
        },
        {
            artist: "Summer Walker",
            song: "No Love",
            link: "https://www.youtube.com/watch?v=IhSPyR72CqM"
        },
        {
            artist: "Waka Flocka Flame",
            song: "No hands",
            link: "https://www.youtube.com/watch?v=skhxizRYxps"
        },
        {
            artist: "King Von",
            song: "War",
            link: "https://www.youtube.com/watch?v=ziIi9Si7FUQ"
        },
        {
            artist: "Lana Del Rey",
            song: "Chemtrails over the country club",
            link: "https://www.youtube.com/watch?v=vBHild0PiTE"
        },
        {
            artist: "Bad meets Evil",
            song: "Fast lane",
            link: "https://www.youtube.com/watch?v=rJOsjP33nF4"
        },
        {
            artist: "Meek Mill",
            song: "Going bad",
            feat: "Drake",
            link: "https://www.youtube.com/watch?v=S1gp0m4B5p8"
        },
        {
            artist: "2 Chainz",
            song: "Birthday song",
            feat: "Kanye West",
            link: "https://www.youtube.com/watch?v=Y34jC4I1m70"
        },
        {
            artist: "M.I.A",
            song: "Bad girls",
            link: "https://www.youtube.com/watch?v=3Yuqxl284cg"
        },
        {
            artist:"Ice Spice",
            song: "Baddie baddie",
            link: "https://www.youtube.com/watch?v=qGzKA3aROGE"
        },
        {
            artist: "Bryson Tiller",
            song: "Right My Wrongs",
            link: "https://www.youtube.com/watch?v=boZVmbb1r9A"
        },
        {
            artist: "Dlala Thukzin",
            song: "Mali 2.0",
            link: "https://www.youtube.com/watch?v=GPi7N1yX87M"
        },
        {
            artist: "Future",
            song: "Type Shit",
            feat: [
                "Metro Boomin",
                "Travis Scott",
                "Playboi Carti"
            ],
            link: "https://www.youtube.com/watch?v=I0fgkcTbBoI"
        },
        {
            artist: "Kanye West",
            song: "Amazing",
            feat: 'Jeezy',
            link: "https://www.youtube.com/watch?v=5S7308YTz-U"
        }
    ]

  return (
    <div className={styles.favorites}>
      <h1>My Favorite Songs</h1>
      <p className={styles.description}>
        A collection of songs that have made an impact on my ears over the years.
      </p>
      <div className={styles.songList}>
        {favs.map((song, index) => (
          <a
            key={index}
            href={song.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.songCard}
          >
            <h2 className={styles.artist}>{song.artist}</h2>
            <p className={styles.songTitle}>{song.song}</p>
            {song.feat && (
              <p className={styles.featuring}>
                Featuring: {Array.isArray(song.feat) ? song.feat.join(', ') : song.feat}
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
