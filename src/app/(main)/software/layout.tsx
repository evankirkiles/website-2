/*
 * layout.tsx
 * Author: Evan Kirkiles
 * Created On Wed Nov 08 2023
 * 2023 Digital Portfolio
 */

import getClient from '@/sanity/client';
import { SitePage, Software } from '@/sanity/schema';
import getPreview from '@/util/getPreview';
import { groq } from 'next-sanity';
import React, { PropsWithChildren } from 'react';
import s from './Software.module.scss';
import SoftwareNav from '@/app/(main)/software/_components/SoftwareNav';
import { pageQuery, softwaresQuery } from '@/sanity/groq';
import { notFound } from 'next/navigation';
import PreviewProvider from '@/components/PreviewProvider';
import PreviewPageBuilder from '@/components/PageBuilder/preview';
import PageBuilder from '@/components/PageBuilder';

export default async function SoftwareLayout({ children }: PropsWithChildren) {
  const preview = getPreview();
  const params = { path: `.software` };
  const page: SitePage | null = await getClient(preview).fetch(
    pageQuery,
    params,
    { next: { tags: [`page${params.path}`] } }
  );
  if (!page) return notFound();
  const software: Software[] = await getClient(preview).fetch(
    softwaresQuery,
    undefined,
    {
      next: { tags: [`software`] },
      cache: 'no-cache',
    }
  );

  const groups = software.reduce(
    (acc, curr) => {
      if (!acc[curr.group]) acc[curr.group] = [];
      acc[curr.group].push(curr);
      return acc;
    },
    {} as { [key: string]: Software[] }
  );
  Object.values(groups).forEach((items) =>
    items.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getFullYear() : 0;
      const dateB = b.date ? new Date(b.date).getFullYear() : 0;
      return dateB - dateA;
    })
  );

  return (
    <>
      <SoftwareNav groups={groups}>
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
      </SoftwareNav>
      {children}
    </>
  );
}
