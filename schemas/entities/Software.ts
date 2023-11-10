/*
 * Software.ts
 * Author: evan kirkiles
 * Created On Wed Nov 08 2023
 * 2023 Digital Portfolio
 */

import { FiFile, FiHardDrive } from 'react-icons/fi';
import { defineArrayMember, defineField, defineType } from 'sanity';
import pageElements from '../page';

const Software = defineType({
  name: 'software',
  type: 'document',
  title: 'Software',
  icon: FiHardDrive,
  fields: [
    defineField({
      name: 'short_title',
      type: 'string' as const,
      title: 'Short Title',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description: 'A short title for the table view of the software.',
    }),
    defineField({
      name: 'link',
      type: 'url' as const,
      title: 'Link',
      description: 'A link to a page for the software.',
    }),
    defineField({
      name: 'date',
      type: 'date' as const,
      title: 'Date',
      description: 'When was this software created?',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
      },
    }),
    defineField({
      name: 'group',
      type: 'string' as const,
      title: 'Group',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description: 'A group for the software.',
    }),
    defineField({
      name: 'picture',
      type: 'image' as const,
      title: 'Preview Picture',
      description:
        'A distorted preview image to use. Should be in about a 3:2 aspect ratio.',
      options: {
        metadata: ['lqip'],
      },
    }),
    defineField({
      name: 'under_development',
      type: 'boolean' as const,
      title: 'Under development?',
      description: 'Is the software under development?.',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      initialValue: false,
    }),

    /* ---------------------------------- Page ---------------------------------- */

    defineField({
      name: 'page',
      type: 'reference' as const,
      title: 'Page',
      description: 'An optional page for the software.',
      to: [{ type: 'site_page' }],
    }),
  ],
  preview: {
    select: {
      title: 'short_title',
      subtitle: 'group',
      media: 'picture',
    },
  },
});

export default Software;
