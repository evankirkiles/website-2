/*
 * opengraph-image.tsx
 * Author: Evan Kirkiles
 * Created On Tue Nov 07 2023
 * 2023 Design at Yale
 */

import DAY from '@/assets/svg/DAY';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({
  params: { pageSlug },
}: {
  params: { pageSlug: string };
}) {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'Arial',
          fontSize: 72,
          background: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          paddingTop: '1%',
          display: 'flex',
          flexDirection: 'column',
          padding: '3rem',
          // alignItems: 'center',
          // justifyContent: 'center',
          fontWeight: '700',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            borderTop: '1px solid white',
            borderBottom: '1px solid white',
            flex: '1',
            padding: '1rem 0',
            boxSizing: 'border-box',
          }}
        >
          Evan Kirkiles
          <br />
          <span
            style={{
              fontWeight: '400',
              fontSize: 36,
              marginLeft: '-0.3em',
              color: '#666',
            }}
          >
            {['Art', 'Software', 'Design', 'About']
              .map((val) => (
                <span
                  key={val}
                  style={{
                    color: val.toLowerCase() === pageSlug ? 'white' : undefined,
                    margin: '0 0.3em',
                  }}
                >
                  {val}
                </span>
              ))
              .reduce((acc, val, i) => {
                if (i !== 0) acc.push(<>{' / '}</>);
                acc.push(val);
                return acc;
              }, [] as JSX.Element[])}
          </span>
          <div style={{ flex: 1 }}></div>
          <span
            style={{
              fontWeight: '400',
              fontStyle: 'italic',
              fontSize: 36,
              letterSpacing: '0.2em',
            }}
          >
            https://evankirkiles.com
          </span>
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              bottom: '0',
              height: '84.5vh',
              width: '84.5vh',
              boxSizing: 'border-box',
              // width: '85vh',
              borderRadius: '100%',
              border: '1px solid white',
            }}
          ></div>
        </div>
      </div>
    ),
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
        {
          name: 'Arial',
          data: await fetch(
            new URL('../../../assets/fonts/Arial_Italic.ttf', import.meta.url)
          ).then((res) => res.arrayBuffer()),
          style: 'italic',
          weight: 400,
        },
      ],
    }
  );
}
