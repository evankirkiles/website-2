/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created On Sun Oct 01 2023
 * 2023 Design at Yale
 */
import CCLogo from '@/assets/svg/CC';
import s from './Footer.module.scss';
import { GrGithub } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer className={s.container}>
      <hr />
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
        {/* <CCLogo /> */}
      </a>
      <a
        href="https://github.com/evankirkiles"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
        {/* <GrGithub /> */}
      </a>
      {/* <ul>
        <li></li>
        <li>Email</li>
        <li>Instagram</li>
        <li>Github</li>
      </ul> */}
      <p>Evan Kirkiles © 2023 — NYU-CCL 2.0</p>
    </footer>
  );
}
