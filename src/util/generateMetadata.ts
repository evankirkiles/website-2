/*
 * generateMetadata.ts
 * Author: Evan Kirkiles
 * Created On Thu Nov 09 2023
 * 2023 Digital Portfolio
 */

import { metadata } from '@/app/layout';
import { PeCopy, SanityKeyed, SitePage } from '@/sanity/schema';
import { toPlainText } from '@portabletext/react';
import { Metadata } from 'next';

export default function generateMetadataForPage(page: SitePage): Metadata {
  // create metadata titles
  const title =
    page.path.current === '.'
      ? `${metadata.title}`
      : `${page.seo_title || page.title} | ${metadata.title}`;
  const OGTitle =
    page.path.current === '.'
      ? `${metadata.title}`
      : `${page.seo_title || page.title} | ${metadata.title}`;

  // parse page body into a description if no description provided
  const descriptionUF =
    page.seo_description ||
    page.pageBuilder
      ?.filter(
        (pageEl): pageEl is SanityKeyed<PeCopy> => pageEl._type === 'pe_copy'
      )
      .map(({ content }) => toPlainText(content ?? []))
      .join(' ');
  const description =
    descriptionUF && descriptionUF.length > 152
      ? descriptionUF.substring(0, 152) + '...'
      : descriptionUF;

  return {
    title,
    authors: [{ name: 'Evan Kirkiles', url: 'https://evankirkiles.com' }],
    description,
    keywords: page.seo_keywords,
    openGraph: {
      title: OGTitle,
      description,
      url: page.path.current.replace('.', '/'),
    },
    twitter: {
      title,
      description,
      site: page.path.current.replace('.', '/'),
    },
  };
}
