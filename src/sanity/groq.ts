/*
 * groq.ts
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 *
 * Define any shared GROQs you'll have to use here. These can get quite huge
 * with a lot of references to expand.
 */

import { groq } from 'next-sanity';

export const pagesQuery = groq`*[_type == "site_page" && path.current != "."] {
  _id, path
}`;

export const pageQuery = groq`*[_type == "site_page" && path.current == $path][0] {
  _id, 
  title,
  path {
    current
  }, 
  pageBuilder[] {
    ...,
  }
}`;
