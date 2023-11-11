/*
 * page.tsx
 * Author: Evan Kirkiles
 * Created On Fri Nov 10 2023
 * 2023 Digital Portfolio
 */

import Image from 'next/image';
import nobot from '@/assets/images/IMG_9991.jpg';
import s from './Art.module.scss';

export default function ArtPage() {
  return (
    <article className={s.container}>
      <Image src={nobot} alt="A robot." />
    </article>
  );
}
