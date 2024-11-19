/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const PlayerWrapper = styled("div")`
  position: relative;
  padding-top: 56.25%;
`;

const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  background: red;
`;

export const VideoPlayer = qwikify$(({ video }: { video: string }) => {
  return (
    <iframe
      className="w-full h-full rounded-xl video"
      loading="lazy"
      src={`https://www.youtube.com/embed/${video}?rel=0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
      width={"560"}
      height={"315"}
    ></iframe>
  );
});
