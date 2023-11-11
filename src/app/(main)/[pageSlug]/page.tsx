/*
 * page.tsx
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

import PageBuilder from '@/components/PageBuilder';
import PreviewPageBuilder from '@/components/PageBuilder/preview';
import PreviewProvider from '@/components/PreviewProvider';
import getClient from '@/sanity/client';
import { pageQuery, pagesQuery } from '@/sanity/groq';
import { SitePage } from '@/sanity/schema';
import generateMetadataForPage from '@/util/generateMetadata';
import getPreview from '@/util/getPreview';
import { notFound } from 'next/navigation';

/* ---------------------------- Param generation ---------------------------- */

// builds the list of sub-pages to statically generate
export async function generateStaticParams() {
  const pages: SitePage[] = await getClient().fetch(pagesQuery, undefined, {
    next: { revalidate: 0 },
  });
  return pages.map(({ path }) => ({
    pageSlug: path.current.replace('.', '').split('.')[0],
  }));
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */
// All subpages are simply a wrapped PageBuilder with necessary DOM elements.

interface PageProps {
  params: { pageSlug: string };
}

export default async function SubPage({ params: { pageSlug } }: PageProps) {
  const preview = getPreview();
  const params = { path: `${pageSlug}` };
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

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const revalidate = false;

// generate the metadata for the page.
export async function generateMetadata({ params: { pageSlug } }: PageProps) {
  const params = { path: `.${pageSlug}` };
  const page: SitePage | null = await getClient().fetch(pageQuery, params, {
    next: { tags: [`page${params.path}`] },
  });
  if (!page) return {};
  return generateMetadataForPage(page);
}
