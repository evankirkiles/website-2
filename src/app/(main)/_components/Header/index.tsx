/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created On Sun Oct 01 2023
 * 2023 Design at Yale
 */
import Link from 'next/link';
import s from './Header.module.scss';
import SkipLink from '@/components/SkipLink';

export default function Header() {
  return (
    <header className={s.container2}>
      <SkipLink />
      <p>
        <Link href="/">Evan Kirkiles</Link>
      </p>
      <nav>
        <ul>
          <li>
            <Link href="/art">Art</Link>
          </li>
          <li>
            <Link href="/art">Software</Link>
          </li>
          <li>
            <Link href="/art">Design</Link>
          </li>
          <li>
            <Link href="/art">About</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
