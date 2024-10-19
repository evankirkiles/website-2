/*
 * page.tsx
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

import { Studio } from '@/app/(sanity)/studio/[[...index]]/Studio';

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata, viewport } from 'next-sanity/studio';

export const dynamic = 'force-static';

export default function StudioPage() {
  return (
    <main
      data-sanity="true"
      style={{
        gridRowStart: 'main',
        gridColumnStart: 'main',
        gridColumnEnd: 'sidebar',
        gridRowEnd: 'sidebar',
      }}
    >
      <Studio />
    </main>
  );
}
