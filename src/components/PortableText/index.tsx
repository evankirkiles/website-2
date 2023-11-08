/*
 * index.tsx
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 *
 * https://www.sanity.io/plugins/react-portable-text
 */

import classNames from 'classnames';
import { PortableTextComponents } from '@portabletext/react';
import s from './PortableText.module.scss';
import Link from 'next/link';

const components: PortableTextComponents = {
  // marks, e.g. <a> or <em>
  listItem({ children }) {
    return <li className={classNames(s.li)}>{children}</li>;
  },
  marks: {
    link({ value, children }) {
      const href = value?.href;
      if (!href) return <>...</>;
      if (!href.startsWith('/'))
        return (
          <a
            href={href}
            className={classNames(s.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      return (
        <Link href={href} className={classNames(s.link)}>
          {children}
        </Link>
      );
    },
  },
};

export default components;
