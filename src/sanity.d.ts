/*
 * sanity.d.ts
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 *
 * Adds support for getting the altText of an image, which is set from
 * the Sanity media plugin.
 */

import * as s from 'sanity-codegen';

declare module 'sanity-codegen' {
  interface SanityImageAsset {
    altText?: string;
  }
}
