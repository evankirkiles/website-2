/*
 * SpacerType.ts
 * Author: Evan Kirkiles
 * Created On Thu Nov 09 2023
 * 2023 Digital Portfolio
 *
 */

import { MdOutlineSpaceBar } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

const SpacerType = defineType({
  name: 'pe_spacer',
  type: 'object' as const,
  title: 'Spacer',
  icon: MdOutlineSpaceBar,
  description: 'A spacer fills available space in top-level content.',
  fields: [
    {
      name: 'placeholder',
      type: 'boolean' as const,
      initialValue: true,
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Spacer',
    }),
  },
});

export default SpacerType;
