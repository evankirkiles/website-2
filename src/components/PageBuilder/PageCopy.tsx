/*
 * index.tsx
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

import components from '@/components/PortableText';
import { PeCopy } from '@/sanity/schema';
import { PortableText } from '@portabletext/react';
import { HTMLProps } from 'react';
import s from './PageBuilder.module.scss';

export default function PageCopy({ value }: { value: PeCopy }) {
  const contents = (
    <PortableText value={value.content ?? []} components={components} />
  );
  let wrapperProps: HTMLProps<HTMLDivElement> = {};
  if (value.columns > 1) wrapperProps.style = { columnCount: value.columns };
  if (value.hide_on_small) wrapperProps.className = s.hide_on_small;
  if (Object.values(wrapperProps).length === 0) return contents;
  return <div {...wrapperProps}>{contents}</div>;
}
