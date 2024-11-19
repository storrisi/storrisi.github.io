/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";

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
