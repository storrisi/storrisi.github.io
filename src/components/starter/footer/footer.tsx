import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import Infobox from "../infobox/infobox";

export default component$(() => {
  return (
    <footer>
      <div class={`container container-flex `} id="services">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            Vorresti sponsorizzare i nostri contenuti?
          </div>
          <ul class={styles.services}>
            <li>
              <span>Prenota una </span>
              <a href="https://cal.com/tomorrowdevs/30min" target="_blank">
                chiamata
              </a>
            </li>
            <li>
              <span>Mandaci una </span>
              <a href="mailto:team@tomorrowdevs.com" target="_blank">
                mail
              </a>
            </li>
          </ul>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-community" id="contacts">
            Restiamo in contatto
          </div>
          <ul class={styles.services}>
            <li>
              <span>Entra su </span>
              <a
                href="https://www.tomorrowdevs.com/community-free"
                target="_blank"
              >
                Discord
              </a>
            </li>
            <li>
              <span>Seguici su </span>
              <a href="https://t.me/tomorrowdevs" target="_blank">
                Telegram
              </a>
            </li>
            <li>
              <span>Seguici su </span>
              <a href="https://youtube.com/tomorrowdevs" target="_blank">
                YouTube
              </a>
            </li>
            <li>
              <span>Seguici su </span>
              <a
                href="https://www.linkedin.com/company/tomorrowdevs"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </Infobox>
      </div>
      <div class="container">
        <a
          href="https://www.tomorrowdevs.com"
          target="_blank"
          class={styles.anchor}
        >
          <span>
            © {new Date().getFullYear()} TOMORROWDEVS Privacy Policy
          </span>
        </a>
      </div>
    </footer>
  );
});
