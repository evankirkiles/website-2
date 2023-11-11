/*
 * RoomSVG.tsx
 * Author: Evan Kirkiles
 * Created On Wed Nov 08 2023
 * 2023 Digital Portfolio
 */
'use client';

import Link from 'next/link';
import { HTMLProps } from 'react';
import s from './RoomSVG.module.scss';
import { usePathname } from 'next/navigation';

export default function RoomSVG(props: HTMLProps<SVGSVGElement>) {
  const pathname = usePathname();

  return (
    <>
      <svg
        viewBox="0 0 2140 840"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={s.image}
        {...props}
      >
        <title>
          A perspective view of a gallery-like room with three walls and two
          benches.
        </title>
        <Link
          href="/software"
          aria-label="Go to the Software page."
          id="software-link"
          aria-current={pathname.startsWith('/software') ? 'page' : undefined}
        >
          <polygon
            points="0.000 840.500, 0.000 0.000, 739.000 291.500, 739.000 551.500, 0.000 840.500"
            fill="transparent"
            vectorEffect="non-scaling-stroke"
          />
        </Link>
        <Link
          href="/design"
          aria-label="Go to the Design page."
          aria-current={pathname.startsWith('/design') ? 'page' : undefined}
          aria-disabled="true"
          tabIndex={-1}
        >
          <polygon
            points="1400.710 291.500, 739.289 291.500, 739.289 551.500, 1400.710 551.500, 1400.710 291.500"
            fill="transparent"
            vectorEffect="non-scaling-stroke"
          />
        </Link>
        <Link
          href="/art"
          aria-label="Go to the Art page."
          aria-current={pathname.startsWith('/art') ? 'page' : undefined}
          aria-disabled="true"
          tabIndex={-1}
        >
          <polygon
            points="2139.500 840.500, 2139.500 0.000, 1400.500 291.500, 1400.500 551.500, 2139.500 840.500"
            fill="transparent"
            vectorEffect="non-scaling-stroke"
          />
        </Link>
        <path
          d="M2139.5 0L1400.5 291.5V551.5L2139.5 840.5"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1400.71 291.5H739.289V551.5H1400.71V291.5Z"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 0L739 291.5V551.5L0 840.5"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M139.831 626.5V198L467.737 319.5V528.5L139.831 626.5Z"
          stroke="currentColor"
          data-mask="true"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M2072.89 685V139L1655.07 293.817V560.127L2072.89 685Z"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
          data-mask="true"
        />
        <path
          d="M530.541 504.5V328L685.239 373V469.5L530.541 504.5Z"
          stroke="currentColor"
          data-mask="true"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1453.44 508V339.5L1550.62 309.5V538.5L1453.44 508Z"
          stroke="currentColor"
          data-mask="true"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M420.137 692.5L785.065 532.5H892.824V626L642.267 817H420.137V692.5Z"
          data-mask="true"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M420.137 692.5L785.065 532.5H892.824M420.137 692.5H642.267M420.137 692.5V817H642.267M892.824 532.5L642.267 692.5M892.824 532.5V626L642.267 817M642.267 692.5V817"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1718.69 692L1353.76 532H1246V625.5L1496.56 816.5H1718.69V692Z"
          data-mask="true"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1718.69 692L1353.76 532H1246M1718.69 692H1496.56M1718.69 692V816.5H1496.56M1246 532L1496.56 692M1246 532V625.5L1496.56 816.5M1496.56 692V816.5"
          stroke="currentColor"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x="774.5"
          y="328.5"
          width="211"
          height="148"
          stroke="currentColor"
          data-mask="true"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x="1010.5"
          y="328.5"
          width="211"
          height="148"
          stroke="currentColor"
          data-mask="true"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <label
        className={s.label}
        style={{
          bottom: '5%',
          left: '2%',
        }}
        htmlFor="software-link"
      >
        SOFTWARE
      </label>
      <label
        className={s.label}
        style={{
          top: '50%',
          left: '40%',
        }}
      >
        DESIGN
      </label>
      <label
        className={s.label}
        style={{
          bottom: '20%',
          right: '2%',
        }}
        htmlFor=""
      >
        ART
      </label>
    </>
  );
}
