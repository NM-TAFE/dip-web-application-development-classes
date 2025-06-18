"use client"; // remove this to generate the error

import ControlledCarousel from "../components/Carousel";
import styles from "./styles.module.css";

export default function AboutPage() {
  return (
    <main className={styles.header}>
      <h1>About Us</h1>
      <ControlledCarousel />
    </main>
  );
}
