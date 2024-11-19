/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import styled from "@emotion/styled";
import { Spotify } from "react-spotify-embed";

const PlayerWrapper = styled("div")`
  position: relative;
  padding-top: 56.25%;
`;

export const PodcastPlayer = qwikify$(({ url }: { url: string }) => {
  console.log(url);
  return <Spotify link={url} />;
});
