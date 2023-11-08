/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created On Sun Oct 01 2023
 * 2023 Digital Portfolio
 */
import Link from 'next/link';
import s from './Header.module.scss';
import SkipLink from '@/components/SkipLink';
import NavLink from '@/app/(main)/_components/Header/NavLink';

export default function Header() {
  return (
    <header className={s.container2}>
      <SkipLink />
      <p>
        <NavLink href="/">Evan Kirkiles</NavLink>
      </p>
      <nav>
        <ul>
          <li>
            <NavLink href="/software">Software</NavLink>
          </li>
          <li>
            <NavLink href="/design">Design</NavLink>
          </li>
          <li>
            <NavLink href="/art">Art</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
