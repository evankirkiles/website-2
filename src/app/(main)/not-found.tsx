/*
 * not-found.tsx
 * Author: evan kirkiles
 * Created On Fri Sep 01 2023
 * 2023 Digital Portfolio
 */
import { ColorSchemeScript } from '@/util/earlyScripts';
import s from './NotFound.module.scss';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={s.container}>
      <ColorSchemeScript />
      <h1>Page not found.</h1>
      <Link href="/">Go home</Link>
    </div>
  );
}
