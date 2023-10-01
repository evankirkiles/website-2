/*
 * page.tsx
 * Author: evan kirkiles
 * Created On Mon Aug 28 2023
 * 2023 Design at Yale
 */

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
  const params = { pageSlug: `/` };
  const page: SitePage | null = await getClient(preview).fetch(
    pageQuery,
    params,
    { next: { tags: [`page:${params.pageSlug}`] } }
  );

  return (
    <article>
      <p>
        Evan Kirkiles is twenty-one years old, a software engineer, and maybe
        even a designer and an artist, depending on who you ask. He is making
        simple images and machines that live, color, and breathe on their own.
      </p>
      <p>He is currently looking for new-grad software engineering roles.</p>
      {preview && preview.token ? (
        <PreviewProvider token={preview.token}>
          <PreviewPageBuilder
            initialValue={page ?? { pageBuilder: undefined }}
            query={pageQuery}
            params={params}
          />
        </PreviewProvider>
      ) : (
        <PageBuilder content={page?.pageBuilder} />
      )}
    </article>
  );
}

export const revalidate = false;
