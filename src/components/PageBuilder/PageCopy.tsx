/*
 * index.tsx
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

import components from '@/components/PortableText';
import { PeCopy } from '@/sanity/schema';
import { PortableText } from '@portabletext/react';

export default function PageCopy({ value }: { value: PeCopy }) {
  const contents = (
    <PortableText value={value.content ?? []} components={components} />
  );
  if (value.columns <= 1) return contents;
  return <div style={{ columnCount: value.columns }}>{contents}</div>;
}
