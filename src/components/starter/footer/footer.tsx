import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  

  return (
    <footer>
      <div class="container">
        <a href="https://www.fullstackish.io" target="_blank" class={styles.anchor}>
          <span>© {new Date().getFullYear()} FULLSTACKISH LABS LTD. Privacy Policy</span>
        </a>
      </div>
    </footer>
  );
});
