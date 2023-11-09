/*
 * PageColumns.tsx
 * Author: Evan Kirkiles
 * Created On Thu Nov 09 2023
 * 2023 Digital Portfolio
 */

import { PeColumns } from '@/sanity/schema';
import s from './PageBuilder.module.scss';
import PageBuilder from '@/components/PageBuilder';

export default function PageColumns({ value }: { value: PeColumns }) {
  return (
    <div
      className={s.columns}
      data-columns-equal={value.justification || undefined}
    >
      <div>
        <PageBuilder content={value.content_1} />
      </div>
      {value.content_2 && (
        <div>
          <PageBuilder content={value.content_2} />
        </div>
      )}
      {value.content_3 && (
        <div>
          <PageBuilder content={value.content_3} />
        </div>
      )}
    </div>
  );
}
