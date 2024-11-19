import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city"; 
import Hero from "../components/starter/hero/hero";
import { Episodes } from "~/integrations/react/episodes";

export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <div class="container container-flex container-center home-container" id="episodes">
        <div class="hero">
          <Hero />
        </div>
        <Episodes />
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
