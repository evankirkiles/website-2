/*
 * layout.tsx
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

import type { Metadata } from 'next';
import { ColorSchemeScript } from '@/util/earlyScripts';
import { SITE_URL } from '@/env';
import s from './Layout.module.scss';
import './globals.scss';

// Base metadata for the entire app
export const metadata: Metadata = {
  title: 'Evan Kirkiles',
  description: 'Evan Kirkiles is a programmer and designer.',
  metadataBase: new URL(SITE_URL),
};

/**
 * A root layout in which both the main app and the sanity studio are wrapped.
 * Apply font classes here to keep your DOM clean of unnecessary <div />'s.
 * Here, you can also add information about your favicon. Use this tool always:
 *  - https://realfavicongenerator.net
 * Then paste the HTML code here, the files in /public, and close the closing carets.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <ColorSchemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
