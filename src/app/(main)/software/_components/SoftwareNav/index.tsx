/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created On Wed Nov 08 2023
 * 2023 Digital Portfolio
 */
'use client';

import { Software } from '@/sanity/schema';
import React from 'react';
import s from './SoftwareNav.module.scss';

interface SoftwareNavProps {
  groups: { [key: string]: Software[] };
}

export default function SoftwareNav({ groups }: SoftwareNavProps) {
  return (
    <nav className={s.container}>
      <table>
        <thead></thead>
        <tbody>
          {Object.entries(groups)
            .sort(([_, a], [__, b]) => b.length - a.length)
            .map(([group, softwares]) => (
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
        <caption style={{ captionSide: 'bottom', textAlign: 'left' }}>
          * Ongoing development
        </caption>
      </table>
    </nav>
  );
}
