import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Posts } from "@/components/Posts";

export default function Home() {
  const logoBand2 =
    "https://res.cloudinary.com/dzhiauyws/image/upload/v1720537082/Imagine%20Dragons/imaginedragons_jufa4y.webp";
  const BandMembers =
    "https://res.cloudinary.com/dzhiauyws/image/upload/v1720556759/Imagine%20Dragons/imaginedragonsband_ictzde.webp";

  return (
    <main className={styles.main}>
      {/* <Image
        className={styles.dan_reynolds_image}
        src={DanReynolds}
        width={450}
        height={450}
        alt={"Dan Reynolds"}
      /> */}
      <header className={styles.header}>
        <Image
          className={styles.band_image}
          src={BandMembers}
          width={1100}
          height={600}
          alt="Imagine Dragons Band"
        />
        <section className={styles.title_image}>
          <Image
            className={styles.logo_band}
            src={logoBand2}
            width={400}
            height={400}
            alt={"Logo Imagine Dragons"}
          />
          <h1 className={styles.title}>
            The official fanpage for Firebreathers around the world
          </h1>
        </section>
      </header>
      <Navbar />
      <Posts />
    </main>
  );
}
