import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "../../../media/fullstackish.svg?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} />
      <h1>
         Technical <span class="highlight">videos</span>
        <br />
        tailored <span class="highlight">for you</span>
      </h1>
      <h2 class="secondary-text">We create professional videos designed to market tech companies.</h2>
      <div class={styles["button-group"]}>
        <button
        onClick$={() => window.open("mailto:contacts@fullstackish.io")}
        >
          Book a call
        </button>
      </div>
    </div>
  );
});
