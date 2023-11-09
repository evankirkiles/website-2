/*
 * index.tsx
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

import PageColumns from '@/components/PageBuilder/PageColumns';
import PageCopy from '@/components/PageBuilder/PageCopy';
import PageSpacer from '@/components/PageBuilder/PageSpacer';
import { SitePage } from '@/sanity/schema';

type PageElementBlock = NonNullable<SitePage['pageBuilder']>[0];
type PageElementType = PageElementBlock['_type'];

const PAGE_ELEMENT_MAP = {
  pe_copy: PageCopy,
  pe_columns: PageColumns,
  pe_spacer: PageSpacer,
} as const satisfies Record<PageElementType, unknown>;

interface PageBuilderProps {
  content: SitePage['pageBuilder'];
  isPreview?: boolean;
}

/**
 * A component which synthesizes together a configured page builder object from
 * the backend and returns a list of rendered components. You should make sure
 * that all of your components have the necessary fields, e.g. that image and
 * entity references have been expanded in your GROQ query.
 */
export default function PageBuilder({ content, isPreview }: PageBuilderProps) {
  if (!content) return null;
  return content.map((pageBlock) => {
    const Component = PAGE_ELEMENT_MAP[pageBlock._type];
    // @ts-ignore Discriminated union not worth the trouble
    return <Component key={pageBlock._key} value={pageBlock} />;
  });
}
