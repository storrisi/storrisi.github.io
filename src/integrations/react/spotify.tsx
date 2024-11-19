/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Spotify } from "react-spotify-embed";

export const PodcastPlayer = qwikify$(({ url }: { url: string }) => {
  console.log(url);
  return <Spotify link={url} />;
});
