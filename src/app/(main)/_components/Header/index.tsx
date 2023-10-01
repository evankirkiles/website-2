/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created On Sun Oct 01 2023
 * 2023 Design at Yale
 */
import s from './NavBar.module.scss';

export default function Header() {
  return (
    <header>
      <p>
        <strong>Evan Kirkiles</strong>
      </p>
      <nav>
        <ul>
          <li>Software</li>
          <li>Art</li>
          <li>Design</li>
          <li>Experience</li>
          <li>About</li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
