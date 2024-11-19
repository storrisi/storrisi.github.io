import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Hero from "../components/starter/hero/hero";

export default component$(() => {
  const blogPath = "src/routes/podcast";
  const blogEntries: any = {};
  const blogDirs = fs.readdirSync(path.join(blogPath));

  blogDirs.forEach((blog) => {
    const fileContents = fs.readFileSync(
      path.join(blogPath, blog, "index@podcast.mdx")
    );
    const { data, _ } = matter(fileContents);

    const title =
      data == undefined || data.title == undefined ? blog : data.title;
    const created_at =
      data == undefined || data.created_at == undefined
        ? Date.now()
        : data.created_at;
    blogEntries[Date.parse(created_at)] = (
      <li class="container container-flex episode">
        <div class="podcast_image_wrapper">
          <a href={"/podcast/" + blog}>
            <img
              class="podcast_image"
              width="320"
              height="180"
              src={`http://img.youtube.com/vi/${data.youtube_id}/mqdefault.jpg`}
            />
          </a>
        </div>
        <div class="podcast_text">
          <p>{data.created_at}</p>
          <h3 class="podcast_title">
            <a href={"/podcast/" + blog}>{title}</a>
          </h3>
        </div>
      </li>
    );
  });

  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <div class="container container-flex container-center home-container" id="episodes">
        <div class="hero">
          <Hero />
        </div>
        <div class="container container-flex episodes" id="episodes">
          <ul>
            {Object.keys(blogEntries)
              .sort()
              .reverse()
              .reduce((acc, c) => {
                acc.push(blogEntries[c]);
                return acc;
              }, [])}
          </ul>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = () => {
  const siteUrl = import.meta.env.PUBLIC_WEBSITE_URL;
  return {
    title: "TomorrowDevs Podcast | Il podcast che parla di persone, tecnologie, carriera in ambito Tech.",
    meta: [
      {
        name: "description",
        content:
          "TomorrowDevs Podcast è il podcast ufficiale di TomorrowDevs, con i suoi format settimanali: Caffèlattech, Storie di Developers, Hidden Technologies, Refactoring Mindset",
      },
      {
        property: "og:image",
        content: `${siteUrl}/og-image.png`,
      },
      {
        property: "twitter:image",
        content: `${siteUrl}/og-image.png`,
      },
      {
        property: "twitter:card",
        content: `summary_large_image`,
      },
      {
        property: "og:title",
        content:
          "TomorrowDevs Podcast | Il podcast che parla di persone, tecnologie, carriera in ambito Tech.",
      },
      {
        property: "twitter:title",
        content:
          "TomorrowDevs Podcast | Il podcast che parla di persone, tecnologie, carriera in ambito Tech.",
      },
      {
        property: "og:description",
        content:
          "TomorrowDevs Podcast è il podcast ufficiale di TomorrowDevs, con i suoi format settimanali: Caffèlattech, Storie di Developers, Hidden Technologies, Refactoring Mindset",
      },
      {
        property: "twitter:description",
        content:
          "TomorrowDevs Podcast è il podcast ufficiale di TomorrowDevs, con i suoi format settimanali: Caffèlattech, Storie di Developers, Hidden Technologies, Refactoring Mindset",
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
        content: "en_US",
      },
      {
        property: "og:url",
        content: "https://podcast.tomorrowdevs.com",
      },
    ],
  };
};
