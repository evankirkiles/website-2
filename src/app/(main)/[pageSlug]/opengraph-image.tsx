/*
 * opengraph-image.tsx
 * Author: Evan Kirkiles
 * Created On Tue Nov 07 2023
 * 2023 Digital Portfolio
 */

import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontFamily: 'Arial',
        fontSize: 180,
        background: 'black',
        color: 'white',
        width: '100%',
        height: '100%',
        // paddingTop: '1%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '3rem',
        fontWeight: '700',
      }}
    >
      <div>EWK</div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Arial',
          data: await fetch(
            new URL('../../../assets/fonts/Arial.ttf', import.meta.url)
          ).then((res) => res.arrayBuffer()),
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Arial',
          data: await fetch(
            new URL('../../../assets/fonts/Arial_Bold.ttf', import.meta.url)
          ).then((res) => res.arrayBuffer()),
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
