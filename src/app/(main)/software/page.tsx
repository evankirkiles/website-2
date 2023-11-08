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

const softwareQuery = groq`*[_type == "software"] {
  ...
}`;

export default async function SoftwarePage() {
  const preview = getPreview();
  const software: Software[] = await getClient(preview).fetch(
    softwareQuery,
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

  return (
    <article className={s.container}>
      <table>
        <thead></thead>
        <tbody>
          {Object.entries(groups).map(([group, softwares]) => (
            <React.Fragment key={group}>
              <tr>
                <td colSpan={2}>{group}</td>
              </tr>
              {softwares.map(({ _id, short_title, date }) => (
                <tr key={_id}>
                  <td>{short_title}</td>
                  <td>{date && new Date(date).getFullYear()}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </article>
  );
}
