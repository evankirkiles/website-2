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
import s from './Layout.module.scss';
import Footer from '@/app/(main)/_components/Footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <SkipLink />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
