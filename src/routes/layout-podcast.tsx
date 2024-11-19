import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$, useDocumentHead } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { VideoPlayer } from "~/integrations/react/player";
import { PodcastPlayer } from "~/integrations/react/spotify";
import Header from "../components/starter/header/header";
import Footer from "../components/starter/footer/footer";

import styles from "./styles.css?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const { frontmatter, title } = useDocumentHead();
  useStyles$(styles);

  console.log(title)
  return (
    <>
      <Header />
        <h1 class="highlight"><span class="highlight">{title}</span></h1>
        <div class="container container-center">
          <Slot />
        </div>
        <div class="container container-center container-flex episode-details">
          <div><PodcastPlayer url={frontmatter.podcast_link} /></div>
          <div><VideoPlayer video={frontmatter.youtube_id} /></div>
        </div>
      <Footer />
    </>
  );
});
