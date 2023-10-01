/*
 * not-found.tsx
 * Author: evan kirkiles
 * Created On Fri Sep 01 2023
 * 2023 Design at Yale
 */
import s from './NotFound.module.scss';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={s.container}>
      <h1>Page not found.</h1>
      <a href="/">Go home</a>
    </div>
  );
}
