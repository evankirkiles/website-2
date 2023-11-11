/*
 * page.tsx
 * Author: evan kirkiles
 * Created On Mon Aug 28 2023
 * 2023 Digital Portfolio
 */

import PageBuilder from '@/components/PageBuilder';
import PreviewPageBuilder from '@/components/PageBuilder/preview';
import PreviewProvider from '@/components/PreviewProvider';
import getClient from '@/sanity/client';
import { pageQuery } from '@/sanity/groq';
import { SitePage } from '@/sanity/schema';
import generateMetadataForPage from '@/util/generateMetadata';
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
      {preview && preview.token ? (
        <PreviewProvider token={preview.token}>
          <PreviewPageBuilder
            initialValue={page ?? { pageBuilder: undefined }}
            query={pageQuery}
            params={{ path: '.' }}
          />
        </PreviewProvider>
      ) : (
        <PageBuilder content={page!.pageBuilder} />
      )}
    </article>
  );
}

export const revalidate = false;

// generate the metadata for the page.
export async function generateMetadata() {
  const params = { path: `.` };
  const page: SitePage | null = await getClient().fetch(pageQuery, params, {
    next: { tags: [`page${params.path}`] },
  });
  if (!page) return {};
  return generateMetadataForPage(page);
}
