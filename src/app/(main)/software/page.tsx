/*
 * page.tsx
 * Author: evan kirkiles
 * Created On Wed Nov 08 2023
 * 2023 Digital Portfolio
 */

import getClient from '@/sanity/client';
import { Software } from '@/sanity/schema';
import getPreview from '@/util/getPreview';
import { groq } from 'next-sanity';
import React from 'react';
import s from './Software.module.scss';
import { softwaresQuery } from '@/sanity/groq';
import Link from 'next/link';
import SanityImage from '@/components/SanityImage';
import unwrapReference from '@/util/sanity';

export default async function SoftwarePage() {
  const preview = getPreview();
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
    <article className={s.article}>
      <ul className={s.container}>
        {Object.entries(groups)
          .sort(([_, a], [__, b]) => b.length - a.length)
          .map(([group, softwares]) => (
            <React.Fragment key={group}>
              {softwares.map(
                ({ _id, short_title, picture, page }) =>
                  picture && (
                    <li key={_id}>
                      <Link
                        href={`/software/${
                          page &&
                          unwrapReference(page).path.current.replaceAll('.', '/')
                        }`}
                      >
                        <SanityImage image={unwrapReference(picture.asset)} />
                        <small>{short_title}</small>
                      </Link>
                    </li>
                  )
              )}
            </React.Fragment>
          ))}
      </ul>
    </article>
  );
}
