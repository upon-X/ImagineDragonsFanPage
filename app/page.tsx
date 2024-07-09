import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const imageUrl =
    "https://res.cloudinary.com/dzhiauyws/image/upload/v1720537082/Imagine%20Dragons/imgdragonsNoBg_lxuqev.webp";
  return (
    <main className={styles.main}>
      <Image
        src={imageUrl}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={500}
        height={200}
        alt={"Band logo"}
      />
    </main>
  );
}
