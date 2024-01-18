import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/starter/hero/hero";
import Infobox from "../components/starter/infobox/infobox";

const VIDEO_SRC = "https://res.cloudinary.com/dt7vd3bx7/video/upload/f_auto:video,q_auto/Technical_Video_Creator_ztfyc9"

export default component$(() => {
  const videoElementSignal = useSignal<HTMLAudioElement | undefined>();
  const videoPlayButtonSignal = useSignal<HTMLButtonElement | undefined>();
  const videoIsPlayingSignal = useSignal(false);

  useVisibleTask$(({ track }) => {
    track(() => videoPlayButtonSignal.value);
    track(() => videoElementSignal.value);
 
    const play = () =>
      videoIsPlayingSignal.value
        ? videoElementSignal.value?.pause()
        : videoElementSignal.value?.play();
 
    videoPlayButtonSignal.value?.addEventListener('click', play);
    return () =>
      videoPlayButtonSignal.value?.removeEventListener('click', play);
  });

  return (
    <>
      <Hero />
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="video-container" id="video">
          <video
            class="video"
            controls
            ref={videoElementSignal}
            //poster={POSTER_SRC}
            src={VIDEO_SRC}
            playsInline={true}
            onPlay$={() => (videoIsPlayingSignal.value = true)}
            onPause$={() => (videoIsPlayingSignal.value = false)}
            onEnded$={() => (videoIsPlayingSignal.value = false)}
          />
          {videoIsPlayingSignal.value === false && <button class="play-button" ref={videoPlayButtonSignal} />}
        </div>

        

      <div class="container container-center container-spacing-xl">
        <h2>
        <span class="highlight">Code speaks louder in motion</span>: <br />amplify your software's message with engaging technical videos. 
        </h2>
      </div>

      <div class="container container-flex" id="services">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            What we offer?
          </div>
          <ul>
              <li>
                <span>Technical video content for your YouTube Channel</span>
              </li>
              <li>
                <span>Documentary and Technical videos for internal purposes, such as learning platforms</span>
              </li>
              <li>
                <span>Instructional Videos for your customers</span>
              </li>
              <li>
                <span>Tailored video courses on specific technologies or software</span>
              </li>
              <li>
                <span>On-boarding videos for new-comers employees</span>
              </li>
              <li>
                <span>Support for create an in-house learning platform</span>
              </li>
            </ul>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-community" id="contacts">
              Keep in touch
            </div>
            <ul>
              <li>
                <span>Book a </span>
                <a href="https://calendly.com/simo-15/30min" target="_blank">
                  30 minutes call
                </a>
              </li>
              <li>
                <span>Chat with us on </span>
                <a href="https://t.me/simo_tdevs" target="_blank">
                  Telegram
                </a>
              </li>
              <li>
                <span>Watch </span>
                <a href="https://youtube.com/tomorrowdevs" target="_blank">
                  our YouTube channel
                </a>
              </li>
              <li>
                <span>Follow us on </span>
                <a href="https://www.linkedin.com/in/storrisi/" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Fullstackish | Technical Video content creations and Software Development",
  meta: [
    {
      name: "description",
      content: "Technical video content creations for the biggest technology-related blogs in the world and software development focused on the design and development of web applications",
    },
  ],
};
