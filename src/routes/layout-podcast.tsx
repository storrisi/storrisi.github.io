import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$, useDocumentHead } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { VideoPlayer } from "~/integrations/react/player";
import { PodcastPlayer } from "~/integrations/react/spotify";
import Header from "../components/starter/header/header";
import Footer from "../components/starter/footer/footer";

import styles from "./styles.css?inline";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default component$(() => {
  const { frontmatter, title } = useDocumentHead();
  useStyles$(styles);
  return (
    <>
      <Header />
      <h1 class="highlight">
        <span class="highlight">{title}</span>
      </h1>
      <div class="container container-center">
        <Slot />
      </div>
      <div class="container container-center container-flex episode-details">
        <div>
          <PodcastPlayer url={frontmatter.podcast_link} />
        </div>
        <div>
          <VideoPlayer video={frontmatter.youtube_id} />
        </div>
      </div>
      <Footer />
    </>
  );
});

export const useContents = routeLoader$(async (requestEvent) => {
  const fileContents = fs.readFileSync(
    path.join("src/routes/", requestEvent.url.pathname, "index@podcast.mdx")
  );

  const { data, content } = matter(fileContents);

  console.log(requestEvent.url.href)
  console.log(requestEvent.url.pathname)
  console.log(requestEvent.url)

  return { ...data, content, url: requestEvent.url.href };
});

export const head: DocumentHead = ({ resolveValue }) => {
  const { youtube_id, title, content, url }: any = resolveValue(useContents);
  
  return {
    title,
    meta: [
      {
        name: "description",
        content,
      },
      {
        property: "og:image",
        content: `http://img.youtube.com/vi/${youtube_id}/hqdefault.jpg`,
      },
      {
        property: "twitter:image",
        content: `http://img.youtube.com/vi/${youtube_id}/hqdefault.jpg`,
      },
      {
        property: "twitter:card",
        content: `summary_large_image`,
      },
      {
        property: "og:title",
        content: `${title} | TomorrowDevs Podcast`,
      },
      {
        property: "twitter:title",
        content: `${title} | TomorrowDevs Podcast`,
      },
      {
        property: "og:description",
        content,
      },
      {
        property: "twitter:description",
        content,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:locale",
        content: "it_IT",
      },
      {
        property: "og:url",
        content: url,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: url,
      },
    ],
  };
};
