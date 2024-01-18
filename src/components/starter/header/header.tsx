import { component$ } from "@builder.io/qwik";
import FullstackishLogo from "../../../media/logo-inverse-148x64.png?jsx";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <FullstackishLogo />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="#video"
            >
              Who we are
            </a>
          </li>
          <li>
            <a
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contacts"
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
