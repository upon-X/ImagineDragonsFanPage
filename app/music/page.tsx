import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";

export default function Music() {
  // const idIDChannel = "UCT9zcQNlyht7fRlcjmflRSA";
  let songs = [
    "q392mSz4VeY?si=FB2NDcDmTrAKyNvk",
    "wnz2eZ4fffM?si=jifQTGsFqGNBJLvX",
    "NeUfmyu5t8Q?si=rkcfUc6aA56038wi",
  ];
  return (
    <section color="white">
      <Navbar />
      <div className={styles.title_container}>
        <h2 className={styles.title}>Music</h2>
        <h3 className={styles.subtitle}>These are the latest songs</h3>
      </div>
      <div className={styles.latestSongs}>
        {songs.map((song, index) => (
          <iframe
            key={index}
            width="480"
            height="260"
            src={`https://www.youtube.com/embed/${song}`}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </section>
  );
}
