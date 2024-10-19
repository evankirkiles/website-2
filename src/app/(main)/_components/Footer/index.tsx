/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created On Sun Oct 01 2023
 * 2023 Digital Portfolio
 */
import getPreview from '@/util/getPreview';
import s from './Footer.module.scss';
import getClient from '@/sanity/client';
import { settingsQuery } from '@/sanity/groq';
import { SiteSettings } from '@/sanity/schema';
import unwrapReference from '@/util/sanity';

export default async function Footer() {
  const preview = getPreview();
  const settings: SiteSettings = await getClient(preview).fetch(
    settingsQuery,
    undefined,
    { next: { tags: [`site_settings`] } }
  );
  const cvUrl = settings.resume && unwrapReference(settings.resume.asset).url;

  return (
    <footer className={s.container}>
      <hr />
      <ul>
        <li>
          <a
            href={`mailto:${settings.contact_email}`}
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
        <li>
          <a href={cvUrl} target="_blank" rel="noopener noreferrer">
            CV
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
      <p>
        Evan&nbsp;Kirkiles&nbsp;©&nbsp;2022 —&nbsp;
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC&nbsp;BY&nbsp;4.0
        </a>
      </p>
    </footer>
  );
}
