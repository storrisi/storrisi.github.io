import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import TomorrowDevsPodcast from "../../../media/tomorrowdevs-podcast.png?jsx";

export default component$(() => {
  return (
    <div class={[styles.hero]}>
      <TomorrowDevsPodcast class={styles["hero-image"]} />
    </div>
  );
});
