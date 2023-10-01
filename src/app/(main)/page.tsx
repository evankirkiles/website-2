/*
 * page.tsx
 * Author: evan kirkiles
 * Created On Mon Aug 28 2023
 * 2023 Design at Yale
 */

import SVGLines from '@/assets/svg/lines';
import PageBuilder from '@/components/PageBuilder';
import PreviewPageBuilder from '@/components/PageBuilder/preview';
import PreviewProvider from '@/components/PreviewProvider';
import getClient from '@/sanity/client';
import { pageQuery } from '@/sanity/groq';
import { SitePage } from '@/sanity/schema';
import getPreview from '@/util/getPreview';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default async function Page() {
  const preview = getPreview();
  const page: SitePage | null = await getClient(preview).fetch(
    pageQuery,
    { path: '.' },
    { next: { tags: [`page.`] } }
  );

  return (
    <article>
      {/* <SVGLines /> */}
      {/* <p>
        Evan Kirkiles is a software engineer and designer, and maybe an artist.
        He is making simple things that live, work, and tell stories on their
        own. He has previously worked with Channel Studio and the New York Times.
        His site installations have been shown in the Yale CCAM.
      </p>
      <p>He is currently looking for new grad software engineering roles.</p> */}
      {preview && preview.token ? (
        <PreviewProvider token={preview.token}>
          <PreviewPageBuilder
            initialValue={page ?? { pageBuilder: undefined }}
            query={pageQuery}
            params={{ path: '.' }}
          />
        </PreviewProvider>
      ) : (
        <PageBuilder content={page?.pageBuilder} />
      )}
    </article>
  );
}

export const revalidate = false;
