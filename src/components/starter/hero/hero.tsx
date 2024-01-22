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
      <h2 class="secondary-text">Crafting tech-focused videos for impactful company promotion.</h2>
      <div class={styles["button-group"]}>
        <button
        onClick$={() => window.open("https://calendly.com/simonetorrisi/30min", "_blank")}
        >
          📞 Book a call
        </button>
        <button class="button-dark"
        onClick$={() => window.open("mailto:contacts@fullstackish.io", "_blank")}
        >
          ✉️ Hire us
        </button>
      </div>
    </div>
  );
});
