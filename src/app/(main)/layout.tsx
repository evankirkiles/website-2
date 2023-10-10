/*
 * layout.tsx
 * Author: evan kirkiles
 * Created On Mon Aug 28 2023
 * 2023 Design at Yale
 *
 * A basic layout template for you to use as you implement components.
 */

import Header from '@/app/(main)/_components/Header';
import SkipLink from '@/components/SkipLink';
import { PropsWithChildren } from 'react';
import Footer from '@/app/(main)/_components/Footer';
import s from './Layout.module.scss';
import Script from 'next/script';
import { GA4_TAG } from '@/env';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_TAG}`}
      />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA4_TAG}');
    `}
      </Script>
      <Header />
      <main className={s.main} tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
