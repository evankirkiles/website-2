/*
 * index.tsx
 * Author: Evan Kirkiles
 * Created On Wed Nov 08 2023
 * 2023 Digital Portfolio
 */
'use client';

import { SitePage, Software } from '@/sanity/schema';
import { VscChevronDown, VscChevronLeft } from 'react-icons/vsc';
import React, { PropsWithChildren, useRef, useState } from 'react';
import s from './SoftwareNav.module.scss';

import useNavState from '@/hooks/useNavState';
import classNames from 'classnames';

interface SoftwareNavProps extends PropsWithChildren {
  groups: { [key: string]: Software[] };
}

export default function SoftwareNav({ groups, children }: SoftwareNavProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { open, setOpen } = useNavState({ menuRef, buttonRef });

  return (
    <aside className={s.container}>
      <div className={s.container_inner}>
        {children}
        <nav
          aria-label="Software Navigator"
          id="software-nav"
          className={s.menu}
        >
          <button
            className={s.menu_control}
            onClick={() => setOpen(!open)}
            aria-controls="software-nav"
            aria-expanded={open}
          >
            Full Index
            <VscChevronLeft
              style={{ transform: open ? 'rotate(-90deg)' : '' }}
            />
          </button>
          <table
            className={classNames(s.table, {
              [s.table_hidden]: !open,
            })}
          >
            <thead></thead>
            <tbody>
              {Object.entries(groups)
                .sort(([_, a], [__, b]) => b.length - a.length)
                .map(([group, softwares]) => (
                  <React.Fragment key={group}>
                    <tr>
                      <td colSpan={2}>{group}</td>
                    </tr>
                    {softwares.map(
                      ({ _id, short_title, date, under_development }) => (
                        <tr key={_id}>
                          <td>
                            {short_title}
                            <span className={s.asterisk}>
                              {under_development && ' *'}
                            </span>
                          </td>
                          <td>{date && new Date(date).getFullYear()}</td>
                        </tr>
                      )
                    )}
                  </React.Fragment>
                ))}
            </tbody>
            <caption style={{ captionSide: 'bottom', textAlign: 'left' }}>
              * Ongoing development
            </caption>
          </table>
        </nav>
      </div>
    </aside>
  );
}
