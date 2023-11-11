/*
 * CopyType.ts
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 *
 * Copy is simple (though very expressive!) portable text.
 */

import { PiTextAlignLeftFill } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

const CopyType = defineType({
  name: 'pe_copy',
  type: 'object' as const,
  title: 'Copy',
  icon: PiTextAlignLeftFill,
  description: 'Configurable block text.',
  fields: [
    defineField({
      name: 'content',
      type: 'array' as const,
      of: [{ type: 'block' as const }],
    }),
    defineField({
      name: 'columns',
      description:
        'How many evenly-spaced columns to break the text into. Default 1.',
      type: 'number' as const,
      initialValue: 1,
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      options: {
        list: [1, 2, 3],
      },
    }),
    defineField({
      name: 'hide_on_small',
      type: 'boolean' as const,
      description: 'If true, hides this copy on small height devices.',
      initialValue: false,
    }),
  ],
});

export default CopyType;
