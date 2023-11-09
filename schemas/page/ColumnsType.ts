/*
 * ColumnsType.ts
 * Author: Evan Kirkiles
 * Created On Thu Nov 09 2023
 * 2023 Digital Portfolio
 */

import { FiColumns } from 'react-icons/fi';
import { defineField, defineType } from 'sanity';

const VALID_COLUMN_TYPES = ['pe_copy'];

const ColumnsType = defineType({
  name: 'pe_columns',
  type: 'object' as const,
  title: 'Columns',
  icon: FiColumns,
  description: 'Collapsing columns of sub-elements.',
  fields: [
    defineField({
      name: 'justification',
      title: 'Equally space?',
      type: 'boolean' as const,
      initialValue: false,
    }),
    defineField({
      name: 'content_1',
      title: 'First Column',
      type: 'array' as const,
      of: VALID_COLUMN_TYPES.map((type) => ({ type })),
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    }),
    defineField({
      name: 'content_2',
      title: 'Second Column (Optional)',
      type: 'array' as const,
      of: VALID_COLUMN_TYPES.map((type) => ({ type })),
    }),
    defineField({
      name: 'content_3',
      title: 'Third Column (Optional)',
      type: 'array' as const,
      of: VALID_COLUMN_TYPES.map((type) => ({ type })),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Columns',
      };
    },
  },
});

export default ColumnsType;
