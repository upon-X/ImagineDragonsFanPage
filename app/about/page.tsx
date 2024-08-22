import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel/Carousel";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <>
      <Navbar />
      <section className={styles.about_section} style={{ color: "white" }}>
        <h1>About</h1>
        <p className={styles.p1}>
          Imagine Dragons is an American pop rock band from Las Vegas, Nevada,
          consisting of lead vocalist Dan Reynolds, guitarist Wayne Sermon,
          bassist Ben McKee, and drummer Daniel Platzman. The band first gained
          exposure with the release of single "It's Time", followed by their
          award-winning debut studio album Night Visions (2012), which resulted
          in the chart-topping singles "Radioactive" and "Demons".
        </p>
      </section>
      <Carousel />
    </>
  );
}
