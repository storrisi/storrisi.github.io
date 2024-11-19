import { component$ } from "@builder.io/qwik";
import FullstackishLogo from "../../../media/td-logo-vector.png?jsx";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <FullstackishLogo class={styles.logo} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="/"
            >
              Tutti gli episodi
            </a>
          </li>
          <li>
            <a
              href="https://www.tomorrowdevs.com/community-free"
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="#services"
            >
              Supportaci
            </a>
          </li>
          <li>
            <a
              href="#contacts"
            >
              Contatti
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
