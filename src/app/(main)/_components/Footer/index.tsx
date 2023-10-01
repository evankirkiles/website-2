/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created On Sun Oct 01 2023
 * 2023 Design at Yale
 */
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.container}>
      <hr />
      <ul>
        <li>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
            {/* <CCLogo /> */}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/evankirkiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            {/* <GrGithub /> */}
          </a>
        </li>
      </ul>
      {/* <ul>
        <li></li>
        <li>Email</li>
        <li>Instagram</li>
        <li>Github</li>
      </ul> */}
      <p>Evan&nbsp;Kirkiles&nbsp;©&nbsp;2023 —&nbsp;NYU-CCL&nbsp;2.0</p>
    </footer>
  );
}
