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

export default async function SoftwarePage() {
  return (
    <article className={s.container}>
      <h1>Nobotics</h1>
    </article>
  );
}
