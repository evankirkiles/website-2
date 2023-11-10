/*
 * page.tsx
 * Author: evan kirkiles
 * Created On Thu Nov 09 2023
 * 2023 Digital Portfolio
 */

import PageBuilder from '@/components/PageBuilder';
import PreviewPageBuilder from '@/components/PageBuilder/preview';
import PreviewProvider from '@/components/PreviewProvider';
import getClient from '@/sanity/client';
import { pageQuery } from '@/sanity/groq';
import { SitePage } from '@/sanity/schema';
import getPreview from '@/util/getPreview';
import { notFound } from 'next/navigation';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */
// All subpages are simply a wrapped PageBuilder with necessary DOM elements.

interface PageProps {
  params: { softwareId: string };
}

export default async function SoftwarePage({
  params: { softwareId },
}: PageProps) {
  const preview = getPreview();
  const params = { path: `.software.${softwareId}` };
  const page: SitePage | null = await getClient(preview).fetch(
    pageQuery,
    params,
    { next: { tags: [`page${params.path}`] } }
  );
  if (!page) notFound();

  return (
    <article>
      {preview && preview.token ? (
        <PreviewProvider token={preview.token}>
          <PreviewPageBuilder
            initialValue={page}
            query={pageQuery}
            params={params}
          />
        </PreviewProvider>
      ) : (
        <PageBuilder content={page.pageBuilder} />
      )}
    </article>
  );
}
