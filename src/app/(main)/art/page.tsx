/*
 * page.tsx
 * Author: Evan Kirkiles
 * Created On Fri Nov 10 2023
 * 2023 Digital Portfolio
 */

import Image from 'next/image';
import nobot from '@/assets/images/Design.png';
import s from './Art.module.scss';

export default function ArtPage() {
  return (
    <article className={s.container}>
      <Image src={nobot} alt="A robot." />
      <h1>Coming soon...</h1>
    </article>
  );
}
