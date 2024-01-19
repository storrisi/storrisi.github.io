import type { RequestHandler } from '@builder.io/qwik-city';
import { fetchFont, ImageResponse, html } from 'og-img';
 
export const onGet: RequestHandler = async ({ send }) => {

  console.log("import.meta.env.PUBLIC_WEBSITE_URL")
  console.log(import.meta.env.PUBLIC_WEBSITE_URL)
    
    const fontDirUrl = import.meta.env.PUBLIC_WEBSITE_URL + '/fonts';
    const iconUrl = import.meta.env.PUBLIC_WEBSITE_URL + '/logo-inverse-148x64.png';

  send(
    new ImageResponse(
      // Use Tailwind CSS or style attribute
      html`
        <div style="background-color:#151934; display: flex;width:100%;height:100%;z-index:0;">
            <div style="z-index:1;width:100%;height:100%;display: flex;background: radial-gradient( 50% 50% at 50% 50%, rgba(172, 127, 244, 0.5) 0%, rgba(21, 25, 52, 0) 100% );">
                <div tw="flex h-full w-full flex-col justify-center flex-wrap p-16 text-center" style="z-index:2;">
                    <img tw="h-10" src="${iconUrl}">
                    <h1 tw="flex flex-row text-center justify-center items-center flex-wrap gap-1 text-9xl tracking-tight" style="font-family: 'Poppins Bold';color: white;">
                        Technical <span tw="px-4" style="color:#50cdc5">videos</span> tailored <span tw="px-4" style="color:#50cdc5">for you</span>
                    </h1>
                </div>
            </div>
        </div>
      `,
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'Poppins',
            // Use `fs` (Node.js only) or `fetch` to read font file
            data: await fetchFont(fontDirUrl + '/Poppins-Regular.ttf'),
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Poppins Medium',
            // Use `fs` (Node.js only) or `fetch` to read font file
            data: await fetchFont(fontDirUrl + '/Poppins-Medium.ttf'),
            weight: 500,
            style: 'normal',
          },
          {
            name: 'Poppins Bold',
            // Use `fs` (Node.js only) or `fetch` to read font file
            data: await fetchFont(fontDirUrl + '/Poppins-Bold.ttf'),
            weight: 700,
            style: 'normal',
          },
        ],
      }
    )
  );
};